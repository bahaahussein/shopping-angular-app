import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() onSelectComponent = new EventEmitter<string>();
  collapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(selected: string): void {
    this.onSelectComponent.emit(selected);
  }

}
