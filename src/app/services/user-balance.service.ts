import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Entity, FirestoreCrudService } from './firestore-crud.service';

@Injectable({
  providedIn: 'root'
})
export class UserBalanceService  {


  private crudService: FirestoreCrudService<UserBalance>;

  // AngularFirestore should be found by Angular DI System
  constructor(private afs: AngularFirestore) {
      // Let's create our CrusService and use the a Collection with the name 'todos'
      this.crudService = new FirestoreCrudService<UserBalance>(afs, 'user_balance');
  }

  add(data: UserBalance, id?: string) {
      return this.crudService.add(data, id);
  }

  update(data: UserBalance) {
      return this.crudService.update(data);
  }

  delete(data: UserBalance) {
      return this.crudService.delete(data.id);
  }

  getAll() {
      return this.crudService.list();
  }
  getListByCondition(query: (ref: any) => any): Observable<UserBalance[]> {
    return this.crudService.listByCondition(query);
   }
   get(id): Observable<UserBalance> {
     return this.crudService.get(id);
   }
}


export class UserBalance implements Entity {
  id?: string;
  balance: string;
}
