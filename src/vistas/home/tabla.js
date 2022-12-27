import {html, css, LitElement} from 'lit-element';

class Tabla extends LitElement {  
    
    static get properties(){
        return {
            lista: {type: Array}
        }
    }
    
    render(){
        return html`
            <h1>Tabla de Registros</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Edad</th>
                    </tr>
                </thead>
                <tbody>
                    ${this.lista.map((element) => html`
                        <tr>
                            <td>${element.nombre}</td>
                            <td>${element.apellidos}</td>
                            <td>${element.edad}</td>
                        </tr>
                    `)}
                </tbody>
            </table>
        `;
    } 

}

window.customElements.define('wc-tabla', Tabla);