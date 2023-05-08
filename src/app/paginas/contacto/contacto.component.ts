import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/datos.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  datosRecuperados: any;
  constructor (private datosService: DatosService) {}
  ngOnInit() {
    this.datosService.obtenerDatos().subscribe(
      respuesta => { this.datosRecuperados= respuesta },
      error => { console.log(error) },
      () => { console.log("Completado") }
    )
  }
}
