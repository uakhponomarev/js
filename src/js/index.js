import { createElementWithClass, activeHref } from 'functions/testFunc';


const URL = 'https://my-json-server.typicode.com/ha100790tag/baseBuildJS/posts';
const MENU = '#menu', LINK = 'nav-link', LI = 'nav-item';

window.addEventListener('load', function () {
    const isIndex = location.href.includes('index');
    isIndex ? createNavbarOnIndexPage() : createPostPage();
});

const createNavbarOnIndexPage = function () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let respText = JSON.parse(this.responseText);
            for (let i = 0; i < respText.length; i++) {
                $(MENU).append(createElementWithClass('li', LI, 'a', LINK));
                let selectLink = MENU + ' .' + LI + ':nth-child(' + (i + 1) + ')' + '>a';
                $(selectLink).text(respText[i].title);
            }
        }
    };
    xhttp.open("GET", URL, true);
    xhttp.send();
    activeHref();
}

const createPostPage = function () {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function (e) {
        if (this.readyState == 4 && this.status == 200) {
            let respText = JSON.parse(this.responseText);
            $('body').append(createElementWithClass('div', 'card', 'div', 'card-body'));
            respText.forEach((el, i) => {
                if (el.id == location.href[36]) {
                    $('.card-body').text(el.text);
                }
            });
        }
    };
    xhttp.open("GET", URL, true);
    xhttp.send();

}




