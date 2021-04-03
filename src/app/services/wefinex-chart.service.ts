import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Entity, FirestoreCrudService } from './firestore-crud.service';
@Injectable({
  providedIn: 'root'
})
export class WefinexChartService {
  private crudService: FirestoreCrudService<WefinexChart>;
  // AngularFirestore should be found by Angular DI System
  constructor(private afs: AngularFirestore) {
      // Let's create our CrusService and use the a Collection with the name 'todos'
        this.crudService = new FirestoreCrudService<WefinexChart>(afs, 'wefinex_chart');
  }
  add(data: WefinexChart, id?: string) {
      return this.crudService.add(data, id);
  }
  update(data: WefinexChart) {
      return this.crudService.update(data);
  }
  delete(data: WefinexChart) {
      return this.crudService.delete(data.id);
  }
  getAll() {
      return this.crudService.list();
  }
  getListByCondition(query: (ref: any) => any): Observable<WefinexChart[]> {
    return this.crudService.listByCondition(query);
   }
   get(id): Observable<WefinexChart> {
    return this.crudService.get(id);
  }
}



export class WefinexChart implements Entity {
  id?: string;
  openPrice: number;
  highPrice: number;
  lowPrice: number;
  closePrice: number; 
  settledDateTime: number;
  status: string;
}