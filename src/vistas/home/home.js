import {html, css, LitElement} from 'lit-element';
import './tabla.js';
import './registro.js';

class Home extends LitElement {
    constructor(){
        super();   
        this.lista = [
            {nombre:'Luis' , apellidos:'del Rio',edad: 37 },
            {nombre:'Antonio' , apellidos:'Cuevas',edad: 43 },
            {nombre:'Pablo' , apellidos:'del Rio',edad: 1 }
        ]

    }

    render(){
        return html`
            <wc-registro></wc-registro>
            <wc-tabla .lista= '${this.lista}'></wc-tabla>
        `;
    }
}

window.customElements.define('wc-home', Home);