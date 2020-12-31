import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { Recipe } from '../models/recipe.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [];
    private recipeSelected = new EventEmitter<Recipe>();

    constructor(private shoppingListService: ShoppingListService) {
        this.fillRecipes();
    }

    get Recipes() {
        return this.recipes.slice();
    }

    get RecipeSelected() {
        return this.recipeSelected;
    }

    getRecipeById(id: number): Recipe {
        return this.recipes[id];
    }

    private fillRecipes(): void {
        let ingredients = [
            new Ingredient('Mozarella cheesa', 1),
            new Ingredient('hot dog', 3),
        ];
        let recipe = new Recipe(0, 'Pizza', 'Delicious Pizza', 'https://www.delonghi.com/Global/recipes/multifry/pizza_fresca.jpg', ingredients);
        this.recipes.push(recipe);
        ingredients = [
            new Ingredient('Meat', 1),
            new Ingredient('Cheddar cheese', 1),
        ];
        recipe = new Recipe(1, 'Burger', 'Awesome Burger', 'https://egypt.burgerking.me/Images/Products/BURGERS.jpg', ingredients);
        this.recipes.push(recipe);
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}