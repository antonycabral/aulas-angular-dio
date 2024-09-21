import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, HttpClientModule],
  template: `
  <h1>Aula de Services</h1>
  <app-card></app-card>
  <router-outlet></router-outlet>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'servicesAngular';
}
