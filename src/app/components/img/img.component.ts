import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  //Recibir un valor del padre al hijo
  @Input() img: string;
  imageDefault = 'https://cdn3.josefacchin.com/wp-content/uploads/2018/09/http-not-found-error-404.png'

  @Output() loaded = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  imgError(){
    this.img = this.imageDefault;
  }

  imgOK(){
    console.log('log hijo')
    this.loaded.emit(this.img);
  }



}
