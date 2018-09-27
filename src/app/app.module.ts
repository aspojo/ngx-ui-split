import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AngularSplitModule} from '../../projects/ngx-split/src/lib/split/modules/angularSplit.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularSplitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
