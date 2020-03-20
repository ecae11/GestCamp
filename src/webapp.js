import getDataForEmail from './datafilter';

const doGet = () => {
  const template = HtmlService.createTemplateFromFile('index');
  template.data = JSON.stringify(getDataForEmail());
  return template
    .evaluate()
    .setTitle('GestCamp')
    .setSandboxMode(HtmlService.SandboxMode.NATIVE);
};

export default doGet;
