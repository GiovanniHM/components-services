import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  //Recibir un valor del padre al hijo
  @Input() img: string;

  constructor() { }

  ngOnInit(): void {
  }


}
