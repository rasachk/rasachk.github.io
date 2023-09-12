import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CertificatesComponent} from "./certificates/certificates.component";
import {ContactMeComponent} from "./contact-me/contact-me.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {ExperienceComponent} from "./experience/experience.component";
import {ProjectsPublicationsComponent} from "./projects-publications/projects-publications.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: 'projects-publications', component: ProjectsPublicationsComponent},
  {path: 'certificates', component: CertificatesComponent},
  {path: 'contact-me', component: ContactMeComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
