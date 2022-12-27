import {html, css , LitElement} from 'lit-element'

class Registro extends LitElement {
    render(){
        return html`
           <form>
                <label >Nombre <input/> </label>
                <label >Apellido  <input/> </label>
                <label >Edad <input/> </label>
            
           </form>
        `;
    }
}

window.customElements.define('wc-registro', Registro);