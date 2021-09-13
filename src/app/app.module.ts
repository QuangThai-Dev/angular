import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './Hello/hello.component';
import { Excercise1Component } from './excercise1/excercise1.component';
import { HeaderComponent } from './excercise1/header/header.component';
import { ContentsComponent } from './excercise1/contents/contents.component';
import { SidebarComponent } from './excercise1/sidebar/sidebar.component';
import { FooterComponent } from './excercise1/footer/footer.component';
import { HeaderEx2Component } from './excercise2/header-ex2/header-ex2.component';
import { FooterEx2Component } from './excercise2/footer-ex2/footer-ex2.component';
import { CarouselComponent } from './excercise2/carousel/carousel.component';
import { ListcardComponent } from './excercise2/listcard/listcard.component';
import { Excercise2Component } from './excercise2/excercise2.component';

//@NgModule: Decorator
//Các options trong decorator đc gọi là metadata
@NgModule({
  declarations: [
    //Nơi khai báo tất cả các component được quản lý bởi module này
    AppComponent,
    HelloComponent,
    Excercise1Component,
    HeaderComponent,
    ContentsComponent,
    SidebarComponent,
    FooterComponent,
    Excercise2Component,
    HeaderEx2Component,
    FooterEx2Component,
    CarouselComponent,
    ListcardComponent
  ],
  imports: [
    //Nơi khai báo những module được sử dụng ở module này
    BrowserModule,
    AppRoutingModule
  ],
  //Nơi khai báo service
  providers: [],
  //Nơi khai báo component chạy đầu tiên trong module này
  bootstrap: [AppComponent]
})
export class AppModule { }
