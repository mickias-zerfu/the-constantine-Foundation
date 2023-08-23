import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoriesModalComponent } from '../categories/categories-modal/categories-modal.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css','../shop-shared.css']
})
export class OrdersComponent implements OnInit {

  categories: any[] = [
    { id: 1, name: 'Category 1', icon: 'category' },
    { id: 2, name: 'Category 2', icon: 'category'  },
    { id: 3, name: 'Category 3', icon: 'category'}
  ];

  displayedColumns: string[] = ['id', 'name', 'icon', 'numProducts', 'action'];

  constructor(private dialog: MatDialog) {}
  ngOnInit()  {
  }

  openModal(): void {
    const dialogRef = this.dialog.open(CategoriesModalComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      // Logic to handle the result of the modal
      console.log(result);
    });
  }

  editCategory(categoryId: number): void {
    // Logic to edit the category with the provided categoryId
    console.log(`Editing category with ID: ${categoryId}`);
  }
}
