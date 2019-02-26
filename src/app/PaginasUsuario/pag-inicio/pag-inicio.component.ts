import { Component, OnInit } from '@angular/core';
import { SPaginicioService } from 'src/app/servicios/s-paginicio.service';

@Component({
  selector: 'app-pag-inicio',
  templateUrl: './pag-inicio.component.html',
  styleUrls: ['./pag-inicio.component.css']
})
export class PagInicioComponent implements OnInit {

  slider: any;

  constructor(private getslider: SPaginicioService) {
    this.getslider.GetSlider().subscribe(image => {
      this.slider = image;
    })
    
   }

  ngOnInit() {
  }

}
