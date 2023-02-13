import { Component } from '@angular/core';
import { Noticia } from '../../interface/noticia.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  arrNoticias: Noticia[] = [
    {
      titulo: 'Título',
      contenido:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit non sapien ut vestibulum. Fusce risus urna, porttitor viverra purus id, ultricies laoreet elit. Mauris luctus lorem at dapibus laoreet. Aenean vel velit nibh. Curabitur ut dictum est. Suspendisse a ipsum id lorem aliquet pretium quis sit amet ante. Nunc ut tortor nisl. Sed condimentum placerat quam, non varius odio.',
      fecha: '25/02/2023',
      imagen:
        '../../../assets/images/deliciosa-saludable-comida-asiatica-sobre-fondo-negro-textura-espacio-copia.png',
    },
    {
      titulo: 'Título',
      contenido:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit non sapien ut vestibulum. Fusce risus urna, porttitor viverra purus id, ultricies laoreet elit. Mauris luctus lorem at dapibus laoreet. Aenean vel velit nibh. Curabitur ut dictum est. Suspendisse a ipsum id lorem aliquet pretium quis sit amet ante. Nunc ut tortor nisl. Sed condimentum placerat quam, non varius odio.',
      fecha: '25/02/2023',
      imagen: '../../../assets/images/plato-chino-camarones-plancha.png',
    },
  ];

  recibeNoticia(noticia: Noticia) {
    return this.arrNoticias.push(noticia);
  }
}
