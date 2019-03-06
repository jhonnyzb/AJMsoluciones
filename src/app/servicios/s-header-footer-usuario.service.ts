import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


export interface HeaderFoooter{ 
  url: string, 
  titulo:string, 
  descripcion:string;
}

@Injectable({
  providedIn: 'root'
})
export class SHeaderFooterUsuarioService {

  constructor() { }
}
