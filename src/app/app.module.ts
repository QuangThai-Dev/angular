//Module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
//Components
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
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { StructuralComponent } from './directives/structural/structural.component';
import { AttributeComponent } from './directives/attribute/attribute.component';
import { HightlightDirective } from './my-directives/hightlight.directive';
import { HoverButtonDirective } from './my-directives/hover-button.directive';
import { InteractionComponent } from './interaction/interaction.component';
import { ChildComponent } from './interaction/child/child.component';
import { MaterialComponent } from './material/material.component';
import { DemoServiceComponent } from './demo-service/demo-service.component';
import { FirstComponent } from './demo-service/first/first.component';
import { SecondComponent } from './demo-service/second/second.component';
import { AccountManagementComponent } from './demo-service/account-management/account-management.component';
import { AccountListComponent } from './demo-service/account-management/account-list/account-list.component';
import { AddAccountComponent } from './demo-service/account-management/add-account/add-account.component';

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
    ListcardComponent,
    DataBindingComponent,
    DirectivesComponent,
    StructuralComponent,
    AttributeComponent,
    HightlightDirective,
    HoverButtonDirective,
    InteractionComponent,
    ChildComponent,
    MaterialComponent,
    DemoServiceComponent,
    FirstComponent,
    SecondComponent,
    AccountManagementComponent,
    AccountListComponent,
    AddAccountComponent
  ],
  imports: [
    //Nơi khai báo những module được sử dụng ở module này
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule
  ],
  //Nơi khai báo service
  providers: [],
  //Nơi khai báo component chạy đầu tiên trong module này
  bootstrap: [AppComponent]
})
export class AppModule { }
