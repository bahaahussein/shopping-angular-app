import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number | null = null;
  editMode!: boolean;


  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params: Params) => {
      const id = params['id'];
      if(id) {
        this.id = +params['id'];
        this.editMode = true;
      } else {
        this.id = null;
        this.editMode = false;
      }
    });
  }

}
