import { Component, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements DoCheck {
  num: number = 1;
  ngDoCheck(): void {
    console.log('uma mudança foi feita');
  }

  adiciona1() {
    this.num++;
  }
}
