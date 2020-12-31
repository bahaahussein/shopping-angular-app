import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }
}
