import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ImageSlide } from '../Interface/image-slide';


@Injectable({
  providedIn: 'root'
})

export class SPaginicioService {

  private ImageneslideCollection: AngularFirestoreCollection<ImageSlide>;
 
  imagenes: Observable<ImageSlide[]>;

  constructor(private afs: AngularFirestore) { 

    this.ImageneslideCollection = afs.collection<ImageSlide>('Slider');
    this.imagenes= this.ImageneslideCollection.valueChanges();
  
  }


  GetSlider(){
    
    return this.imagenes;
  }
}
