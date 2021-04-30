import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import { createFooter, createHeader, createMain } from './common';
import './it-spa.scss';
import { navigation } from './navigation/navigation';
//import { registration } from './registration/registration';
import { cart } from './views/cart/create-cart';

const body = $(document.body);

const itSpaNavigation = navigation();
const itSpaHeader = createHeader();
const itSpaMain = createMain();
const itSpaFooter = createFooter();
//const itSpaCart = cart();
//const reg = registration();

body.append(itSpaNavigation);
body.append(itSpaHeader);
body.append(itSpaMain);
body.append(itSpaFooter);
//body.append(itSpaCart);
//body.append(reg);