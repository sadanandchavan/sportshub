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
import { AcTreeviewComponent } from './pages/Elements/Advance Components/ac-treeview/ac-treeview.component';
import { AcTourComponent } from './pages/Elements/Advance Components/ac-tour/ac-tour.component';
import { AcSyntaxHighlighterComponent } from './pages/Elements/Advance Components/ac-syntax-highlighter/ac-syntax-highlighter.component';
import { AcSliderComponent } from './pages/Elements/Advance Components/ac-slider/ac-slider.component';
import { AcRangesliderComponent } from './pages/Elements/Advance Components/ac-rangeslider/ac-rangeslider.component';
import { AcNotificationComponent } from './pages/Elements/Advance Components/ac-notification/ac-notification.component';
import { AcModalComponent } from './pages/Elements/Advance Components/ac-modal/ac-modal.component';
import { AcLightboxComponent } from './pages/Elements/Advance Components/ac-lightbox/ac-lightbox.component';
import { AcDatepickerComponentComponent } from './pages/Elements/Advance Components/ac-datepicker-component/ac-datepicker-component.component';
import { AcAlertComponent } from './pages/Elements/Advance Components/ac-alert/ac-alert.component';
import { BcAlertComponent } from './pages/Elements/BasicComponents/bc-alert/bc-alert.component';
import { BcBadgesComponent } from './pages/Elements/BasicComponents/bc-badges/bc-badges.component';
import { BcBreadcrumbComponent } from './pages/Elements/BasicComponents/bc-breadcrumb/bc-breadcrumb.component';
import { BcButtonComponent } from './pages/Elements/BasicComponents/bc-button/bc-button.component';
import { BcCardComponent } from './pages/Elements/BasicComponents/bc-card/bc-card.component';
import { BcCarouselComponent } from './pages/Elements/BasicComponents/bc-carousel/bc-carousel.component';
import { BcCollapseComponent } from './pages/Elements/BasicComponents/bc-collapse/bc-collapse.component';
import { BcColorComponent } from './pages/Elements/BasicComponents/bc-color/bc-color.component';
import { BcDropdownsComponent } from './pages/Elements/BasicComponents/bc-dropdowns/bc-dropdowns.component';
import { BcExtraComponent } from './pages/Elements/BasicComponents/bc-extra/bc-extra.component';
import { BcListGroupComponent } from './pages/Elements/BasicComponents/bc-list-group/bc-list-group.component';
import { BcModalComponent } from './pages/Elements/BasicComponents/bc-modal/bc-modal.component';
import { BcOffcanvasComponent } from './pages/Elements/BasicComponents/bc-offcanvas/bc-offcanvas.component';
import { BcPaginationComponent } from './pages/Elements/BasicComponents/bc-pagination/bc-pagination.component';
import { BcProgressComponent } from './pages/Elements/BasicComponents/bc-progress/bc-progress.component';
import { BcSpinnerComponent } from './pages/Elements/BasicComponents/bc-spinner/bc-spinner.component';
import { BcTabsComponent } from './pages/Elements/BasicComponents/bc-tabs/bc-tabs.component';
import { BcToastsComponent } from './pages/Elements/BasicComponents/bc-toasts/bc-toasts.component';
import { BcTooltipPopoverComponent } from './pages/Elements/BasicComponents/bc-tooltip-popover/bc-tooltip-popover.component';
import { HorizontalLayoutComponent } from './layouts/horizontal-layout/horizontal-layout.component';
import { LayoutHorizontalComponent } from './pages/Demo/layout-horizontal/layout-horizontal.component';
import { LayoutVerticalTabComponent } from './pages/Demo/layout-vertical-tab/layout-vertical-tab.component';
import { LayoutVerticalTabLayoutComponent } from './layouts/layout-vertical-tab-layout/layout-vertical-tab-layout.component';
import { LandingComponent } from './pages/landing/landing.component';
import { BcTypographyComponent } from './pages/Elements/BasicComponents/bc-typography/bc-typography.component';

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

  // landing
  { path: 'landing', component: LandingComponent },

  {
    path: 'ac-alert',
    component: ElementsLayoutComponent,
    children: [{ path: '', component: AcAlertComponent, outlet: 'elements' }],
  },
  {
    path: 'ac-datepicker-component',
    component: ElementsLayoutComponent,
    children: [
      {
        path: '',
        component: AcDatepickerComponentComponent,
        outlet: 'elements',
      },
    ],
  },
  {
    path: 'ac-lightbox',
    component: ElementsLayoutComponent,
    children: [
      { path: '', component: AcLightboxComponent, outlet: 'elements' },
    ],
  },
  {
    path: 'ac-modal',
    component: ElementsLayoutComponent,
    children: [{ path: '', component: AcModalComponent, outlet: 'elements' }],
  },
  {
    path: 'ac-notification',
    component: ElementsLayoutComponent,
    children: [
      { path: '', component: AcNotificationComponent, outlet: 'elements' },
    ],
  },
  {
    path: 'ac-rangeslider',
    component: ElementsLayoutComponent,
    children: [
      { path: '', component: AcRangesliderComponent, outlet: 'elements' },
    ],
  },
  {
    path: 'ac-slider',
    component: ElementsLayoutComponent,
    children: [{ path: '', component: AcSliderComponent, outlet: 'elements' }],
  },
  {
    path: 'ac-syntax-highlighter',
    component: ElementsLayoutComponent,
    children: [
      { path: '', component: AcSyntaxHighlighterComponent, outlet: 'elements' },
    ],
  },
  {
    path: 'ac-tour',
    component: ElementsLayoutComponent,
    children: [{ path: '', component: AcTourComponent, outlet: 'elements' }],
  },
  {
    path: 'ac-treeview',
    component: ElementsLayoutComponent,
    children: [
      { path: '', component: AcTreeviewComponent, outlet: 'elements' },
    ],
  },

  {
    path: 'bc-alert',
    component: ElementsLayoutComponent,
    children: [{ path: '', component: BcAlertComponent, outlet: 'elements' }],
  },
  {
    path: 'bc-badges',
    component: ElementsLayoutComponent,
    children: [{ path: '', component: BcBadgesComponent, outlet: 'elements' }],
  },
  {
    path: 'bc-breadcrumb',
    component: ElementsLayoutComponent,
    children: [
      { path: '', component: BcBreadcrumbComponent, outlet: 'elements' },
    ],
  },
  {
    path: 'bc-button',
    component: ElementsLayoutComponent,
    children: [{ path: '', component: BcButtonComponent, outlet: 'elements' }],
  },
  {
    path: 'bc-card',
    component: ElementsLayoutComponent,
    children: [{ path: '', component: BcCardComponent, outlet: 'elements' }],
  },
  {
    path: 'bc-carousel',
    component: ElementsLayoutComponent,
    children: [
      { path: '', component: BcCarouselComponent, outlet: 'elements' },
    ],
  },
  {
    path: 'bc-collapse',
    component: ElementsLayoutComponent,
    children: [
      { path: '', component: BcCollapseComponent, outlet: 'elements' },
    ],
  },
  {
    path: 'bc-color',
    component: ElementsLayoutComponent,
    children: [{ path: '', component: BcColorComponent, outlet: 'elements' }],
  },
  {
    path: 'bc-dropdowns',
    component: ElementsLayoutComponent,
    children: [
      { path: '', component: BcDropdownsComponent, outlet: 'elements' },
    ],
  },
  {
    path: 'bc-extra',
    component: ElementsLayoutComponent,
    children: [{ path: '', component: BcExtraComponent, outlet: 'elements' }],
  },
  {
    path: 'bc-list-group',
    component: ElementsLayoutComponent,
    children: [
      { path: '', component: BcListGroupComponent, outlet: 'elements' },
    ],
  },
  {
    path: 'bc-modal',
    component: ElementsLayoutComponent,
    children: [{ path: '', component: BcModalComponent, outlet: 'elements' }],
  },
  {
    path: 'bc-typography',
    component: ElementsLayoutComponent,
    children: [{ path: '', component: BcTypographyComponent, outlet: 'elements' }],
  },
  {
    path: 'bc-offcanvas',
    component: ElementsLayoutComponent,
    children: [
      { path: '', component: BcOffcanvasComponent, outlet: 'elements' },
    ],
  },
  {
    path: 'bc-pagination',
    component: ElementsLayoutComponent,
    children: [
      { path: '', component: BcPaginationComponent, outlet: 'elements' },
    ],
  },
  {
    path: 'bc-progress',
    component: ElementsLayoutComponent,
    children: [
      { path: '', component: BcProgressComponent, outlet: 'elements' },
    ],
  },
  {
    path: 'bc-spinner',
    component: ElementsLayoutComponent,
    children: [{ path: '', component: BcSpinnerComponent, outlet: 'elements' }],
  },
  {
    path: 'bc-tabs',
    component: ElementsLayoutComponent,
    children: [{ path: '', component: BcTabsComponent, outlet: 'elements' }],
  },
  {
    path: 'bc-toasts',
    component: ElementsLayoutComponent,
    children: [{ path: '', component: BcToastsComponent, outlet: 'elements' }],
  },
  {
    path: 'bc-tooltip-popover',
    component: ElementsLayoutComponent,
    children: [
      { path: '', component: BcTooltipPopoverComponent, outlet: 'elements' },
    ],
  },
  {
    path: 'layout-horizontal',
    component: HorizontalLayoutComponent,
    children: [
      { path: '', component: LayoutHorizontalComponent, outlet: 'hori' },
    ],
  },
  {
    path: 'layout-vertical-tab',
    component: LayoutVerticalTabLayoutComponent,
    children: [
      { path: '', component: LayoutVerticalTabComponent, outlet: 'vertical' },
    ],
  },

  { path: '**', redirectTo: '/' },
];
