import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <button (click)="redirectTo('callbacks/success')" class="success-button">Success</button>
    <button (click)="redirectTo('callbacks/cancel')" class="cancel-button">Cancel</button>
    <button (click)="redirectTo('callbacks/error')" class="error-button">Error</button>
  `,
})
export class App {
  name = 'Angular';

  redirectTo(route: string) {
    window.location.href = `https://example.com/${route}`;
  }
}

bootstrapApplication(App);
