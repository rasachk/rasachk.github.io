import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsPublicationsComponent } from './projects-publications/projects-publications.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ContactMeComponent,
    CertificatesComponent,
    NotFoundComponent,
    ExperienceComponent,
    ProjectsPublicationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
