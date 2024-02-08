var slideout = new Slideout({
  'panel': document.getElementById('panel'),
  'menu': document.getElementById('menu'),
  'padding': 256,
  'tolerance': 70,
  'duration': 300,
  'easing': 'ease-out'
});

slideout.on('beforeopen', function() {
  document.getElementById('menu').classList.add('slideout-menu-open');
  document.getElementById('panel').classList.add('slideout-panel-open');
});

slideout.on('beforeclose', function() {
  document.getElementById('menu').classList.remove('slideout-menu-open');
  document.getElementById('panel').classList.remove('slideout-panel-open');
});

document.querySelector('.toggle-button').addEventListener('click', function() {
  slideout.toggle();
});