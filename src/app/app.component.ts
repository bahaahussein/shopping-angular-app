import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shopping';
  selectedComponent: string = 'recipes';

  onSelectComponent(component: string) {
    this.selectedComponent = component;
  }
}
