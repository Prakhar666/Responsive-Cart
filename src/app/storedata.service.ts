import { Injectable } from '@angular/core';
import { Subject } from '../../node_modules/rxjs';
import { Alldata } from './alldata';

@Injectable({
  providedIn: 'root'
})
export class StoredataService {
  allItem;
  public data = new Subject<any>()
  constructor(private alldata: Alldata) { }
   getdata(result){
     this.data.next(result);
   
   }
  }