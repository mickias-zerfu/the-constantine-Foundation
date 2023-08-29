import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryModel } from 'src/app/models/shop/category.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  productForm: FormGroup;
  isEditMode: boolean = false;
  categories: CategoryModel[] = [
    { id: 1, name: 'Category 1', icon: '' },
    { id: 2, name: 'Category 2', icon: '' },
    { id: 3, name: 'Category 3', icon: '' }
  ];
  imageDisplay: any;
  isSubmitted:boolean = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      manufacturer: ['', Validators.required],
      category: ['', Validators.required],
      inStock: ['', Validators.required],
      image: [null, Validators.required],
      isFeatured: [false]
    });
  }
  // onFileChange(event: any) {
  //   const file = event.target.files[0];
  //   if (file) {
  //     this.productForm.patchValue({ image: file });
  //     // this.productForm.get('image').updateValueAndValidity();
  //     const fileReader = new FileReader();
  //     fileReader.onload = () => {
  //       this.imageDisplay = fileReader.result;
  //     };
  //     fileReader.readAsDataURL(file);
  //   }
  // }
  // onFileChange(event: any) {
  //   const file = event.target.files[0];
  //   if (file) {
  //     this.productForm.patchValue({ image: file });
  //     // const imageControl = this.productForm.get('image');
  //     // if (imageControl) {
  //     //   imageControl.updateValueAndValidity();
  //     // }
  //       const fileReader = new FileReader();
  //         fileReader.onload = () => {
  //           this.imageDisplay = fileReader.result;
  //         };
  //         fileReader.readAsDataURL(file);
  //       }
  // }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        if (fileReader.result) {
          this.imageDisplay = fileReader.result;
        }
      };
      fileReader.readAsDataURL(file);

      // Clear the value of the file input
      event.target.value = '';

      this.productForm.patchValue({ image: file });
      const imageControl = this.productForm.get('image');
      if (imageControl) {
        imageControl.updateValueAndValidity();
      }
    }
  }
  // Handle form submission
  onSubmit() {
    this.isSubmitted = true;
    if (this.productForm.invalid) {
      return;
    }
    // Form is valid, handle form submission logic here
    const formData = new FormData();
    formData.append('productName', this.productForm.value.productName);
    formData.append('description', this.productForm.value.description);
    formData.append('price', this.productForm.value.price);
    formData.append('manufacturer', this.productForm.value.manufacturer);
    formData.append('category', this.productForm.value.category);
    formData.append('inStock', this.productForm.value.inStock);
    formData.append('image', this.productForm.value.image);

    // Send the formData to the server or perform other actions
    console.log(formData);
  }
}
