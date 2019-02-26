import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface ImagenSlide{ url: string, 
  titulo:string, 
  descripcion:string;
}

@Injectable({
  providedIn: 'root'
})
export class SPaginicioService {

  private ImageneslideCollection: AngularFirestoreCollection<ImagenSlide>;
  imagenes: Observable<ImagenSlide[]>;

  constructor(private afs: AngularFirestore) { 

    this.ImageneslideCollection = afs.collection<ImagenSlide>('Slider');
    this.imagenes= this.ImageneslideCollection.valueChanges();
  }


  GetSlider(){
    return this.imagenes;
  }
}
