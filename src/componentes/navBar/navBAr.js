import {html, css, LitElement} from 'lit-element';

class NavBar extends LitElement {
   
    static get styles(){
        return css`
            .contenedor-navbar{
                display: flex;
                justify-content: center;
                margin: auto;
                background-color: #83b983;
                padding: 1pc;
            }`;
    }

    render(){
        return html `
            <div class="contenedor-navbar">
                <wc-link to ="/home">
                     <wc-boton texto="Home" ></wc-boton>
                </wc-link>

                <wc-link to ="/pagina_2" >
                     <wc-boton texto="Página 2" ></wc-boton>
                </wc-link>

                <wc-link to ="/pagina_3" >
                     <wc-boton texto="Página 3" ></wc-boton>
                </wc-link>
                    

                    

                </div>
        `
    }
}
window.customElements.define('wc-navbar', NavBar);