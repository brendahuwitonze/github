import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { RepoComponent } from './repo/repo.component';
import { FormComponent } from './form/form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { CreatedPipe } from './created.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RepoComponent,
    FormComponent,
    NavbarComponent,
    StrikethroughDirective,
    CreatedPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
