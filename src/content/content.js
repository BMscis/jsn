import _ from 'lodash';
import './content.css'
import '../components/card/card'
import { card } from '../components/card/card';
function pagetitle(){
    const page_title =  document.createElement('div')
    page_title.classList.add('pagetitle')
    return page_title
}
export {pagetitle}


function catalog(){
    const catal = document.createElement('div');
    catal.classList.add('catalog')
    catal.setAttribute('id', 'catalog')
    let pag_til = pagetitle();
    let cardz = card();
    
    catal.appendChild(cardz)
    catal.appendChild(pag_til)
    return catal
}
function latestpad(){
    const padd = document.createElement('div');
    padd.classList.add('latestpad')
    return padd
}
function twitter(){
    const twit = document.createElement('div');
    twit.classList.add('twitter');
    return twit
}
function topbutton(){
    const topbutton =  document.createElement('button');
    topbutton.classList.add('topbutton');
    topbutton.addEventListener('click', e=>{
        window.scrollTo(0,0);
    })
    return topbutton
}
export {topbutton}
function latest (){
    const lates = document.createElement('div');
    lates.classList.add('latest');
    lates.setAttribute('id','latest');
    
    let pag_til = pagetitle();
    pag_til.innerHTML = "WHAT'S NEW!";
    let pag_til2 = pagetitle();
    pag_til2.classList.add('contact');
    pag_til2.innerHTML = "CONTACT US";
    let pad = latestpad();
    let tw = twitter();
    let btn = topbutton();

    btn.innerHTML = 'top';
    lates.appendChild(pag_til);
    lates.appendChild(tw);
    lates.appendChild(pag_til2);
    lates.appendChild(btn);
    lates.appendChild(pad);
    return lates
}
function latestholder(){
    const ld = document.createElement('div');
    ld.classList.add('ld')


    let late_st = latest();
    ld.appendChild(late_st);

    return ld
}
function content(){
    const contents = document.createElement('div');
    contents.classList.add('content')
    contents.setAttribute("id","content")
    let cata_log = catalog();
    let lt_holdr = latestholder();
    
    contents.addEventListener('click',e=>{
        let menu_ls = document.getElementsByClassName('menulist')[0]
        if(menu_ls.classList.contains('active')){
            menu_ls.classList.remove('active')
        }
    
    })
    contents.appendChild(cata_log);
    return contents
}

export{content}