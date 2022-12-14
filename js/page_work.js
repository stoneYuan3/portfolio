  

  const urlParams = new URLSearchParams(window.location.search);
  const workName = urlParams.get('work');

  console.log(workName);

  var link_gallery=document.getElementById('link-gallery');
  link_gallery.classList.remove('style-selected');

  // if(workName=='riskmap'){
  //   var title=document.getElementsByTagName('h1')[0];
  //   title.innerHTML='529 Garage Risk Map';
  //   // $('h1').html('529 Garage Risk Map');
  // }