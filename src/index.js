// import './js/r - get';
// import './js/c - post';
// import './js/u - patch';
// import './js/d - delete';
import { alert, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/BrightTheme.css';
defaultModules.set(PNotifyMobile, {});
 
alert({
  text: 'Привіт!'
});