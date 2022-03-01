import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  selectedCity: string = '';
  toggle = false;

  constructor() {}

  ngOnInit(): void {}

  click(value: any) {
    console.log('value', value);
    alert('Tıklandı ' + value);
  }

  citySelect(value: any) {
    alert(value);
    this.selectedCity = value;
  }
}
