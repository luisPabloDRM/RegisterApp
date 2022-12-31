import {html, css, LitElement} from 'lit-element';

class NavBar extends LitElement {
    static get properties(){
        return {
            titulo: {type: String},
            enlaces: {type: Array}
        }
    }
    static get styles(){
        return css`
            .contenedor-navbar{
                display: flex;
                justify-content: center;
                margin: auto;
                background-color: blanchedalmond;
                padding: 1px;
            }
        `
    }
    render(){
        return html `
            <div class="contenedor-navbar">
                <wc-boton texto="Página 1" ></wc-boton>
                <wc-boton texto="Página 2" ></wc-boton>
                <wc-boton texto="Página 3" ></wc-boton>
            </div>
        `
    }
}
window.customElements.define('wc-navbar', NavBar);