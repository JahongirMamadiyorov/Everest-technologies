/**
 * Mount Everest Technologies — Contact Form → Google Sheets
 *
 * SETUP: Deploy as Web App (Execute as: Me, Who has access: Anyone)
 * After any update, re-deploy: Deploy → Manage deployments → Edit → New version → Deploy
 */

var SHEET_NAME     = 'Лист1';
var SPREADSHEET_ID = '1aJ0AH58HUJ4BsmYiTrF1bPUakUzfXgzzwVDa3DEvGiI';

// Email to receive order notifications
var NOTIFY_EMAIL     = 'mounteveresttechnologies@gmail.com';

// Telegram bot notification
var TELEGRAM_TOKEN    = '8610426800:AAGD39rkGfO_m0nFlMZgaNieGL3ZAKBLAQM';
var TELEGRAM_CHAT_ID  = '1122453844';          // Personal chat
var TELEGRAM_CHANNEL  = '-1003625559548';   // Channel

// Brand colors
var COLOR_HEADER_BG   = '#1e1b4b';
var COLOR_HEADER_TEXT = '#ffffff';
var COLOR_ROW_ODD     = '#ffffff';
var COLOR_ROW_EVEN    = '#f0f0f8';
var COLOR_BORDER      = '#c5c5d8';

// ─── Entry points ────────────────────────────────────────────────────────────

