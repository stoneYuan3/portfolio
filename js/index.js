
var link_gallery=document.getElementById('link-gallery');
link_gallery.classList.add('style-selected');


var arr_work_list=[gallery_riskmap_2022,gallery_garage_2022,gallery_frontendIntern_2020];
var worklist="";
for(let i=0;i<arr_work_list.length;i++){
	worklist+=arr_work_list[i];
}

var section_showRoom=document.getElementsByClassName('section-contentDisplay')[0];
section_showRoom.innerHTML=worklist;