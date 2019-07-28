export function createElementWithClass(elName, className, childName, childClass) {
    let el = document.createElement(elName);
    el.classList.add(className);
    if (childName) {
        el.appendChild(createElementWithClass(childName, childClass));
    }
    return el;
}