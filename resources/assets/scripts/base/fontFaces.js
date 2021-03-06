// https://fontfaceobserver.com/
// yarn add fontfaceobserver
import FontFaceObserver from 'fontfaceobserver';

/**
 * Init
 */
function init() {
  const font = new FontFaceObserver('__FONT__');

  font.load().then(() => {
    document.body.classList.add('fonts-loaded');
  }).catch(() => {
    // console.log('font failed to load');
  });
}

export default init;
