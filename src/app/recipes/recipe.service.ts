import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe("A test recipe", "Test description...",
      "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg",
      [
        new Ingredient('Meat',1),
        new Ingredient('French fries',20)
      ]),
    new Recipe("Another test recipe", "Test descriptiossssssssssn...",
      "https://images.food52.com/S_S9Xq9IsgoLENFJkfKvkvwSChg=/1200x1200/a4ad34a1-b43b-42d6-8a73-b3d5f19d11f3--2020-0218_asparagus-lemon-pepper-marinade-genius_3x2_ty-mecham.jpg",
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ]),
    new Recipe("Yet another test recipe", "Test descrip13eetion...",
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/garlic-spaghetti-horizontal-1539203011.jpg?crop=0.670xw:1.00xh;0.167xw,0&resize=640:*",
      [
        new Ingredient('Apples', 1)
      ]),
  ];
  
  constructor(private slService: ShoppingListService) { }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(id: number){
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}
