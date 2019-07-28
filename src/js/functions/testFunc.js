export function createElementWithClass(elName, className, childName, childClass) {

    if (childName) {
        return createElementWithClass(elName, className).append(createElementWithClass(childName, childClass));
    }
    function getTagString(tagNAme) {
        return '<' + tagNAme + '></' + tagNAme + '>';
    }
    return $(getTagString(elName)).addClass(className);
}
export function activeHref() {
    $('#menu').click(function (event) {
        location.href = "../html/" + event.target.textContent + ".html";
    });
};