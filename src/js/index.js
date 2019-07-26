import { createElementWithClass } from 'functions/testFunc';


const URL = 'https://my-json-server.typicode.com/ha100790tag/baseBuildJS/posts';


window.addEventListener('load', function () {
    const isIndex = location.href.includes('index');
    isIndex ? createNavbarOnIndexPage() : createPostPage();
});

const createNavbarOnIndexPage = function () {
    let menu = document.getElementById('menu');
    let textRequest = getArrayFromParamRequest(URL);
    for (let i = 0; i < textRequest.length; i++) {
        let li = createElementWithClass('li', 'nav-item', 'a', 'nav-link');
        let title = textRequest[i].title;
        let a = li.children[0];
        a.textContent = title;
        a.setAttribute('href', '../html/' + title.toLowerCase() + '.html');
        menu.appendChild(li);
    }
}
const createPostPage = function () {
    
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

let ob = getArrayFromParamRequest(URL);


