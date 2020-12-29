import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

@Injectable({providedIn: 'root'})
export class ShoppingListService {
    private ingredients: Ingredient[] = [];
    private onAddIngredient = new EventEmitter<void>();

    get Ingredients() {
        return this.ingredients.slice();
    }

    get OnAddIngredient() {
        return this.onAddIngredient;
    }

    constructor() {
        this.fillIngredients();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.onAddIngredient.emit();
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.onAddIngredient.emit();
    }

    private fillIngredients(): void {
        let ingredient = new Ingredient('Chicken', 5);
        this.ingredients.push(ingredient);
        ingredient = new Ingredient('Potatos', 3);
        this.ingredients.push(ingredient);
    }

}