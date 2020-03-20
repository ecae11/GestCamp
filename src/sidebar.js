import getDataForEmail from './datafilter';

const showSidebar = () => {
  const template = HtmlService.createTemplateFromFile('index');
  template.data = JSON.stringify(getDataForEmail());
  const html = template
    .evaluate()
    .setTitle('GestCamp')
    .setSandboxMode(HtmlService.SandboxMode.NATIVE);
  SpreadsheetApp.getUi().showSidebar(html);
};

export default showSidebar;
