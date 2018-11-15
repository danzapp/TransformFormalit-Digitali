function getSheetName() {
  var activeSheet = SS.getActiveSheet();
  var sheetName = activeSheet.getName();
  Logger.log('active sheet name ' + sheetName);
  return sheetName;
}
