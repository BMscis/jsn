import _ from 'lodash';
import {home} from'./home/homepage'
import {content} from'./content/content'
import {profile} from'./profile/profile'
import './index.css'

document.body.classList.add('body');

document.body.appendChild(home());
document.body.appendChild(content());
document.body.appendChild(profile());