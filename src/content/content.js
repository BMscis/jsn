import _ from 'lodash';
import './content.css'

function pagetitle(){
    const page_title =  document.createElement('div')
    page_title.classList.add('pagetitle')
    return page_title
}
export {pagetitle}
function videocard(){
    const movie = document.createElement('div');
    movie.classList.add('videocard')
    
    return movie
}
function videos(){
    const vid  =  document.createElement('div');
    vid.classList.add('videos');
    
    let video_card = videocard();
    vid.appendChild(video_card);

    return vid
}
function catalog(){
    const catal = document.createElement('div');
    catal.classList.add('catalog')

    let pag_til = pagetitle();
    pag_til.innerHTML = "CATALOG";
    let vid_card = videos();
    catal.appendChild(pag_til)
    catal.appendChild(vid_card);
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
        document.getElementById('home').scrollIntoView();
    })
    return topbutton
}
export {topbutton}
function latest (){
    const lates = document.createElement('div');
    lates.classList.add('latest');
    
    let pag_til = pagetitle();
    pag_til.innerHTML = "WHAT'S NEW!";
    let pag_til2 = pagetitle();
    pag_til2.classList.add('contact');
    pag_til2.innerHTML = "CONTACT US";
    let pad = latestpad();
    let tw = twitter();
    let btn = topbutton();

    lates.appendChild(pag_til);
    lates.appendChild(tw);
    lates.appendChild(pag_til2);
    lates.appendChild(btn);
    lates.appendChild(pad);
    return lates
}
function content(){
    const contents = document.createElement('div');
    contents.classList.add('content')
    contents.setAttribute("id","content")
    let cata_log = catalog();
    let late_st = latest();

    contents.appendChild(cata_log);
    contents.appendChild(late_st);
    return contents
}

export{content}