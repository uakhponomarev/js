import { createElementWithClass, activeHref } from 'functions/testFunc';


const URL = 'https://my-json-server.typicode.com/ha100790tag/baseBuildJS/posts';
const MENU = '#menu', LINK = 'nav-link', LI = 'nav-item';

window.addEventListener('load', function () {
    const isIndex = location.href.includes('index');
    isIndex ? createNavbarOnIndexPage() : createPostPage();
});

const createNavbarOnIndexPage = function () {

    $.ajax({
        url: URL,
        cache: false,
        success: function (respText) {
            $('body').append(createElementWithClass('div', 'card', 'div', 'card-body'));
            respText.forEach((el, i) => {
                let li = createElementWithClass('li', LI, 'a', LINK);
                li.children().text(respText[i].title);
                $(MENU).append(li);
            });
        }
    });
    activeHref();
};


const createPostPage = function () {
    $.ajax({
        url: URL,
        cache: false,
        success: function (respText) {
            $('body').append(createElementWithClass('div', 'card', 'div', 'card-body'));
            respText.forEach((el, i) => {
                if (el.id == location.href[36]) {
                    $('.card-body').text(el.text);
                }
            });
        }
    });
};






