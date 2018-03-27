import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe Box';

  recipes: Recipe[] = [
    new Recipe('Apple pie', 'Apples, Flour, Sugar, Milk, Eggs', 'Instructions...'),
    new Recipe('Pumpkin pie', 'Pumpkin, Flour, Sugar, Milk, Eggs', 'Instructions...'),
    new Recipe('Cheese pizza', 'Cheese, Flour, Tomato sauce, Milk, Eggs', 'Instructions...')
  ];

  selectedRecipe = null;

  editRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }

  hideRecipe() {
    this.selectedRecipe = null;
  }

}
