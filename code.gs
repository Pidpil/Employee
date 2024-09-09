// ***** 💳 🏠 ✏️ 🏡 ***** //


function doGet() {  
  return HtmlService.createHtmlOutputFromFile('index')
}
function addData(obj){
let ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Nursedata')
ss.appendRow([
  new Date(),
  obj.rahad13lak,
  obj.gender,
  obj.title,
  obj.fullName,
  obj.maritalStatus,
  obj.address,
  obj.birthDate,
  obj.currentAge,
  obj.chronicDiseases,
  obj.educationLevel,
  obj.department,
  obj.positionLevel,
  obj.positionStartDate,
  obj.currentPosition,
  obj.positionStartYear,
  obj.employmentDate,
  obj.retirementDate,
  obj.additionalTraining,  
  obj.email,
  obj.photoUrl
  ]); 
 }
