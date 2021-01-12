function doGet( e ) {
  // var test = e.parameter;
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getActiveSection();
      body.replaceText("%NAME%", 'Нужный текст');
  doc.saveAndClose();
  return 'wtf';
}
