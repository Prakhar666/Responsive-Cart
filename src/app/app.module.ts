import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { DisplayComponent } from './display/display.component';



const routes: Routes = [
 
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  { path :'home',
    component: HomepageComponent,
    
  },

  // { path :'display',
  //   component: DataStoreComponent,
    
  // },

]


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FooterComponent,
    DisplayComponent
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ RouterModule ]
})
export class AppModule { }
