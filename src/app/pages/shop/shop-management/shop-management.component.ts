import { Component, OnInit } from '@angular/core';
import { Topcard } from '../../dashboard/dashboard.component';

@Component({
  selector: 'app-shop-management',
  templateUrl: './shop-management.component.html',
  styleUrls: ['./shop-management.component.css','../shop-shared.css']
})
export class ShopManagementComponent implements OnInit {

  topcardsConstantine: Topcard[] = [];
  constructor() { }

  ngOnInit(): void {
    this.topcardsConstantine.push(
      {
        bgcolor: '#007bff',
        icon: 'store',
        title: '10,000',
        subtitle: 'Total Products'
      },
      {
        bgcolor: '#ef5350',
        icon: 'shopping_cart',
        title: '5,000',
        subtitle: 'Total Orders'
      },
      {
        bgcolor: '#66bb6a',
        icon: 'star',
        title: '500',
        subtitle: 'Featured Products'
      },
      {
        bgcolor: '#26c6da',
        icon: 'local_offer',
        title: '20',
        subtitle: 'Promotions'
      },
      {
        bgcolor: '#26c6da',
        icon: 'attach_money',
        title: '1,000,000',
        subtitle: 'Total Sales'
      }
    );
  }

}
