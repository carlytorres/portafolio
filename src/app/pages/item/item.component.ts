import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetalleProducto } from 'src/app/interfaces/detalle-producto-interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto : any
  id:string='' 

  constructor(
    private route: ActivatedRoute,
    public _detalleProductoService: ProductosService
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(parametros => {

      this._detalleProductoService.getProducto(parametros['id'])
        .subscribe((producto: any) => {
          this.producto = producto
          this.id=parametros['id']
        });
    });
  }

}
