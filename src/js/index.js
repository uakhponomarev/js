import { createElementWithClass, activeHref } from 'functions/testFunc';


const URL = 'https://my-json-server.typicode.com/ha100790tag/baseBuildJS/posts';
var menuID = '#menu', textRequest;

window.addEventListener('load', function () {
    const isIndex = location.href.includes('index');
    isIndex ? createNavbarOnIndexPage() : createPostPage();
});

const createNavbarOnIndexPage = function () {
    let menu = document.getElementById('menu');
    textRequest = textRequest || getArrayFromParamRequest(URL);
    for (let i = 0; i < textRequest.length; i++) {
        let li = createElementWithClass('li', 'nav-item', 'a', 'nav-link');
        let title = textRequest[i].title;
        li.children[0].textContent = title;
        menu.appendChild(li);
    }
    activeHref();
}
const createPostPage = function () {
    textRequest = textRequest || getArrayFromParamRequest(URL);
    document.body.appendChild(createElementWithClass('div', 'card', 'div', 'card-body'));
    for (let i = 0; i < textRequest.length; i++) {
        document.getElementsByClassName('card-body')[0].innerHTML = textRequest[i].text;
    }
}

function getArrayFromParamRequest(targetUrl) {
    let res, xhr = new XMLHttpRequest();

    xhr.open('GET', targetUrl, false);
    xhr.ondone
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            res = JSON.parse(xhr.responseText);
        };
    };
    xhr.send();

    return res;
}

