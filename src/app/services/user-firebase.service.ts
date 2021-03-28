import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Entity, FirestoreCrudService } from './firestore-crud.service';

@Injectable({
  providedIn: 'root'
})
export class UserFirebaseService {


  private crudService: FirestoreCrudService<UserFirebase>;

  // AngularFirestore should be found by Angular DI System
  constructor(private afs: AngularFirestore) {
      // Let's create our CrusService and use the a Collection with the name 'todos'
      this.crudService = new FirestoreCrudService<UserFirebase>(afs, 'users');
  }

  add(data: UserFirebase, id?: string) {
      return this.crudService.add(data, id);
  }

  update(data: UserFirebase) {
      return this.crudService.update(data);
  }

  delete(data: UserFirebase) {
      return this.crudService.delete(data.id);
  }

  getAll() {
      return this.crudService.list();
  }
  getListByCondition(query: (ref: any) => any): Observable<UserFirebase[]> {
    return this.crudService.listByCondition(query);
   }
   get(id): Observable<UserFirebase> {
     return this.crudService.get(id);
   }
}


export class UserFirebase implements Entity {
  id?: string;
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  somethingCustom?: string;
  auto?: boolean;
  doubly?: number;
  followByCommand?: string;
  online?: boolean ;
}
