import { LitElement , html } from "lit-element";

class Router extends LitElement {
    static get properties() {
        return {
            Name: { type: String, attribute: true }
        }
    }
    constructor(){
        super();
        this._listenerGoEvent = this._listenerGoEvent.bind(this)
       
    }
    connectedCallback(){
        super.connectedCallback();
        this.viewPortList = this.querySelectorAll('wc-viewport');
        this.addEventListener('goEvent', this._listenerGoEvent);
    }
    _listenerGoEvent(event){
        let{to, routerName} = event.detail;
        if(routerName === undefined || routerName === this.name){
            this.viewPortList.forEach((viewPort)=>{
                viewPort.renderView(to);
            })
            event.stopPropagation(); 
        }
        
    }
    render(){
        return html `
            <slot></slot>
        `
    }

}

window.customElements.define('wc-router', Router);