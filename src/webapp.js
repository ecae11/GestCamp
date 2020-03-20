import getDataForEmail from './datafilter';

const doGet = () => {
  const template = HtmlService.createTemplateFromFile('index');
  template.data = JSON.stringify(getDataForEmail());
  return template
    .evaluate()
    .setTitle('GestCamp')
    .setSandboxMode(HtmlService.SandboxMode.IFRAME) // This method now has no effect — previously it set the sandbox mode used for client-side scripts
    .addMetaTag('viewport', 'width=device-width, initial-scale=1') // important tag for Responsiveness
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL); // Sets the state of the page's X-Frame-Options header, which controls clickjacking prevention.
};

export default doGet;
