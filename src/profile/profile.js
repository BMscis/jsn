import _, { forEach } from 'lodash';
import './profile.css';
import mo from '../img/mo.svg';
import joyce from '../img/joyce.svg'
import mary from '../img/marys.svg'
import caleb from '../img/caleb.svg'
function passport() {
    const passp = document.createElement('div');
    passp.classList.add('passport')
    return passp
}
function passportblock() {
    const pass_block = document.createElement('div');
    pass_block.classList.add('passportblock');

    return pass_block
}
function staffprofile() {
    var images = [
        [joyce, 'JOYCE', 'joycebio'],
        [mo, 'MO', 'mobio'],
        [mary, 'MARY', 'marybio'],
        [caleb, 'CALEB', 'calebio']
    ];
    const staff_profile = document.createElement('div');
    staff_profile.classList.add('staffprofile')

    images.forEach(element => {
        let passport_b = passportblock();
        let passportdiv = passport();
        passportdiv.setAttribute('style', "background-image:url(" + element[0] + ")")
        passport_b.addEventListener('click', e => {
            document.getElementById(element[2]).scrollIntoView({ block: "nearest" });
            if (document.getElementsByClassName('avatarblock')[0].style.opacity == '0') {
                document.getElementsByClassName('avatarblock')[0].style.opacity = '1'
            }
            else {
                document.getElementsByClassName('avatarblock')[0].style.opacity = '1'

            }
            if (document.getElementsByClassName('passportactive').length > 0) {
                var pb = document.getElementsByClassName('passportblock')
                for (let item of pb) {
                    item.classList.remove('passportactive')
                };
                passport_b.classList.add('passportactive')
            }
            else {
                passport_b.classList.add('passportactive')
            }

        })
        passport_b.appendChild(passportdiv);
        staff_profile.appendChild(passport_b);
    });

    return staff_profile
}
function avatar() {
    var avata = document.createElement('div')
    avata.classList.add('avatar')
    return avata
}
function avatarprofiles() {
    var avatar_images = [
        [joyce, 'joycebio', 'Joyce Andika'],
        [mo, 'mobio', 'George Muiruri'],
        [mary, 'marybio', 'Mary Uthuma'],
        [caleb, 'calebio', 'Caleb Oyugi']
    ]
    const avatarul = document.createElement('ul')
    avatarul.classList.add('avatarul')

    const cancelbutton = document.createElement('button')
    cancelbutton.classList.add('cancelbutton')

    cancelbutton.addEventListener('click',e=>{
        document.getElementsByClassName('avatarblock')[0].style.opacity = '0'
    })
    

    const avatars = document.createElement('div');
    avatars.classList.add('avatarprofiles');

    avatar_images.forEach(element => {
        let ava_tars = avatar();
        ava_tars.setAttribute('style', "background-image:url(" + element[0] + ")")

        let avatarcard = document.createElement('div')
        avatarcard.classList.add('avatarcard')
        avatarcard.setAttribute('id', element[1])

        let cardname = document.createElement('p')
        cardname.classList.add('cardname')
        cardname.innerHTML = element[2]

        avatarcard.appendChild(ava_tars)
        avatarcard.appendChild(cardname)

        avatarul.appendChild(avatarcard)
    })
    avatars.appendChild(cancelbutton)
    avatars.appendChild(avatarul);

    return avatars
}
function avatarblock() {
    const ava = document.createElement('div');
    ava.classList.add('avatarblock');
    ava.style.opacity = '0'
    let avaprofiles = avatarprofiles();
    ava.appendChild(avaprofiles);
    return ava
}
function avatarholder() {
    const ah = document.createElement('div')
    ah.classList.add('ah')

    let ab = avatarblock();

    ah.appendChild(ab)

    return ah
}
function profile() {
    const prof = document.createElement('div');
    prof.classList.add('profile')
    prof.setAttribute('id', 'aboutus')
    let staff_p = staffprofile();
    let ava_tar = avatarholder();
    let text = document.createElement('h3')
    text.classList.add('aboutustext')
    text.innerHTML = 'Get to know more about the team.'
    prof.addEventListener('click', e => {
        let menu_ls = document.getElementsByClassName('menulist')[0]
        if (menu_ls.classList.contains('active')) {
            menu_ls.classList.remove('active')
        }

    })
    prof.appendChild(text)
    prof.appendChild(staff_p);
    prof.appendChild(ava_tar);

    return prof
}

export { profile }