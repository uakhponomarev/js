export function createElementWithClass(parentSelector, elName, className, childName, childClass) {
    $(parentSelector).add(elName).addClass(className);
    if (childName) {
        createElementWithClass(parentSelector + ' ' + elName, childName, childClass));
    }
    
}
