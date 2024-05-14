import { Component } from '@angular/core';
import { CategoriesService } from '../../../Services/categories.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterLink, FormsModule],
  providers: [CategoriesService],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css',
})
export class UpdateComponent {
  ID = 0;
  Myproduct: any;
  constructor(
    private categoriesService: CategoriesService,
    private myActived: ActivatedRoute
  ) {
    this.ID = myActived.snapshot.params['id'];
    console.log('myid is', this.ID);
    this.categoriesService.getCategories('Electronics').subscribe({
      next: (response: any) => {
        // console.log("my res",response)
        this.Myproduct = response[0].products.filter(
          (product: any) => product.id == this.ID
        )[0];
        console.log('my product', this.Myproduct);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  updateProduct() {
    this.categoriesService.updateProductInCategory(
      'Electronics',
      this.ID,
      this.Myproduct
    );
    console.log('Updated Successfully!');
  }
  // updateProduct() {
  //   // Assuming updatedProductData contains the updated product information
  //   console.log("im in update in ts")
  //   const updatedProductData = this.Myproduct;
  //   this.categoriesService.updateProductInCategory('Electronics', this.ID, updatedProductData);
  // }

  // update(){
  //   this.categoriesService.updatedata(this.Myproduct,"Electronics").subscribe({
  //     next: (response: any) => {
  //       console.log("my update")
  //     },
  //     error: (error) => {
  //       console.log(error);
  //     },
  //   });

  // }
}