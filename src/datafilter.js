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

  dataSheet.forEach((b, index) => {
    if (index === 0) {
      arr.push(b);
    }
    dataSheet[0].forEach((a, index2) => {
      if (a.toUpperCase() === 'EMAIL_USER') {
        if (b[index2].trim() === email.trim()) {
          arr.push(b);
        }
      }
    });
  });

  /*   const so = wb.getSheetByName('Clientes');
  so.getRange(`A1:${lastLetterColumn}${lastRow}`).clearContent();
  Logger.log(arr.length);
  Logger.log(arr[0].length);
  so.getRange(`A1:${lastLetterColumn}${arr.length}`).setValues(arr); */
  return arr;
};

export default getDataForEmail;
