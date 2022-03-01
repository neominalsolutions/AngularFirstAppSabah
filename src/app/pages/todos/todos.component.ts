import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

// page componentlerde selector ismi olmaz. nedeni route ile yönlendirme ,ile bu component çağırılacaktır.
@Component({
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  title: string = '';
  titles: any[] = [];
  selectedIndex: number = -1;

  constructor() {}

  ngOnInit(): void {}

  Add() {
    this.titles = [this.title, ...this.titles];
    this.title = '';
  }

  Edit(index: number) {
    this.title = this.titles[index];
    this.selectedIndex = index;
  }

  Delete(index: number) {
    console.log('index', index);
    // this.titles = this.titles.splice(index, 1); // hatalı yazım
    this.titles.splice(index, 1);
  }

  Update() {
    this.titles[this.selectedIndex] = this.title;
    this.title = '';
    this.selectedIndex = -1;
  }
}
