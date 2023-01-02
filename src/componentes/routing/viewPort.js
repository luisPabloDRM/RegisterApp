import {hmtl, css, LitElement} from 'lit-element';

class ViewPort extends LitElement {
    constructor(){
        super();
        this.viewNow = "/home"
    }
    connectedCallback(){
        this.viewList = this.querySelectorAll('wc-route');
        this.renderView(this.viewNow);
    }
    renderView(path){
        this.innerHTML = '';
        this.shadowRoot.innerHTML = '';

        let view = Array.from(this.viewList).find(()=>{
            return node.getAttribute('path') === path
        });

        !!view && this.shadowRoot.appendChild(view);
        this.viewNow = path;
        

    }

}
window.customElements.define('wc-view-port', ViewPort);