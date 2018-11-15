var inputReport = function(){
  // object model{"rowNum":1,"direzioneCompartimentaleCompetente":"Lazio, Abruzzo, Campania, Basilicata, Molise, Calabria, Puglia e Sicilia","direzioneTerritorialeCompetente":"Palermo","pra":"AGRIGENTO","autenticheRavdigitaliGediAutenticheDigitaliVsTotaleAutentiche":"Autentiche RAV","totAutentiche":26,"formalitDiStaPraNonDigitaliDigitaliFormalitDigitaliVsTotalePratiche":"formalità non digitali","totalePerStaPra":402,"":0},
  // presume che il titolo si trovi nella cella A1 del primo foglio
  this.title  = title
  //this.startDate = startDate;
  //this.endDate = endDate;
};


var outputReport = function(type,title,data){
    this.title = title;
    this.type = type;
    
}


function testReceivedReport(){
  var thisReport = new inputReport();
  
  Logger.log(thisReport.title);
  
}