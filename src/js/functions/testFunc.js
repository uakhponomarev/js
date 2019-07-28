export function createElementWithClass(elName, className, childName, childClass) {
    let el = document.createElement(elName);
    el.classList.add(className);
    if (childName) {
        el.appendChild(createElementWithClass(childName, childClass));
    }
    return el;
}
export function activeHref() {
    document.getElementById('menu').addEventListener('click', function (e) {
        document.location.href = "../html/" + e.target.textContent + ".html";
    });
};