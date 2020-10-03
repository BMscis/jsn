import _ from 'lodash';
import {navbar,home} from'./home/homepage'
import {content} from'./content/content'
import {profile} from'./profile/profile'
import {footer} from './components/footer/footer'
import './index.css'

document.body.classList.add('body');
document.body.appendChild(navbar());
function torsoe(){
    const tor = document.createElement('div');
    tor.classList.add('torsoe')
    tor.setAttribute('id', 'home')
    tor.appendChild(home());
    tor.appendChild(content());
    tor.appendChild(profile());
    return tor
}

let tors = torsoe();
document.body.appendChild(tors);
document.body.appendChild(footer());


window.addEventListener('scroll', e=>{
    let menu_ls = document.getElementsByClassName('menulist')[0]
    if(menu_ls.classList.contains('active')){
        menu_ls.classList.remove('active')
    }
})

