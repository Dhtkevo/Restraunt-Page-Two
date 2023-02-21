import { initialLoad } from "./initial-load";
import { menu } from "./menu";
import { contact } from "./contact";

const div = document.querySelector('#content');
const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const contactBtn = document.querySelector('#contact');

let children = div.childNodes;



homeBtn.addEventListener('click', function () {
    div.innerHTML = "";
    initialLoad();
})

menuBtn.addEventListener('click', function () {
    div.innerHTML = "";
    menu();
})

contactBtn.addEventListener('click', function () {
    div.innerHTML = "";
    contact();
})

