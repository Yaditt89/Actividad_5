import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Noticia } from 'src/app/interface/noticia.interface';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css'],
})
export class NoticeComponent implements OnInit {
  public form!: FormGroup;
  titulo_invalid: boolean = false;
  fecha_invalid: boolean = false;
  contenido_invalid: boolean = false;
  imagen_invalid: boolean = false;
  url_invalid: boolean = false;
  @Output() noticia: EventEmitter<Noticia>;

  constructor(private fb: FormBuilder) {
    this.noticia = new EventEmitter();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      titulo: ['', Validators.required],
      imagen: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
          ),
        ],
      ],
      contenido: ['', Validators.required],
      fecha: ['', Validators.required],
    });
  }
  enviarNoticia() {
    const _fecha = this.form.get('fecha')?.value;
    const noticia: Noticia = {
      contenido: this.form.get('contenido')?.value,
      fecha: _fecha ? formatDate(_fecha, 'dd/MM/yyyy', 'en-US') : _fecha,
      imagen: this.form.get('imagen')?.value,
      titulo: this.form.get('titulo')?.value,
    };
    if (this.form.valid) {
      this.noticia.emit(noticia);
      this.resetForm();
    } else {
      this.formInvalid();
    }
  }
  resetForm() {
    this.form.reset();
    this.titulo_invalid = false;
    this.fecha_invalid = false;
    this.contenido_invalid = false;
    this.imagen_invalid = false;
    this.url_invalid = false;
  }
  formInvalid() {
    if (this.form.controls['titulo'].errors) {
      this.titulo_invalid = true;
    } else {
      this.titulo_invalid = false;
    }

    if (this.form.controls['imagen'].errors?.['required']) {
      this.imagen_invalid = true;
    } else {
      this.imagen_invalid = false;
    }

    if (this.form.controls['imagen'].errors?.['pattern']) {
      this.url_invalid = true;
    } else {
      this.url_invalid = false;
    }

    if (this.form.controls['fecha'].errors) {
      this.fecha_invalid = true;
    } else {
      this.fecha_invalid = false;
    }

    if (this.form.controls['contenido'].errors) {
      this.contenido_invalid = true;
    } else {
      this.contenido_invalid = false;
    }
  }
}
