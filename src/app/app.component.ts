import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-title title="Olá Desenvolvedor!"></app-title>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
