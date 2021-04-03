import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Entity, FirestoreCrudService } from './firestore-crud.service';

@Injectable({
  providedIn: 'root'
})
export class FollowBetManuallyService {

  private crudService: FirestoreCrudService<WefinetComand>;

  // AngularFirestore should be found by Angular DI System
  constructor(private afs: AngularFirestore) {
      // Let's create our CrusService and use the a Collection with the name 'todos'
      this.crudService = new FirestoreCrudService<WefinetComand>(afs, 'follow_bet_manually');
  }

  add(data: WefinetComand, id?: string) {
      return this.crudService.add(data, id);
  }

  update(data: WefinetComand) {
      return this.crudService.update(data);
  }

  delete(data: WefinetComand) {
      return this.crudService.delete(data.id);
  }

  getAll() {
      return this.crudService.list();
  }
  getListByCondition(query: (ref: any) => any): Observable<WefinetComand[]> {
    return this.crudService.listByCondition(query); 
   }
   get(id): Observable<WefinetComand> {
     return this.crudService.get(id);
   }
   addComandByUser(uid, price, type) {
    const d = new Date();
    const hours = String(d.getHours()).padStart(2, '0') ;
    const minute = String(d.getMinutes()).padStart(2, '0')   ;
    
    const day =  String(d.getDate()).padStart(2, '0') ;
    const month =   String(d.getMonth() + 1).padStart(2, '0') ;
    const year = d.getFullYear();

    const currentTime =  `${day}:${month}:${year} ${hours}:${minute}` ;
 
    this.add({id : uid, price: price, time: currentTime, type: type}, uid);
   }
}


 export class WefinetComand implements Entity {
  price: string;
  id?: string;
  time: string;
  type: string;
}