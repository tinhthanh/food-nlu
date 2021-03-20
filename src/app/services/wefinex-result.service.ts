import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Entity, FirestoreCrudService } from './firestore-crud.service';

@Injectable({
  providedIn: 'root'
})
export class WefinexResultService {


  private crudService: FirestoreCrudService<WefinexResult>;

  // AngularFirestore should be found by Angular DI System
  constructor(private afs: AngularFirestore) {
      // Let's create our CrusService and use the a Collection with the name 'todos'
      this.crudService = new FirestoreCrudService<WefinexResult>(afs, 'wefinex');
  }

  add(data: WefinexResult, id?: string) {
      return this.crudService.add(data, id);
  }

  update(data: WefinexResult) {
      return this.crudService.update(data);
  }

  delete(data: WefinexResult) {
      return this.crudService.delete(data.id);
  }

  getAll() {
      return this.crudService.list();
  }
  getListByCondition(query: (ref: any) => any): Observable<WefinexResult[]> {
    return this.crudService.listByCondition(query); 
   }
}


 export class WefinexResult implements Entity {
  action: string; 
  price: string;
  lastUpdate: Date;
  id?: string;
  time: string;
  type: string;
}