var SS = SpreadsheetApp.getActive();
var sheet = SS.getSheets()[0];
var values = sheet.getDataRange().getValues();
Logger.log('Sheet rows: ' + values.length);
var title = values[0][0];
values.splice(0,1);
var totals = [];
totals.push(values[1], values[2]);
values.splice(0, 3);
var headers = values[0];
values.splice(0,1)
var objValues = ObjApp.splitRangesToObjects(headers,values);


function initScript(){
  Logger.log('first sheet name ' + sheet.getName());
  Logger.log('Title ' + title);
  //Logger.log('Totals ' + totals);
  //Logger.log('Values ' + values);
  Logger.log('Headers ' + headers);
  Logger.log('Data rows: ' + values.length);
  Logger.log(JSON.stringify(objValues));
}
