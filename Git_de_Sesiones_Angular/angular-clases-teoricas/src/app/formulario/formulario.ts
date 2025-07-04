import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.html',
  styleUrls: ['./formulario.css']
})
export class Formulario {
  nombre: string = '';
  mensaje: string = '';

  mostrarMensaje() {
    if (this.nombre.trim()) {
      this.mensaje = `Hola, ${this.nombre}. Gracias por usar el formulario.`;
    } else {
      this.mensaje = 'Por favor, escribe tu nombre.';
    }
  }
}
