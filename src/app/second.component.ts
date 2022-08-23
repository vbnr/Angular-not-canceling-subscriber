import { Component, OnInit } from '@angular/core';
import { delay, of, Subject } from 'rxjs';

@Component({
  selector: 'second',
  template: `
  <p>SecondComponent</p>
  <p>Async data: {{ data?.name }}</p>`,
})
export class SecondComponent implements OnInit {
  data: { name: string };

  ngOnInit() {
    this.loadAsyncData();
  }

  loadAsyncData() {
    of({ name: 'Name 1' })
      .pipe(delay(2000))
      .subscribe((data: { name: string }) => {
        console.log(data);
        this.data = data;
      });
  }
}
