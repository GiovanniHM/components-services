import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy{

  //Recibir un valor del padre al hijo
  @Input() img: string;
  imageDefault = 'https://cdn3.josefacchin.com/wp-content/uploads/2018/09/http-not-found-error-404.png'

  @Output() loaded = new EventEmitter<string>();

  constructor() {
    //Befor render
    // NO async -- one time
    console.log('constructor', 'imgValue =>', this.img);
  }


  ngOnChanges(): void {
    // before render
    // changes inputs - times
    console.log('ngOnChanges', 'imgValue =>', this.img);
  }

  ngOnInit(): void {
    // before render
    // async - fetch -- once time
    console.log('ngOnInit', 'imgValue =>', this.img);
  }

  ngAfterViewInit(): void {
    // after render
    // handler children
    console.log('ngAfterViewInit');

  }

  ngOnDestroy(): void {
    //delete componet
    console.log('ngOnDestroy');
  }

  imgError(){
    this.img = this.imageDefault;
  }

  imgOK(){
    console.log('log hijo')
    this.loaded.emit(this.img);
  }



}
