import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProduct, Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //example data
  private products:Array<Product> = [
    {id:1,name:'Garlic pickle 1',code:'mp500',category:{name:'mango',code:'1',category:1},unit:{name:'PCS',code:'1',category:1},salesRate:4,purchaseRate:3},
    {id:2,name:'Garlic pickle 2',code:'mp501',category:{name:'Pineapple',code:'1',category:1},unit:{name:'PCS',code:'1',category:1},salesRate:14,purchaseRate:3},
    {id:3,name:'Garlic pickle 3',code:'mp502',category:{name:'Banana',code:'1',category:1},unit:{name:'PCS',code:'1',category:1},salesRate:5,purchaseRate:3},
    {id:4,name:'Garlic pickle 4',code:'mp503',category:{name:'Apple',code:'1',category:1},unit:{name:'PCS',code:'1',category:1},salesRate:6,purchaseRate:3},
    {id:5,name:'Garlic pickle 5',code:'mp504',category:{name:'Avocado',code:'1',category:1},unit:{name:'PCS',code:'1',category:1},salesRate:9,purchaseRate:3},
    {id:6,name:'Garlic pickle 6',code:'mp505',category:{name:'Papaya',code:'1',category:1},unit:{name:'PCS',code:'1',category:1},salesRate:5,purchaseRate:2},
    {id:7,name:'Garlic pickle 7',code:'mp506',category:{name:'Timber',code:'1',category:1},unit:{name:'PCS',code:'1',category:1},salesRate:6,purchaseRate:1},
  ]

  constructor() { }

  getAllProducts():Observable<IProduct[]>{
    return of(this.products);
  }

  getProductById(id:number):Observable<IProduct>{
     var product = this.products.find(item => item.id === id);
     return of(product);
  }

  addNewProduct(product:IProduct):void{
    this.products.sort(item => item.id);
    product.id = this.products.length + 1;
    console.log(this.products);
    this.products.push(product);
  }

  updateProduct(product:IProduct):void{
    const index = this.products.findIndex(item => item.id === product.id);
    this.products[index]=product;
  }

  deleteProduct(product:IProduct):IProduct[]{
    const index = this.products.findIndex(item => item.id === product.id);
    const deletedItem = this.products.splice(index,1);
    return deletedItem;
  }


}
