import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('amountInput') amountInput!: ElementRef;
  @ViewChild('nameInput') nameInput!: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
  }

  onAdd(): void {
    const name = this.nameInput?.nativeElement.value;
    const amount = this.amountInput?.nativeElement.value;
    if(!name || !amount) { return; }
    this.shoppingListService.addIngredient(new Ingredient(name, amount));
  }

}