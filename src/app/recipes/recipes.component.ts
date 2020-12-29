import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  descriptionRecipe!: Recipe;
  
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.RecipeSelected
      .subscribe((selectedRecipe: Recipe) => {
        this.descriptionRecipe = selectedRecipe
      });
  }

  onRecipeClicked(recipe: Recipe) {
    this.descriptionRecipe = recipe;
  }

}
