import { Component, OnInit } from '@angular/core';

import { buttons, Button } from '../buttons';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
  buttons = buttons;
  result: string = '0';
  input: string = '';
  dotted: boolean = false;
  lastButton: Button | undefined;
  limit: number = 15;
  answer: string = '0';

  constructor() { }

  ngOnInit(): void {
    this.dotted = false;
    this.result = '0';
  }

  clickButton(button: Button): void {
    if (this.input.length > this.limit && button.type !== 'clear') {
      window.alert('Input limit reached');
      return;
    }
    switch (button.type) {
      case 'allClear':
        this.allClear();
        this.lastButton = undefined;
        break;
      case 'clear':
        this.clear();
        break;
      case 'number':
        this.number(button);
        this.lastButton = button;
        break;
      case 'operator':
        this.operator(button);
        this.lastButton = button;
        break;
      case 'equal':
        this.equal();
        break;
      case 'dot':
        this.dot(button);
        break;
    }
    console.log(this.lastButton);
  }

  allClear(): void {
    this.result = '0';
    this.input = '';
    this.dotted = false;
  }

  clear(): void {
    if (this.lastButton) {
      console.log(this.lastButton)
      if (this.lastButton?.type === 'dot') {
        this.dotted = false;
        console.log('hola');
      }
      if (this.input !== '') {
        this.input = this.input.slice(0, -1);
      }
      this.lastButton = buttons.find(b => b.value === this.input[this.input.length - 1]);
    }
  }

  number(button: Button): void {
    if (this.input === '' || this.input === '0') {
      this.input = button.value;
    }
    else {
      this.input += button.value;
    }
  }

  operator(button: Button): void {
    if (this.input !== '') {
      if (this.lastButton?.type === 'operator') {
        this.input = this.input.slice(0, -1) + button.value;
      } else {
        this.input += button.value;
        this.dotted = false;
      }
    } else {
      window.alert('Please enter a number first');
    }
  }

  dot(button: Button): void {
    if (!this.dotted) {
      if (this.input === '' || this.lastButton?.type === 'operator') {
        this.input += '0.';
      } else {
        this.input += '.';
        this.dotted = true;
      }
      this.lastButton = button;
    }
  }

  equal(): void {
    if (this.input !== '') {
      if (this.lastButton?.type === 'operator') {
        window.alert('Please enter a number after the operator');
      }
      this.result = eval(this.input)
    }
  }

}
