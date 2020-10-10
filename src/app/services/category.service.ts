import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  category: Category[] =[{id: 'C01' ,name:'Danh mục #001' ,  title: 'Nước ép' , url : 'assets/smoothie/smoothie_2.png' , color: 'warning', customClass: '' },
  {id: 'C02' ,name:'Danh mục #002' ,  title: 'Sinh tố' , url : 'assets/smoothie/smoothie.png', color: 'primary', customClass: 'leve1'  },
  {id: 'C03',name:'Danh mục #003' ,  title: 'Trái cây dầm' , url : 'assets/smoothie/fruit.png' ,color: 'success', customClass: ''  }
  ];
  constructor() { }
  getCategories() {
    return this.category;
  }
  findOne(id: string): Category {
    return(this.category.filter( e => e.id  == id )[0] || null);
  }
}


export class Category {
  id: string;
  name: string;
  title:string;
  url: string ; 
  customClass: string ;
  color: string ;
 constructor(id: string,name: string , title: string, url: string, customClass:string ,color: string) {
   this.id = id; 
   this.name = name;
   this.title = title ;
   this.url = url ;
   this.customClass = customClass;
   this.color = color;
 }
}