// Called by the website (GET with URL params — survives Google's redirect)
function doGet(e) {
  try {
    var data = {
      name:        e.parameter.name        || '',
      email:       e.parameter.email       || '',
      company:     e.parameter.company     || '',
      projectType: e.parameter.projectType || '',
      budget:      e.parameter.budget      || '',
      phone:       e.parameter.phone       || '',
      message:     e.parameter.message     || '',
      source:      e.parameter.source      || 'website'
    };
    return processSubmission(data);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Called by testWrite() below (POST with JSON body)
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    return processSubmission(data);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ─── Core logic ──────────────────────────────────────────────────────────────

function processSubmission(data) {
  var ss    = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet = ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0];

  if (sheet.getLastRow() === 0) {
    setupSheet(sheet);
  }

  var nextRow = sheet.getLastRow() + 1;

  var rowData = [
    Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd HH:mm:ss'),
    data.name        || '',
    data.email       || '',
    data.company     || '',
    data.projectType || '',
    data.budget      || '',
    '',               // Phone — written separately as plain text (prevents + formula error)
    data.message     || '',
    data.source      || 'website'
  ];
  sheet.getRange(nextRow, 1, 1, rowData.length).setValues([rowData]);

  // Phone written as plain text to avoid "+" being treated as a formula
  sheet.getRange(nextRow, 7)
       .setNumberFormat('@STRING@')
       .setValue(data.phone || '');

  // Alternating row background
  var bgColor = (nextRow % 2 === 0) ? COLOR_ROW_EVEN : COLOR_ROW_ODD;
  sheet.getRange(nextRow, 1, 1, rowData.length).setBackground(bgColor);

  sheet.getRange(nextRow, 1, 1, rowData.length)
       .setBorder(false, false, true, false, false, false,
                  COLOR_BORDER, SpreadsheetApp.BorderStyle.SOLID);

  sendNotification(data);
  sendTelegramNotification(data);

  return ContentService
    .createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

// ─── Email notification ───────────────────────────────────────────────────────

function sendNotification(data) {
  if (!data) return;

  var subject = data.name
    ? '🏔 New inquiry from ' + data.name
    : '🏔 New Order from Mount Everest Technologies Website';

  var body =
    'You have a new contact form submission.\n\n' +
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n' +
    '  NAME          ' + (data.name        || '—') + '\n' +
    '  EMAIL         ' + (data.email       || '—') + '\n' +
    '  COMPANY       ' + (data.company     || '—') + '\n' +
    '  PHONE         ' + (data.phone       || '—') + '\n' +
    '  PROJECT TYPE  ' + (data.projectType || '—') + '\n' +
    '  BUDGET        ' + (data.budget      || '—') + '\n' +
    '  SOURCE        ' + (data.source      || '—') + '\n' +
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
    'MESSAGE:\n' + (data.message || '—') + '\n\n' +
    'View all submissions:\n' +
    'https://docs.google.com/spreadsheets/d/' + SPREADSHEET_ID;

  var htmlBody =
    '<div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;">' +
    '<div style="background:#1e1b4b;padding:24px 28px;border-radius:8px 8px 0 0;">' +
    '<h2 style="color:#ffffff;margin:0;font-size:20px;">🏔 New Inquiry Received</h2>' +
    '<p style="color:#a5b4fc;margin:6px 0 0;font-size:13px;">Mount Everest Technologies</p>' +
    '</div>' +
    '<div style="background:#f8f8ff;padding:24px 28px;border:1px solid #e0e0f0;border-top:none;">' +
    '<table style="width:100%;border-collapse:collapse;font-size:14px;">' +
    emailRow('Name',         data.name)        +
    emailRow('Email',        data.email)       +
    emailRow('Company',      data.company)     +
    emailRow('Phone',        data.phone)       +
    emailRow('Project Type', data.projectType) +
    emailRow('Budget',       data.budget)      +
    emailRow('Source',       data.source)      +
    '</table>' +
    '<div style="margin-top:20px;">' +
    '<p style="font-size:13px;font-weight:bold;color:#1e1b4b;margin:0 0 6px;">Message</p>' +
    '<p style="font-size:14px;color:#333;background:#fff;padding:12px;border-radius:6px;' +
    'border:1px solid #e0e0f0;margin:0;white-space:pre-wrap;">' +
    (data.message || '—') + '</p>' +
    '</div></div>' +
    '<div style="background:#e8e8f8;padding:14px 28px;border-radius:0 0 8px 8px;' +
    'border:1px solid #e0e0f0;border-top:none;text-align:center;">' +
    '<a href="https://docs.google.com/spreadsheets/d/' + SPREADSHEET_ID + '" ' +
    'style="color:#1e1b4b;font-size:13px;font-weight:bold;text-decoration:none;">' +
    '📊 Open Google Sheet →</a></div></div>';

  MailApp.sendEmail({ to: NOTIFY_EMAIL, subject: subject, body: body, htmlBody: htmlBody });
}

function sendTelegramNotification(data) {
  try {
    var text =
      '🏔 *New Inquiry — Mount Everest Technologies*\n\n' +
      '👤 *Name:* '         + (data.name        || '—') + '\n' +
      '📧 *Email:* '        + (data.email       || '—') + '\n' +
      '🏢 *Company:* '      + (data.company     || '—') + '\n' +
      '📱 *Phone:* '        + (data.phone       || '—') + '\n' +
      '🛠 *Project Type:* ' + (data.projectType || '—') + '\n' +
      '💰 *Budget:* '       + (data.budget      || '—') + '\n' +
      '📝 *Message:*\n'     + (data.message     || '—');

    var url = 'https://api.telegram.org/bot' + TELEGRAM_TOKEN + '/sendMessage';
    var opts = { method: 'post', contentType: 'application/json' };

    opts.payload = JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: text, parse_mode: 'Markdown' });
    UrlFetchApp.fetch(url, opts);

    opts.payload = JSON.stringify({ chat_id: TELEGRAM_CHANNEL, text: text, parse_mode: 'Markdown' });
    UrlFetchApp.fetch(url, opts);
  } catch (e) {
    Logger.log('Telegram error: ' + e.toString());
  }
}

function emailRow(label, value) {
  return '<tr style="border-bottom:1px solid #ececf8;">' +
    '<td style="padding:9px 12px 9px 0;color:#666;font-size:13px;white-space:nowrap;width:120px;">' + label + '</td>' +
    '<td style="padding:9px 0;color:#1a1a2e;font-weight:500;">' +
    (value || '<span style="color:#aaa">—</span>') + '</td></tr>';
}

