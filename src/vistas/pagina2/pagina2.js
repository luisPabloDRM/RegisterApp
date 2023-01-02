import {html, css, LitElement} from 'lit-element';

class Pagina2 extends LitElement { 

    render(){
        return html `
        <div>
            <h1> Hola desde Página 2</h1>
        </div>
        `

    }
}

window.customElements.define('wc-pagina2', Pagina2);