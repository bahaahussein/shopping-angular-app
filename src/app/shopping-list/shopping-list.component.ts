import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.Ingredients;
    this.shoppingListService.OnAddIngredient
      .subscribe(() => {
        console.log("onAddIngredient subscribe!");
        this.ingredients = this.shoppingListService.Ingredients
      });
  }
}