// ─── Sheet setup ──────────────────────────────────────────────────────────────

function setupSheet(sheet) {
  var headers = ['Timestamp','Name','Email','Company','Project Type','Budget Range','Phone','Message','Source'];
  sheet.appendRow(headers);

  var headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange
    .setFontWeight('bold').setFontSize(10)
    .setFontColor(COLOR_HEADER_TEXT).setBackground(COLOR_HEADER_BG)
    .setHorizontalAlignment('center').setVerticalAlignment('middle').setWrap(false);

  sheet.setFrozenRows(1);
  sheet.setRowHeight(1, 36);
  sheet.setColumnWidth(1, 155);
  sheet.setColumnWidth(2, 130);
  sheet.setColumnWidth(3, 190);
  sheet.setColumnWidth(4, 130);
  sheet.setColumnWidth(5, 165);
  sheet.setColumnWidth(6, 120);
  sheet.setColumnWidth(7, 145);
  sheet.setColumnWidth(8, 260);
  sheet.setColumnWidth(9,  95);

  sheet.getRange(1, 7, sheet.getMaxRows(), 1).setNumberFormat('@STRING@');
  headerRange.setBorder(true, true, true, true, true, false,
    COLOR_HEADER_BG, SpreadsheetApp.BorderStyle.SOLID_MEDIUM);
}

// ─── Manual test functions ────────────────────────────────────────────────────

// Select "testPost" and click Run to simulate a real website submission via POST
function testPost() {
  var result = doPost({
    postData: {
      contents: JSON.stringify({
        name: 'Test User', email: 'test@example.com', company: 'ACME Corp',
        projectType: 'website, mobile', budget: '$500 - $1,500',
        phone: '+998 90-123-45-67', message: 'Test POST submission', source: 'manual-test'
      })
    }
  });
  Logger.log(result.getContent());
}

// Select "testGet" and click Run to simulate the website's GET request
function testGet() {
  var result = doGet({
    parameter: {
      name: 'Test User', email: 'test@example.com', company: 'ACME Corp',
      projectType: 'website, mobile', budget: '$500 - $1,500',
      phone: '+998 90-123-45-67', message: 'Test GET submission', source: 'manual-test'
    }
  });
  Logger.log(result.getContent());
}

// Run this once to fix styling on an already-populated sheet
function reformatExistingSheet() {
  var ss    = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet = ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0];
  var lastRow = sheet.getLastRow();
  var cols = 9;
  if (lastRow < 1) return;

  var headerRange = sheet.getRange(1, 1, 1, cols);
  headerRange.setFontWeight('bold').setFontSize(10)
    .setFontColor(COLOR_HEADER_TEXT).setBackground(COLOR_HEADER_BG)
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet.setFrozenRows(1);
  sheet.setRowHeight(1, 36);
  sheet.setColumnWidth(1,155); sheet.setColumnWidth(2,130); sheet.setColumnWidth(3,190);
  sheet.setColumnWidth(4,130); sheet.setColumnWidth(5,165); sheet.setColumnWidth(6,120);
  sheet.setColumnWidth(7,145); sheet.setColumnWidth(8,260); sheet.setColumnWidth(9,95);
  sheet.getRange(1, 7, sheet.getMaxRows(), 1).setNumberFormat('@STRING@');

  for (var r = 2; r <= lastRow; r++) {
    var bg = (r % 2 === 0) ? COLOR_ROW_EVEN : COLOR_ROW_ODD;
    sheet.getRange(r, 1, 1, cols).setBackground(bg)
      .setBorder(false,false,true,false,false,false, COLOR_BORDER, SpreadsheetApp.BorderStyle.SOLID);
    var phoneCell = sheet.getRange(r, 7);
    phoneCell.setNumberFormat('@STRING@').setValue(phoneCell.getValue().toString());
  }
  Logger.log('Done. Rows processed: ' + (lastRow - 1));
}