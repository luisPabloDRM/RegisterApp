import {html, css, LitElement} from 'lit-element';

class Pagina3 extends LitElement { 

    render(){
        return html `
        <div>
            <h1> Hola desde Página 3</h1>
        </div>
        `

    }
}

window.customElements.define('wc-pagina3', Pagina3);