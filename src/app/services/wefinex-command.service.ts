import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Entity, FirestoreCrudService } from './firestore-crud.service';

@Injectable({
  providedIn: 'root'
})
export class WefinexCommandService {

  private crudService: FirestoreCrudService<WefinetComand>;

  // AngularFirestore should be found by Angular DI System
  constructor(private afs: AngularFirestore) {
      // Let's create our CrusService and use the a Collection with the name 'todos'
      this.crudService = new FirestoreCrudService<WefinetComand>(afs, 'follow_bet');
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
}


 export class WefinetComand implements Entity {
  price: string;
  id?: string;
  time: string;
  type: string;
}