import { createElementWithClass } from 'functions/testFunc';


const URL = 'https://my-json-server.typicode.com/ha100790tag/baseBuildJS/posts';
var MENU = '#menu';


window.addEventListener('load', function () {
    const isIndex = location.href.includes('index');
    isIndex ? createNavbarOnIndexPage() : createPostPage();
});

const createNavbarOnIndexPage = function () {
    createElementWithClass(MENU, 'nav-item', 'a', 'nav-link');
    // let textRequest = getArrayFromParamRequest(URL);
    // for (let i = 0; i < textRequest.length; i++) {
    //     

    // a.setAttribute('href', '../html/' + title.toLowerCase() + '.html');
    // a.onclick = function () { return false };

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




