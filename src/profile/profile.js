import _, { forEach } from 'lodash';
import './profile.css';
import {topbutton} from '../content/content'
import {pagetitle} from '../content/content'
import  mo from '../img/mo.svg';
import joyce from '../img/joyce.svg'
import mary from '../img/marys.svg'
import caleb from '../img/caleb.svg'
import joyce_avatar from '../img/joyceavatar.jpg'
import mo_avatar from '../img/moavatar.jpg'
import caleb_avatar from '../img/calebavatar.jpg'
import mary_avatar from '../img/maryavatar.jpg'
function passport(){
    const passp = document.createElement('div');
    passp.classList.add('passport')
    return passp
}
function textblock(){
    const textblk = document.createElement('div');
    textblk.classList.add('textdiv')
    return textblk
}
function passportblock(){
    const pass_block = document.createElement('div');
    pass_block.classList.add('passportblock');

    return pass_block
}
function staffprofile(){
    var images = [
        [joyce,'JOYCE','joycebio'], 
        [mo,'MO','mobio'],
        [mary,'MARY','marybio'],
        [caleb, 'CALEB','calebio']
    ];
    const staff_profile = document.createElement('div');
    staff_profile.classList.add('staffprofile')

    let page_ttl = pagetitle();
    page_ttl.innerHTML = "MEET THE PEOPLE";

    staff_profile.appendChild(page_ttl);

    images.forEach(element => {
        let passport_b = passportblock();
        let passportdiv = passport();
        let tb = textblock();
        passportdiv.setAttribute('style', "background-image:url("+element[0]+")")
        tb.innerHTML = element[1]
        // passport_b.setAttribute('style', "background-image:url(" +element[0]+")")
        // passport_b.onmouseover = function(){passport_b.setAttribute('style', "background-image:url("+element[1]+")")}
        // passport_b.onmouseout = function(){passport_b.setAttribute('style', "background-image:url("+element[0]+")")}
        passport_b.addEventListener('click',e=>{
            document.getElementById(element[2]).scrollIntoView();
        })
        passport_b.appendChild(passportdiv);
        passport_b.appendChild(tb);
        staff_profile.appendChild(passport_b);
    });
    return staff_profile
}
function avatar(){
    var avata = document.createElement('div')
    avata.classList.add('avatar')
    return avata
}
function avatarprofiles(){
    var avatar_images = [
        [joyce_avatar,'joycebio'],
        [mo_avatar,'mobio'],
        [mary_avatar,'marybio'],
        [caleb_avatar,'calebio']
    ]
    const avatars = document.createElement('div');
    avatars.classList.add('avatarprofiles');
    avatar_images.forEach(element=>{
        let ava_tars = avatar();
        ava_tars.setAttribute('style', "background-image:url(" +element[0]+")")
        ava_tars.setAttribute('id',element[1])
        avatars.appendChild(ava_tars);
    })
    return avatars
}
function avatarblock(){
    const ava = document.createElement('div');
    ava.classList.add('avatarblock');
    let avaprofiles = avatarprofiles();
    let bt = topbutton();
    bt.innerHTML='top';
    ava.appendChild(bt);
    ava.appendChild(avaprofiles);
    return ava
}
function profile(){
    const prof = document.createElement('div');
    prof.classList.add('profile')
    prof.setAttribute('id', 'aboutus')
    let staff_p = staffprofile();
    let ava_tar = avatarblock();
    prof.appendChild(staff_p);
    prof.appendChild(ava_tar);

    return prof
}

export {profile}