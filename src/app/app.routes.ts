import { Routes } from '@angular/router';
import { LandingPageComponent } from '../components/landing-page/landing-page.component';
import { AccountSelectionComponent } from '../components/account-selection/account-selection.component';
import { SignUpIndividualComponent } from '../components/sign-up-individual/sign-up-individual.component';
import { LogInComponent } from '../components/log-in/log-in.component';
import { AccountSummaryComponent } from '../components/account-summary/account-summary.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'sign-up/account-selection', component: AccountSelectionComponent},
    {path: 'sign-up/individual', component: SignUpIndividualComponent},
    {path: 'log-in', component: LogInComponent},
    {path: 'my-account/summary', component: AccountSummaryComponent},
    {path: 'my-account', redirectTo: 'my-account/summary'},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
