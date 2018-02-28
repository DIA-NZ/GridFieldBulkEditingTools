if(typeof(ss) == 'undefined' || typeof(ss.i18n) == 'undefined') {
  if(typeof(console) != 'undefined') console.error('Class ss.i18n not defined');
} else {
  ss.i18n.addDictionary(en, {
  "GRIDFIELD_BULK_UPLOAD.PROGRESS_INFO":               "Uploading %s file(s). %s done. %s error(s).",
  "GRIDFIELD_BULK_MANAGER.BULKACTION_EMPTY_SELECT":    "You must select at least one record.",
  "GRIDFIELD_BULK_MANAGER.CONFIRM_DESTRUCTIVE_ACTION": "The data will be lost permanently. Do you want to continue?"
});
}