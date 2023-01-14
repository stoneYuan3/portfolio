
const urlParams = new URLSearchParams(window.location.search);
const workName = urlParams.get('type');

console.log(workName);

var page_title=document.getElementsByTagName('h1')[0];
var link_gallery=document.getElementById('link-gallery');
var link_about=document.getElementById('link-about');
var link_resume=document.getElementById('link-resume');

var section_showRoom=document.getElementsByClassName('section-contentDisplay')[0];

if(workName==null){

	page_title.innerHTML='Gallery';
	link_gallery.classList.add('style-selected');
	link_about.classList.remove('style-selected');
	link_resume.classList.remove('style-selected');

	// var arr_work_list=[gallery_riskmap_2022,gallery_garage_2022,gallery_frontendIntern_2020];
	var arr_work_list=[gallery_riskmap_2022,gallery_garage_2022,gallery_javagame_2020];
	var worklist="";
	for(let i=0;i<arr_work_list.length;i++){
		worklist+=arr_work_list[i];
	}

	section_showRoom.innerHTML=worklist;

}
else if(workName=='about'){

	page_title.innerHTML='About Me';
	link_gallery.classList.remove('style-selected');
	link_about.classList.add('style-selected');
	link_resume.classList.remove('style-selected');

	//equal to $('.section-contentDisplay').html(about); in JQuery
	section_showRoom.innerHTML=about;

}

else if(workName=='resume'){

	page_title.innerHTML='Resume';
	link_gallery.classList.remove('style-selected');
	link_about.classList.remove('style-selected');
	link_resume.classList.add('style-selected');

	//equal to $('.section-contentDisplay').html(about); in JQuery
	section_showRoom.innerHTML=resume;

}