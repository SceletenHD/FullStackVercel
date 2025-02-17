import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-display',
  template: `
    <div *ngIf="data">
      <h2>{{ data.title }}</h2>
      <p>{{ data.description }}</p>
      <img [src]="data.imageUrl" alt="Data Image">
    </div>
  `,
  standalone: true
})
export class DataDisplayComponent implements OnInit {
  data: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('/api/data').subscribe((response: any) => {
      this.data = response;
    });
  }
}