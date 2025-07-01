document.querySelector('.easter-egg-trigger').addEventListener('mouseenter', function() {
  document.querySelector('.blocks-container').classList.add('easter-egg');
});
document.querySelector('.easter-egg-trigger').addEventListener('mouseleave', function() {
  document.querySelector('.blocks-container').classList.remove('easter-egg');
});
