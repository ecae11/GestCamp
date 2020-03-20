const onOpen = () => {
  SpreadsheetApp.getUi()
    .createMenu('➫ GestCamp')
    .addItem('Show Sidebar', 'showSidebar')
    .addSeparator()
    .addItem('Credits', 'showCredits')
    .addToUi();
};

export default onOpen;
