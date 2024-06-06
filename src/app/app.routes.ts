import { Routes } from '@angular/router';
import { LandingPageComponent } from '../components/landing-page/landing-page.component';
import { AccountSelectionComponent } from '../components/account-selection/account-selection.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'sign-up/account-selection', component: AccountSelectionComponent},
    {path: '**', component: LandingPageComponent, pathMatch: 'full'}
];
