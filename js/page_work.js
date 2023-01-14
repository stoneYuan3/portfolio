  
const urlParams = new URLSearchParams(window.location.search);
const workName = urlParams.get('work');

console.log(workName);

var page_title=document.getElementsByTagName('h1')[0];
var section_showRoom=document.getElementsByClassName('section-contentDisplay')[0];

var link_gallery=document.getElementById('link-gallery');
link_gallery.classList.remove('style-selected');

if(workName=='riskmap'){
    page_title.innerHTML=work_riskmap_h1;
    section_showRoom.innerHTML=work_template;

    document.getElementById('banner').setAttribute('src','img/banner-riskmap.png')
    document.getElementById('link-work-github').setAttribute('href','https://github.com/stoneYuan3/529-Garage-Risk-Map')    
    document.getElementById('work-type').innerHTML="Full Stack Website";
    document.getElementById('work-skill').innerHTML="HTML | CSS | JQuery | PHP | MySQL";
    document.getElementById('work-desc').innerHTML="School Project, Individual, 2022";

    document.getElementById('section-work-body').innerHTML=work_riskmap_content;
}
else if(workName=='garage'){
    page_title.innerHTML=work_garage_h1;
    section_showRoom.innerHTML=work_template;

    document.getElementById('banner').setAttribute('src','img/banner-garage.png');
    document.getElementById('link-work-github').setAttribute('href','https://github.com/stoneYuan3/IAT352-finalProject')    
    document.getElementById('work-type').innerHTML="Full Stack Website";
    document.getElementById('work-skill').innerHTML="HTML | CSS | JQuery | PHP | MySQL";
    document.getElementById('work-desc').innerHTML="School Project, Group, 2022";

    document.getElementById('section-work-body').innerHTML=work_garage_content;    
}

else if(workName=='edusim'){
    page_title.innerHTML=work_edusim_h1;
    section_showRoom.innerHTML=work_template;

    document.getElementById('banner').setAttribute('src','img/banner-edusim.png');
    document.getElementById('link-work-github').setAttribute('href','https://github.com/stoneYuan3/PRCeducationSimulator-IAT265Final')    
    document.getElementById('work-type').innerHTML="Java Mini Game";
    document.getElementById('work-skill').innerHTML="Java";
    document.getElementById('work-desc').innerHTML="School Project, Individual, 2020";

    document.getElementById('section-work-body').innerHTML=work_edusim_content;     
}