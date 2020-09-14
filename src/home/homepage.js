import _ from 'lodash';
import './homepage.css'
function header(){
    const header = document.createElement('div');
    header.classList.add('headingtext');
    return header
}
function menubar(){
    const menu = document.createElement('div');
    menu.classList.add('menubar');
    let home = menutext();
    let aboutus = menutext();
    let contactus = menutext();
    let catalog = menutext();

    catalog.addEventListener("click", e=>{
        document.getElementById("content").scrollIntoView();
    })
    contactus.addEventListener("click", e=>{
        document.getElementById("content").scrollIntoView();
    })
    aboutus.addEventListener("click", e=>{
        document.getElementById("aboutus").scrollIntoView();
    })
    home.setAttribute('id','home')
    home.innerHTML = "HOME";
    aboutus.innerHTML = "ABOUT US";
    contactus.innerHTML = "CONTACT US";
    catalog.innerHTML = "CATALOG";
    menu.appendChild(home);
    menu.appendChild(aboutus);
    menu.appendChild(contactus);
    menu.appendChild(catalog);
    return menu
}
function menutext(){
    const txt = document.createElement('div');
    txt.classList.add("menutext")
    return txt
}
function navbar() {
    const navbar = document.createElement('div');
    let hd = header();
    let menu = menubar();
    hd.innerHTML="JASENA PRODUCTIONS";
    navbar.classList.add('navbar');
    navbar.appendChild(hd)
    navbar.appendChild(menu)
    return navbar;
}
function playbutton(){
    const playbut = document.createElement('button');
    playbut.classList.add("playbutton")
    return playbut
}
function playpadding(){
    const playpad = document.createElement('div');
    playpad.classList.add("playpad")
    let p_button = playbutton();
    playpad.appendChild(p_button)
    return playpad
}
function visualbar(){
    const imageblock = document.createElement('div');
    imageblock.classList.add('visualbar');
    let play_pad = playpadding();
    imageblock.appendChild(play_pad);
    return imageblock
}
function paragraph(){
    const par  = document.createElement('p');
    par.classList.add('p')
    return par
}
function flames(){
    const fire =  document.createElement('div');
    fire.classList.add('flames');
    return fire
}
function articletext(){
    const article_text = document.createElement('div');
    article_text.classList.add("articletext")
    return article_text
}
function textblock(){
    const textb = document.createElement('div');
    textb.classList.add('textblock');

    let article_txt = articletext();
    let parag = paragraph();
    let flame =  flames();

    parag.innerHTML = 
    "Utata, a Swahili word that means turmoil,<br> is the kindle that sparks clandestine scheme, emotes  passions and unlikely  bed fellows."
    article_txt.innerHTML = "UTATA";

    textb.appendChild(article_txt);
    textb.appendChild(parag);
    textb.appendChild(flame);
    return textb
}
function home(){
    const home_page  =  document.createElement('div');
    home_page.classList.add("home");
    home_page.setAttribute("id", "home");

    let nav_bar = navbar();
    let visual_bar=visualbar();
    let tex_block = textblock();

    home_page.appendChild(nav_bar);
    home_page.appendChild(visual_bar);
    home_page.appendChild(tex_block);
    
    return home_page

}

export {home}