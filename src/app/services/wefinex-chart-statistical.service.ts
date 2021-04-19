import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Entity, FirestoreCrudService } from './firestore-crud.service';

@Injectable({
  providedIn: 'root'
})
export class WefinexChartStatisticalService {


  private crudService: FirestoreCrudService<StatisticalModel>;

  // AngularFirestore should be found by Angular DI System
  constructor(private afs: AngularFirestore) {
      // Let's create our CrusService and use the a Collection with the name 'todos'
      this.crudService = new FirestoreCrudService<StatisticalModel>(afs, 'wefinex_chart_statistical');
  }

  add(data: StatisticalModel, id?: string) {
      return this.crudService.add(data, id);
  }

  update(data: StatisticalModel) {
      return this.crudService.update(data);
  }

  delete(data: StatisticalModel) {
      return this.crudService.delete(data.id);
  }

  getAll() {
      return this.crudService.list();
  }
  getListByCondition(query: (ref: any) => any): Observable<StatisticalModel[]> {
    return this.crudService.listByCondition(query);
   }
   get(id): Observable<StatisticalModel> {
     return this.crudService.get(id);
   }
}


export class StatisticalModel implements Entity {
  id?: string;
  data: string;
}