import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  click(value: any) {
    console.log('value', value);
    alert('Tıklandı ' + value);
  }
}
