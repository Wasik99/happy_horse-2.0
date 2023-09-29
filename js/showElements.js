window.onload = function() {
  document.getElementById('navbar_id').classList.add('show', 'navbar');
  setTimeout(() => {
    document.getElementById('container_id').classList.add('show', 'container');
  }, 500);
}

window.onscroll = function() {
  if(window.scrollY > 150){
    document.getElementById('onas_id').classList.add('slideUp', 'onas');
    document.getElementById('scrollTop').classList.add('show');
  }
  if(window.scrollY > 900){
    document.getElementById('kwal-content_id').classList.add('slideUp', 'kwal-content');
  }
};
