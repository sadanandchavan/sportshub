import { Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';
import { UnderConstructionComponent } from './pages/Auth/under-construction/under-construction.component';
import { ResetPasswordV2Component } from './pages/Auth/reset-password-v2/reset-password-v2.component';
import { ResetPasswordV1Component } from './pages/Auth/reset-password-v1/reset-password-v1.component';
import { RegisterV2Component } from './pages/Auth/register-v2/register-v2.component';
import { RegisterV1Component } from './pages/Auth/register-v1/register-v1.component';
import { LoginV2Component } from './pages/Auth/login-v2/login-v2.component';
import { LoginV1Component } from './pages/Auth/login-v1/login-v1.component';
import { ForgotPasswordV2Component } from './pages/Auth/forgot-password-v2/forgot-password-v2.component';
import { ForgotPasswordV1Component } from './pages/Auth/forgot-password-v1/forgot-password-v1.component';
import { Error404Component } from './pages/Auth/error-404/error-404.component';
import { ConnectionLostComponent } from './pages/Auth/connection-lost/connection-lost.component';
import { ComingSoonComponent } from './pages/Auth/coming-soon/coming-soon.component';
import { CodeVerificationV2Component } from './pages/Auth/code-verification-v2/code-verification-v2.component';
import { CodeVerificationV1Component } from './pages/Auth/code-verification-v1/code-verification-v1.component';
import { ElementsLayoutComponent } from './layouts/elements-layout/elements-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    loadChildren: () =>
      import('./layouts/layout.route').then((mod) => mod.PAGE_ROUTES),
  },

  //Auth

  { path: 'code-verification-v1', component: CodeVerificationV1Component },
  { path: 'code-verification-v2', component: CodeVerificationV2Component },
  { path: 'coming-soon', component: ComingSoonComponent },
  { path: 'connection-lost', component: ConnectionLostComponent },
  { path: 'error-404', component: Error404Component },
  { path: 'forgot-password-v1', component: ForgotPasswordV1Component },
  { path: 'forgot-password-v2', component: ForgotPasswordV2Component },
  { path: 'login-v1', component: LoginV1Component },
  { path: 'login-v2', component: LoginV2Component },
  { path: 'register-v1', component: RegisterV1Component },
  { path: 'register-v2', component: RegisterV2Component },
  { path: 'reset-password-v1', component: ResetPasswordV1Component },
  { path: 'reset-password-v2', component: ResetPasswordV2Component },
  { path: 'under-construction', component: UnderConstructionComponent },

  { path: '**', redirectTo: '/' },
];
