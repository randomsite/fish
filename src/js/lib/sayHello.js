function sayHello() {
  // if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1 || navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
  var args = [
    '\n %c Made with ❤️ by RNDM %c %c http://sercraft.com/  %c 1 \n\n',
    'color: #252830; background: #1ca8dd; padding: 8px;',
    'color: #b0976d; background-image: url("https://randomsite.github.io/app/rndm.jpg"); background-size: cover; padding: 8px 12px 8px 11px;',
    'color: #fff; background: #1bc98e; padding: 8px;',
    'color: transparent; background: transparent; padding: 8px;'
  ];
  window.console.log.apply(console, args);
  // } else if (window.console) {
  // 	window.console.log('Made with love ❤️ SerCRAFT - http://sercraft.com/  ❤️');
  // }
}
module.exports = sayHello;
