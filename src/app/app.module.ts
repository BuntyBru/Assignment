import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { EducationComponent } from './education/education.component';
import { HeaderComponent } from './header/header.component';
import { InterestsComponent } from './interests/interests.component';
import { LanguagesComponent } from './languages/languages.component';
import { ProjectComponent } from './project/project.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';
import { BtechComponent } from './education/btech/btech.component';
import { TenComponent } from './education/ten/ten.component';
import { TwelveComponent } from './education/twelve/twelve.component';
import { EmailComponent } from './header/email/email.component';
import { NameComponent } from './header/name/name.component';
import { NetworkComponent } from './work/network/network.component';
import { SdeComponent } from './work/sde/sde.component';
import { TechComponent } from './work/tech/tech.component';

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    HeaderComponent,
    InterestsComponent,
    LanguagesComponent,
    ProjectComponent,
    SkillsComponent,
    WorkComponent,
    BtechComponent,
    TenComponent,
    TwelveComponent,
    EmailComponent,
    NameComponent,
    NetworkComponent,
    SdeComponent,
    TechComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
