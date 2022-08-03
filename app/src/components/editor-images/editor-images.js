export default class EditorImages {
    constructor(element, virtualElement) {
        this.element = element;
        this.virtualElement = virtualElement;

        this.element.addEventListener('click', ()=> this.onClick());
    }
}