import { Component, OnInit } from '@angular/core';
import { Alldata } from '../alldata';
import { StoredataService } from '../storedata.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
  providers: [Alldata]
})
export class DisplayComponent implements OnInit {
  showitem;
  constructor(private service: StoredataService,private data1: Alldata, private route: Router) { 
    this.showitem = data1.electronics; 
  }
  

  ngOnInit() {
    this.service.data.subscribe(res => {console.log(res)
    this.showitem = res
  })
  }

  cart = [];

  add(item){
    this.cart.push(item);
    console.log(item.product)

  }

  checkout(){
    this.service.allItem = this.cart;
    if(this.cart.length>0){
      this.route.navigate(['/checkout']);
    }
    else{
      alert('Cart is Empty')
    }
  }

}

