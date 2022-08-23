import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FirstComponent } from './first.component';
import { RouterModule } from '@angular/router';
import { SecondComponent } from './second.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'first', component: FirstComponent },
      { path: 'second', component: SecondComponent },
    ]),
  ],
  declarations: [AppComponent, FirstComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
