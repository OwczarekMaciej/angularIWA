import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FibonacciComponent} from "./fibonacci/fibonacci.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FibonacciComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularFib';
}
