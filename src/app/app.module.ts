import { PhotositeComponent } from './dashboard/photosite/photosite.component';
import { PhotoenvironnementComponent } from './dashboard/photoenvironnement/photoenvironnement.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { PresentationComponent } from './dashboard/presentation/presentation.component';
import { WelcomeComponent } from './dashboard/welcome/welcome.component';
import { EnvironnementComponent } from './dashboard/environnement/environnement.component';
import { ConnexionComponent } from './identification/connexion/connexion.component';
import { StructureComponent } from './dashboard/structure/structure.component';
import { NavigationComponent } from './dashboard/navigation/navigation.component';
import { ElectriciteComponent } from './dashboard/electricite/electricite.component';
import { ProtectionComponent } from './dashboard/protection/protection.component';
import { AntennaireComponent } from './dashboard/antennaire/antennaire.component';
import { SyntheseComponent } from './dashboard/synthese/synthese.component';
import { ConclusionComponent } from './dashboard/conclusion/conclusion.component';
import { ListerapportsComponent } from './dashboard/listerapports/listerapports.component';
import { ProfilComponent } from './dashboard/profil/profil.component';
import { UsersComponent } from './dashboard/users/users.component';
import { EquipesComponent } from './dashboard/equipes/equipes.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { RapportComponent } from './dashboard/rapport/rapport.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { InscriptionCompetenceComponent } from './inscription-competence/inscription-competence.component';
import { InscriptionProjetComponent } from './inscription-projet/inscription-projet.component';
import { InfositeComponent } from './dashboard/infosite/infosite.component';
import { AnnexesComponent } from './dashboard/annexes/annexes.component';




@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    InscriptionComponent,
    InscriptionCompetenceComponent,
    InscriptionProjetComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'presentation', component: PresentationComponent},
      {path:'dashboard', component: WelcomeComponent},
      {path:'environnement', component: EnvironnementComponent},
      {path:'structure', component: StructureComponent},
      {path:'navigation', component: NavigationComponent},
      {path:'electricite', component: ElectriciteComponent},
      {path:'protection', component: ProtectionComponent},
      {path:'antennaire', component: AntennaireComponent},
      {path:'synthese', component: SyntheseComponent},
      {path:'conclusion', component: ConclusionComponent},
      {path:'listerapports', component: ListerapportsComponent},
      {path:'profil', component: ProfilComponent},
      {path:'users', component: UsersComponent},
      {path:'equipes', component: EquipesComponent},
      {path:'admin', component: AdminComponent},
      {path:'rapport', component: RapportComponent},
      {path:'inscription', component: InscriptionComponent},
      {path:'inscription-competence', component: InscriptionCompetenceComponent},
      {path:'inscription-projet', component: InscriptionProjetComponent},
      {path:'infosite', component: InfositeComponent},
      {path:'photosite', component: PhotositeComponent},
      {path:'photoenvironnement', component: PhotoenvironnementComponent},
      {path:'annexes', component: AnnexesComponent},
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
