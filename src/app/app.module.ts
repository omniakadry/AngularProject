import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { InputOutputComponent } from './demo/input-output/input-output.component';
import { ParentComponent } from './demo/input-output/parent/parent.component';
import { ChildComponent } from './demo/input-output/child/child.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InputOutputComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CardComponent,
    ReactiveFormsModule,
    ReactiveFormComponent
],

  bootstrap: [AppComponent]
})
export class AppModule { }
