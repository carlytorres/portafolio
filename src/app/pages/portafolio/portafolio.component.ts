import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto-interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  productos : Producto[] = []

  constructor(
    public _productosService:ProductosService
  ) { }

  ngOnInit(): void {
    this.productos = this._productosService.productos
  }

}
