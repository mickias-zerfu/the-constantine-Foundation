import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoriesModalComponent } from '../categories/categories-modal/categories-modal.component';

@Component({
  selector: 'app-product-mgmt',
  templateUrl: './product-mgmt.component.html',
  styleUrls: ['./product-mgmt.component.css','../shop-shared.css']
})
export class ProductMgmtComponent {
  categories: any[] = [
    { id: 1, name: 'Category 1', icon: 'category', numProducts: 5 },
    { id: 2, name: 'Category 2', icon: 'category', numProducts: 10 },
    { id: 3, name: 'Category 3', icon: 'category', numProducts: 3 }
  ];

  displayedColumns: string[] = ['id', 'name', 'icon', 'numProducts', 'action'];

  constructor(private dialog: MatDialog) { }

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
