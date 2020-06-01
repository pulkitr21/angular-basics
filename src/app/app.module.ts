import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './product.service';
import { UserComponent } from './user/user.component';
import { ActivityComponent } from './activity/activity.component';
import { PlayersComponent } from './players/players.component';
import { AgePipe } from './age.pipe';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { ScorePipe } from './score.pipe';
import { PayrollComponent } from './payroll/payroll.component';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';
import { ProfileComponent } from './profile/profile.component';
import { LearningComponent } from './learning/learning.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    UserComponent,
    ActivityComponent,
    PlayersComponent,
    AgePipe,
    FilterPipe,
    ScorePipe,
    PayrollComponent,
    HelpdeskComponent,
    ProfileComponent,
    LearningComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
