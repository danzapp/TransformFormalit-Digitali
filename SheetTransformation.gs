function extractObjectsByDataType(){
  var objectsArrayDigital = [];
  var objectsArrayNotDigital = [];
  var objectsArrayIndexDigitalOnTotals = [];
  
  var provincie = objValues.forEach(function(el){
    var pra = el.pra;
    if (isLastChar(pra,'%')){
      objectsArrayIndexDigitalOnTotals.push(el);
    }
    else
    {
      var splitted = pra.split(' ');
      if (splitted.length >1){
        objectsArrayDigital.push(el)
      } else
      {
        objectsArrayNotDigital.push(el)
      }
    } 
 })
 
 Logger.log('Digitali ' +  JSON.stringify(objectsArrayDigital));
 Logger.log('Non digitali ' +  JSON.stringify(objectsArrayNotDigital));
 Logger.log('% Digitali su Totale ' +  JSON.stringify(objectsArrayIndexDigitalOnTotals));
 insertSheet(objectsArrayDigital);
}
 
function insertSheet(obj, type){
  var newSheet = SS.insertSheet()
  newSheet.setName(type);
}