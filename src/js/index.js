import { createElementWithClass } from 'functions/testFunc';



const URL = 'https://my-json-server.typicode.com/ha100790tag/baseBuildJS/posts';
var MENU;


window.addEventListener('load', function () {
    const isIndex = location.href.includes('index');
    isIndex ? createNavbarOnIndexPage() : createPostPage();
});

const createNavbarOnIndexPage = function () {
    MENU = MENU || document.getElementById('menu');
    let textRequest = getArrayFromParamRequest(URL);
    for (let i = 0; i < textRequest.length; i++) {
        let li = createElementWithClass('li', 'nav-item', 'a', 'nav-link');
        let title = textRequest[i].title;
        let a = li.children[0];
        a.textContent = title;
        // a.setAttribute('href', '../html/' + title.toLowerCase() + '.html');
        // a.onclick = function () { return false };
        MENU.appendChild(li);
    }
}
const createPostPage = function () {
    MENU = MENU || document.getElementById('menu');
    MENU.addEventListener('click', function (e) {
        document.location.href = "../html/" + e.target.textContent + ".html";
    });
}

function getArrayFromParamRequest(targetUrl) {
    let res, xhr = new XMLHttpRequest();
    xhr.open('GET', targetUrl, false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            res = JSON.parse(xhr.response);
        };
    };
    xhr.send();
    return res;
}

