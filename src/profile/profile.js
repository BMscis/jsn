import _, { forEach } from 'lodash';
import './profile.css';
import {topbutton} from '../content/content'
import {pagetitle} from '../content/content'
import  mo from '../img/mo_profile.jpg';
import joyce from '../img/joyce_profile.jpg'
import  mo_hover from '../img/mo_profile_hover.jpg';
import joyce_hover from '../img/joyce_profile_hover.jpg'
import mary from '../img/mary_profile.jpg'
import mary_hover from '../img/mary_profile_hover.jpg'
import caleb from '../img/caleb_profile.jpg'
import caleb_hover from '../img/caleb_profile_hover.jpg'
import joyce_avatar from '../img/joyceavatar.jpg'
import mo_avatar from '../img/moavatar.jpg'
import caleb_avatar from '../img/calebavatar.jpg'
import mary_avatar from '../img/maryavatar.jpg'
function passportblock(){
    const pass_block = document.createElement('div');
    pass_block.classList.add('passportblock');

    return pass_block
}
function staffprofile(){
    var images = [
        [joyce,joyce_hover,'joycebio'], 
        [mo,mo_hover,'mobio'],
        [mary, mary_hover,'marybio'],
        [caleb, caleb_hover,'calebio']
    ];
    const staff_profile = document.createElement('div');
    staff_profile.classList.add('staffprofile')

    let page_ttl = pagetitle();
    page_ttl.innerHTML = "MEET THE PEOPLE";

    staff_profile.appendChild(page_ttl);

    images.forEach(element => {
        let passport_b = passportblock();
        passport_b.setAttribute('style', "background-image:url(" +element[0]+")")
        passport_b.onmouseover = function(){passport_b.setAttribute('style', "background-image:url("+element[1]+")")}
        passport_b.onmouseout = function(){passport_b.setAttribute('style', "background-image:url("+element[0]+")")}
        passport_b.addEventListener('click',e=>{
            document.getElementById(element[2]).scrollIntoView();
        })
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
    ava.appendChild(topbutton());
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