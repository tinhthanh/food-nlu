import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Entity, FirestoreCrudService } from './firestore-crud.service';
@Injectable({
  providedIn: 'root'
})
export class WefinexTotalAmountService {
  private crudService: FirestoreCrudService<Profit>;
  // AngularFirestore should be found by Angular DI System
  constructor(private afs: AngularFirestore) {
      // Let's create our CrusService and use the a Collection with the name 'todos'
        this.crudService = new FirestoreCrudService<Profit>(afs, 'wefinex_total_amount');
  }
  add(data: Profit, id?: string) {
      return this.crudService.add(data, id);
  }
  update(data: Profit) {
      return this.crudService.update(data);
  }
  delete(data: Profit) {
      return this.crudService.delete(data.id);
  }
  getAll() {
      return this.crudService.list();
  }
  getListByCondition(query: (ref: any) => any): Observable<Profit[]> {
    return this.crudService.listByCondition(query);
   }
   get(id): Observable<Profit> {
    return this.crudService.get(id);
  }
}


export class Profit implements Entity {
  budget: string;
  profit: string;
  lastUpdate: Date;
  id?: string;
  totalAmount: string;
}
