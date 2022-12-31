import {html, css , LitElement} from 'lit-element'

class Registro extends LitElement {
    static get properties(){
        return {
            nombre: {type: String},
            apellidos: {type: String},
            edad: {type: Number}
        }   

    }

    constructor(){
        super();
        this.nombre = this.apellidos = this.edad = "";
    }

    manejador(nombre){
        return (event)=>{
            let valor = event.target.value;
            this[nombre] = valor;
                    }
    }

    guardar(){
       let detail = {nombre:this.nombre, apellidos:this.apellidos, edad:this.edad}
       let opciones = {
              detail: detail,
              bubbles: true,
              composed: true

       }
         this.dispatchEvent(new CustomEvent('guardarPersona', opciones));
       
   }

    
    render(){
        return html`
           <form>
                <label >Nombre <input @input='${this.manejador('nombre')}' .value='${this.nombre}' /> </label>
                <label >Apellido  <input @input='${this.manejador('apellidos')}' .value='${this.apellidos}' /> </label>
                <label >Edad <input @input='${this.manejador('edad')}' .value='${this.edad}' /> </label>
                <button @click="${this.guardar}" type="button" >Guardar</button>
            
           </form>
        `;
    }
}

window.customElements.define('wc-registro', Registro);