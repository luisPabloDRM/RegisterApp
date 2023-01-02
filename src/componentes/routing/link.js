import { LitElement, css, html } from "lit-element";

class Link extends LitElement {
    
    static get properties(){
        return {
            to: {type: String, attribute:true},
            routerName: {type: String, attribute:true}
        }
    }

    _handlerCLick(){
        let detail = {
            to: this.to,
            routerName: this.routerName
        };
        this.dispatchEvent(new CustomEvent('goEvent', {detail: detail, bubbles: true , composed:true}));

    }

    render(){
        return html `
            <div @click="${this._handlerCLick}" >
                <slot></slot>
            </div>
        `
    }

}
window.customElements.define('wc-link', Link );