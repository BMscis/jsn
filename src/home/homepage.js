import _, { divide } from 'lodash';
import './homepage.css';
import fireflame from '../img/flames.svg'
import umage from '../img/utatats.jpg'
import umagex from '../img/utatac.svg'
function header(){
    const header = document.createElement('h1');
    header.classList.add('headingtext');
    return header
}

function menutext(){
    const txt = document.createElement('div');
    txt.classList.add("menutext")
    return txt
}
function menulist(){
    const menulist = document.createElement('div');
    menulist.classList.add('menulist');

    let home = menutext();
    let aboutus = menutext();
    let contactus = menutext();
    let catalog = menutext();

    catalog.addEventListener("click", e=>{
        document.getElementById("catalog").scrollIntoView({block: "start", inline: "center"});
    })
    home.addEventListener("click", e=>{
        document.getElementById("home").scrollIntoView({block: "start", inline: "center"});  
    })
    contactus.addEventListener("click", e=>{
        document.getElementById("contactus").scrollIntoView({block: "start", inline: "center"});
    })
    aboutus.addEventListener("click", e=>{
        document.getElementById("aboutus").scrollIntoView({block: "start", inline: "center"});
    })
    home.innerHTML = "Home";
    aboutus.innerHTML = "About Us";
    contactus.innerHTML = "Contact Us";
    catalog.innerHTML = "Catalog";
    menulist.appendChild(home);
    menulist.appendChild(aboutus);
    menulist.appendChild(contactus);
    menulist.appendChild(catalog);

    return menulist
}
function menubutton(){
    const menubutton = document.createElement('button')
    menubutton.classList.add('menubutton')
    menubutton.innerHTML = 'menu'

    menubutton.addEventListener('click', e=>{
        let menu_ls = document.getElementsByClassName('menulist')[0]
            menu_ls.classList.toggle('active')

    })

    return menubutton
}
function menubar(){
    const menu = document.createElement('ul');
    menu.classList.add('menubar');
    let home = menutext();
    let aboutus = menutext();
    let contactus = menutext();
    let catalog = menutext();

    catalog.addEventListener("click", e=>{
        document.getElementById("catalog").scrollIntoView({block: "start", inline: "center"});
    })
    home.addEventListener("click", e=>{
        document.getElementById("home").scrollIntoView({block: "start", inline: "center"});  })
    contactus.addEventListener("click", e=>{
        document.getElementById("contactus").scrollIntoView({block: "start", inline: "center"});
    })
    aboutus.addEventListener("click", e=>{
        document.getElementById("aboutus").scrollIntoView({block: "start", inline: "center"});
    })
    home.innerHTML = "Home";
    aboutus.innerHTML = "About Us";
    contactus.innerHTML = "Contact Us";
    catalog.innerHTML = "Catalog";
    menu.appendChild(home);
    menu.appendChild(aboutus);
    menu.appendChild(contactus);
    menu.appendChild(catalog);
    return menu
}
function navbar() {
    const navbar = document.createElement('div');
    let hd = header();
    let menu = menubar();
    let menu_list = menulist();
    let menubuttons  = menubutton();

    hd.innerHTML="JASENA PRODUCTIONS";
    navbar.classList.add('navbar');
    navbar.appendChild(hd)
    navbar.appendChild(menu)
    navbar.appendChild(menubuttons)
    navbar.appendChild(menu_list)
    return navbar;
}
export {navbar}
function visualbar(){
    const imageblock = document.createElement('div');
    imageblock.classList.add('visualbar');
    imageblock.setAttribute('id','visualbar')
    let utimag = document.createElement('img')
    utimag.setAttribute('src', umagex)
    imageblock.appendChild(utimag)
    return imageblock
}

function paragraph(){
    const par  = document.createElement('p');
    par.classList.add('p')
    return par
}
function flames(){
    const fire =  document.createElement('object');
    fire.setAttribute('data', fireflame)
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
    const textContainer = document.createElement('div')
    const para = document.createElement('p')
    const header2 = document.createElement('h2')

    textContainer.classList.add('textcontainer')
    para.classList.add('homeparagraph')
    para.innerHTML = "Are you thinking about developing a series? Get in touch with one of our team members for an in depth overview."
    home_page.classList.add("home");
    home_page.id = "home"
    let visual_bar=visualbar();
    header2.innerHTML = "Watch the latest episode of <strong>Utata!</strong>"
    header2.addEventListener('click',e=>{
        document.getElementById("catalog").scrollIntoView({block: "start", inline: "center"});
    })
    const p1 = document.createElement('p')
    p1.innerHTML = ''

    home_page.addEventListener('click',e=>{
        let menu_ls = document.getElementsByClassName('menulist')[0]
        if(menu_ls.classList.contains('active')){
            menu_ls.classList.remove('active')
        }
    
    })

    home_page.appendChild(visual_bar);
    textContainer.appendChild(header2)
    textContainer.appendChild(para)
    home_page.appendChild(textContainer)
    return home_page

}

export {home}