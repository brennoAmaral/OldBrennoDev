function callBack(cb) {
  const width = window.innerWidth;
  if (width < 600) {
    cb('xs');
  } else if (width >= 600 && width <= 960) {
    cb('sm');
  } else if (width >= 960 && width <= 1280) {
    cb('md');
  } else if (width >= 1280 && width <= 1920) {
    cb('lg');
  } else {
    cb('xl');
  }
}

export function on(cb = () => { }) {
  window.addEventListener('resize', () => callBack(cb));
  callBack(cb);
}

export function off(cb = () => { }) {
  window.removeEventListener('resize', () => callBack(cb));
}

export default on;
