import getGmailAliasList from './alias';
import columnToLetter from './utils';

const getDataForEmail = () => {
  const email = getGmailAliasList()[0];
  const wb = SpreadsheetApp.getActiveSpreadsheet();
  const ss = wb.getSheetByName('Data');
  const lastLetterColumn = columnToLetter(ss.getLastColumn());
  const lastRow = ss.getLastRow();
  const dataSheet = ss.getRange(`A1:${lastLetterColumn}${lastRow}`).getDisplayValues();
  const arr = [];
  // Logger.log(arr);

  dataSheet.forEach(function(b, index) {
    if (index === 0) {
      arr.push(b);
    }
    if (b[0].trim() === email.trim()) {
      // Logger.log(b);
      arr.push(b);
    }
  });

  /*   const so = wb.getSheetByName('Clientes');
  so.getRange(`A1:${lastLetterColumn}${lastRow}`).clearContent();
  Logger.log(arr.length);
  Logger.log(arr[0].length);
  so.getRange(`A1:${lastLetterColumn}${arr.length}`).setValues(arr); */
  return arr;
};

export default getDataForEmail;
