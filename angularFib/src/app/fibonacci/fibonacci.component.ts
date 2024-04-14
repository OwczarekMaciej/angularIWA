import {Component, OnInit} from '@angular/core';
import { Fibonacci} from "./fibonacci.model";
import {untagTsFile} from "@angular/compiler-cli/src/ngtsc/shims";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-fibonacci',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './fibonacci.component.html',
  styleUrl: './fibonacci.component.css'
})
export class FibonacciComponent implements OnInit{

  equation?: Fibonacci;
  constructor() {
  }

  calculate(n: HTMLInputElement): boolean {
    console.log(`Calculate ${n.value}-th number of fibonacci sequence.`)
    if(n.value == '' || n.valueAsNumber < 0){
      alert('Please fill the field with non-negative number');
    }
    else if(n.valueAsNumber > 1000000)
    {
      alert('Number is too big.');
    }
    else{
      this.equation = new Fibonacci(n.valueAsNumber);
      n.value='';
      this.equation.calcFib();
    }
    return false;
  }

  ngOnInit() {
  }
}
