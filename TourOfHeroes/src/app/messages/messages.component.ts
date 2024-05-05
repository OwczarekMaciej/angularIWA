import {Component, OnInit} from '@angular/core';
import {MessageService} from "../message.service";
import {NgFor, NgIf} from "@angular/common";

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent implements OnInit{

  constructor(public messageService: MessageService) {
  }

  ngOnInit() { }

  changeColor(event: any): void {
    let color = '#';
    const letters = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    event.target.style.backgroundColor = color;
  }
}
