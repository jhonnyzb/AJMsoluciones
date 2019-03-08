import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import{ Footer,Header} from '../Interface/header-footer'





@Injectable({
  providedIn: 'root'
})
export class SHeaderFooterUsuarioService {
 
  private itemDoc: AngularFirestoreDocument<Header>;
  private FooterCollection: AngularFirestoreCollection<Footer>;
  ObsFooter: Observable<Footer[]>;
  ObsHeader: Observable<Header>;
  

  constructor(private afs: AngularFirestore) {
    
    this.FooterCollection = afs.collection<Footer>('FooterUsuario');
    this.ObsFooter= this.FooterCollection.valueChanges();

    this.itemDoc = afs.doc<Header>('HeaderUsuario/KWgrKwMdRqU7RA4DG33e');
    this.ObsHeader = this.itemDoc.valueChanges();

   }


   GetFooter(){
    return this.ObsFooter;
   }
   GetHeader(){
    return this.ObsHeader;
   }
  
}
