import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto-interface';
import { DetalleProducto } from '../interfaces/detalle-producto-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];


  constructor(
    private http: HttpClient
  ) {
    this.cargarProductos();
  }

  private cargarProductos() {

    return new Promise((resolve, reject) => {
      this.http.get('https://angular-html-e19b8-default-rtdb.firebaseio.com/productos_idx.json')
        .subscribe((res: any) => {
          this.productos = res;
          this.cargando = false;
          resolve(res)
        });
    });

  }

  getProducto(id: string) {
    return this.http.get(`https://angular-html-e19b8-default-rtdb.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(termino: string) {
    if (this.productos.length === 0) {
      this.cargarProductos().then(() => {
        this.filtrarProductos(termino);
      });
    } else {
      this.filtrarProductos(termino);
    }
  }

  filtrarProductos(termino: string) {
    termino = termino.toLowerCase()
    this.productosFiltrado = this.productos.filter(producto => {
      const tituloLower = producto.titulo.toLowerCase()
      const categoriaLower = producto.categoria.toLowerCase()

      return categoriaLower.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0;
    });
  }
}
