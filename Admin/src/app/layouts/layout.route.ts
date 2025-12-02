import { Routes } from "@angular/router";
import { IndexComponent } from "../pages/Dashboard/index/index.component";
import { AffiliateComponent } from "../pages/Dashboard/affiliate/affiliate.component";
import { StatisticsComponent } from "../pages/Widget/statistics/statistics.component";
import { UserComponent } from "../pages/Widget/user/user.component";
import { DataComponent } from "../pages/Widget/data/data.component";
import { ChartComponent } from "../pages/Widget/chart/chart.component";
import { FeatherComponent } from "../pages/Icon/feather/feather.component";
import { CustomComponent } from "../pages/Icon/custom/custom.component";
import { FontawesomeComponent } from "../pages/Icon/fontawesome/fontawesome.component";
import { MaterialComponent } from "../pages/Icon/material/material.component";
import { PhosphorComponent } from "../pages/Icon/phosphor/phosphor.component";
import { FormBasicComponent } from "../pages/Forms/Eelements/form-basic/form-basic.component";
import { FormTwoBasicComponent } from "../pages/Forms/Eelements/form-two-basic/form-two-basic.component";
import { FormCheckboxComponent } from "../pages/Forms/Eelements/form-checkbox/form-checkbox.component";
import { FormFloatingComponent } from "../pages/Forms/Eelements/form-floating/form-floating.component";
import { FormInputGroupComponent } from "../pages/Forms/Eelements/form-input-group/form-input-group.component";
import { FormMegaoptionComponent } from "../pages/Forms/Eelements/form-megaoption/form-megaoption.component";
import { FormRadioComponent } from "../pages/Forms/Eelements/form-radio/form-radio.component";
import { FormSwitchComponent } from "../pages/Forms/Eelements/form-switch/form-switch.component";
import { FormChoicesComponent } from "../pages/Forms/plugins/form-choices/form-choices.component";
import { FormClipboardComponent } from "../pages/Forms/plugins/form-clipboard/form-clipboard.component";
import { FormDatepickerComponent } from "../pages/Forms/plugins/form-datepicker/form-datepicker.component";
import { FormInputmaskComponent } from "../pages/Forms/plugins/form-inputmask/form-inputmask.component";
import { FormRatingComponent } from "../pages/Forms/plugins/form-rating/form-rating.component";
import { FormRecaptchaComponent } from "../pages/Forms/plugins/form-recaptcha/form-recaptcha.component";
import { FormTimepickerComponent } from "../pages/Forms/plugins/form-timepicker/form-timepicker.component";
import { FormTypeaheadComponent } from "../pages/Forms/plugins/form-typeahead/form-typeahead.component";
import { FileUploadComponent } from "../pages/Forms/FileUpload/file-upload/file-upload.component";
import { FormValidationComponent } from "../pages/Forms/form-validation/form-validation.component";
import { FormWizardComponent } from "../pages/Forms/form-wizard/form-wizard.component";
import { ImageCropComponent } from "../pages/Forms/image-crop/image-crop.component";
import { FormLayActionbarsComponent } from "../pages/Forms/Layouts/form-lay-actionbars/form-lay-actionbars.component";
import { FormLayDefaultComponent } from "../pages/Forms/Layouts/form-lay-default/form-lay-default.component";
import { FormLayMulticolumnComponent } from "../pages/Forms/Layouts/form-lay-multicolumn/form-lay-multicolumn.component";
import { FormLayStickyactionbarsComponent } from "../pages/Forms/Layouts/form-lay-stickyactionbars/form-lay-stickyactionbars.component";
import { EditorClassicComponent } from "../pages/Forms/TextEditors/editor-classic/editor-classic.component";
import { MarkdownComponent } from "../pages/Forms/TextEditors/markdown/markdown.component";
import { QuillComponent } from "../pages/Forms/TextEditors/quill/quill.component";
import { TinymceComponent } from "../pages/Forms/TextEditors/tinymce/tinymce.component";
import { BasicTableComponent } from "../pages/Tables/Bootstrap/basic-table/basic-table.component";
import { BorderTableComponent } from "../pages/Tables/Bootstrap/border-table/border-table.component";
import { SizingTableComponent } from "../pages/Tables/Bootstrap/sizing-table/sizing-table.component";
import { StylingTableComponent } from "../pages/Tables/Bootstrap/styling-table/styling-table.component";
import { DtAdvanceComponent } from "../pages/Tables/DataTables/dt-advance/dt-advance.component";
import { DtApiComponent } from "../pages/Tables/DataTables/dt-api/dt-api.component";
import { DtPluginComponent } from "../pages/Tables/DataTables/dt-plugin/dt-plugin.component";
import { DtSourcesComponent } from "../pages/Tables/DataTables/dt-sources/dt-sources.component";
import { DtStylingComponent } from "../pages/Tables/DataTables/dt-styling/dt-styling.component";
import { DtExtAutofillComponent } from "../pages/Tables/DtExtensions/dt-ext-autofill/dt-ext-autofill.component";
import { DtExtBasicButtonsComponent } from "../pages/Tables/DtExtensions/dt-ext-basic-buttons/dt-ext-basic-buttons.component";
import { DtExtColReorderComponent } from "../pages/Tables/DtExtensions/dt-ext-col-reorder/dt-ext-col-reorder.component";
import { DtExtExportButtonsComponent } from "../pages/Tables/DtExtensions/dt-ext-export-buttons/dt-ext-export-buttons.component";
import { DtExtFixedColumnsComponent } from "../pages/Tables/DtExtensions/dt-ext-fixed-columns/dt-ext-fixed-columns.component";
import { DtExtFixedHeaderComponent } from "../pages/Tables/DtExtensions/dt-ext-fixed-header/dt-ext-fixed-header.component";
import { DtExtKeyTableComponent } from "../pages/Tables/DtExtensions/dt-ext-key-table/dt-ext-key-table.component";
import { DtExtResponsiveComponent } from "../pages/Tables/DtExtensions/dt-ext-responsive/dt-ext-responsive.component";
import { DtExtRowReorderComponent } from "../pages/Tables/DtExtensions/dt-ext-row-reorder/dt-ext-row-reorder.component";
import { DtExtSelectComponent } from "../pages/Tables/DtExtensions/dt-ext-select/dt-ext-select.component";
import { TblDtSimpleComponent } from "../pages/Tables/Vanilla/tbl-dt-simple/tbl-dt-simple.component";
import { TblDtFiltersComponent } from "../pages/Tables/Vanilla/tbl-dt-filters/tbl-dt-filters.component";
import { TblDtMethodsComponent } from "../pages/Tables/Vanilla/tbl-dt-methods/tbl-dt-methods.component";
import { TblDtFetchApiComponent } from "../pages/Tables/Vanilla/tbl-dt-fetch-api/tbl-dt-fetch-api.component";
import { TblDtAddRowsComponent } from "../pages/Tables/Vanilla/tbl-dt-add-rows/tbl-dt-add-rows.component";
import { TblDtColumnManipulationComponent } from "../pages/Tables/Vanilla/tbl-dt-column-manipulation/tbl-dt-column-manipulation.component";
import { TblDtDatetimeSortingComponent } from "../pages/Tables/Vanilla/tbl-dt-datetime-sorting/tbl-dt-datetime-sorting.component";
import { TblDtExportComponent } from "../pages/Tables/Vanilla/tbl-dt-export/tbl-dt-export.component";
import { TblDtDynamicImportComponent } from "../pages/Tables/Vanilla/tbl-dt-dynamic-import/tbl-dt-dynamic-import.component";
import { ChartApexComponent } from "../pages/Charts/chart-apex/chart-apex.component";
import { MapGmapComponent } from "../pages/Maps/map-gmap/map-gmap.component";
import { MapVectorComponent } from "../pages/Maps/map-vector/map-vector.component";
import { GridComponent } from "../pages/Application/Gallery/grid/grid.component";
import { MasonryComponent } from "../pages/Application/Gallery/masonry/masonry.component";
import { CalenderComponent } from "../pages/Application/calender/calender.component";
import { DtExtScrollerComponent } from "../pages/Tables/DtExtensions/dt-ext-scroller/dt-ext-scroller.component";
import { MembershipComponent } from "../pages/Dashboard/membership/membership.component";
import { InvoiceComponent } from "../pages/Dashboard/invoice/invoice.component";
import { FinanceComponent } from "../pages/Dashboard/finance/finance.component";
import { HelpdeskComponent } from "../pages/Dashboard/helpdesk/helpdesk.component";
import { ChatComponent } from "../pages/Application/chat/chat.component";
import { ContactSearchComponent } from "../pages/Auth/contact-search/contact-search.component";
import { ContactUsComponent } from "../pages/Auth/contact-us/contact-us.component";
import { LoadingComponent } from "../pages/Auth/loading/loading.component";
import { SearchPageComponent } from "../pages/Auth/search-page/search-page.component";
import { LoginModalComponent } from "../pages/Auth/login-modal/login-modal.component";
import { CustomerComponent } from "../pages/Application/Help desk/customer/customer.component";
import { TicketListComponent } from "../pages/Application/Help desk/ticket/ticket-list/ticket-list.component";
import { TicketDetailsComponent } from "../pages/Application/Help desk/ticket/ticket-details/ticket-details.component";
import { TicketCreateComponent } from "../pages/Application/Help desk/ticket/ticket-create/ticket-create.component";
import { ListComponent } from "../pages/Application/Membership/list/list.component";
import { PricingComponent } from "../pages/Application/Membership/pricing/pricing.component";
import { SettingsComponent } from "../pages/Application/Membership/settings/settings.component";
import { StudentAddComponent } from "../pages/Application/Online course/Student/student-add/student-add.component";
import { StudentListComponent } from "../pages/Application/Online course/Student/student-list/student-list.component";
import { StudentApplyComponent } from "../pages/Application/Online course/Student/student-apply/student-apply.component";
import { TeacherAddComponent } from "../pages/Application/Online course/Teacher/teacher-add/teacher-add.component";
import { TeacherListComponent } from "../pages/Application/Online course/Teacher/teacher-list/teacher-list.component";
import { TeacherApplyComponent } from "../pages/Application/Online course/Teacher/teacher-apply/teacher-apply.component";
import { CourseViewComponent } from "../pages/Application/Online course/Course/course-view/course-view.component";
import { CourseAddComponent } from "../pages/Application/Online course/Course/course-add/course-add.component";
import { OnlineCoursePricingComponent } from "../pages/Application/Online course/online-course-pricing/online-course-pricing.component";
import { SiteComponent } from "../pages/Application/Online course/site/site.component";
import { PaymentComponent } from "../pages/Application/Online course/Setting/payment/payment.component";
import { SettingPricingComponent } from "../pages/Application/Online course/Setting/setting-pricing/setting-pricing.component";
import { SettingNotifictionComponent } from "../pages/Application/Online course/Setting/setting-notifiction/setting-notifiction.component";
import { PlansComponent } from "../pages/Application/plans/plans.component";
import { UsersAccountProfileComponent } from "../pages/Application/Users/users-account-profile/users-account-profile.component";
import { UsersSocialMediaComponent } from "../pages/Application/Users/users-social-media/users-social-media.component";
import { UsersCardComponent } from "../pages/Application/Users/users-card/users-card.component";
import { UserListComponent } from "../pages/Application/Users/user-list/user-list.component";
import { CourseComponent } from "../pages/Dashboard/course/course.component";
import { InvoiceTwoCreateComponent } from "../pages/Application/Invoice2/invoice-two-create/invoice-two-create.component";
import { InvoiceTwoEditComponent } from "../pages/Application/Invoice2/invoice-two-edit/invoice-two-edit.component";
import { InvoiceTwoListComponent } from "../pages/Application/Invoice2/invoice-two-list/invoice-two-list.component";
import { InvoiceTwoViewComponent } from "../pages/Application/Invoice2/invoice-two-view/invoice-two-view.component";
import { UserTeamComponent } from "../pages/Application/Users/user-team/user-team.component";
import { MailComponent } from "../pages/Application/mail/mail.component";
import { InvoiceListComponent } from "../pages/Application/Invoice/invoice-list/invoice-list.component";
import { InvoiceCreateComponent } from "../pages/Application/Invoice/invoice-create/invoice-create.component";
import { InvoicePreviewComponent } from "../pages/Application/Invoice/invoice-preview/invoice-preview.component";
import { ECommerceProductComponent } from "../pages/Application/E-commerce/e-commerce-product/e-commerce-product.component";
import { ECommerceProductAddComponent } from "../pages/Application/E-commerce/e-commerce-product-add/e-commerce-product-add.component";
import { ECommerceProductDetailsComponent } from "../pages/Application/E-commerce/e-commerce-product-details/e-commerce-product-details.component";
import { ECommerceProductCheckoutComponent } from "../pages/Application/E-commerce/e-commerce-product-checkout/e-commerce-product-checkout.component";
import { ECommerceProductListComponent } from "../pages/Application/E-commerce/e-commerce-product-list/e-commerce-product-list.component";
import { TablerComponent } from "../pages/Icon/tabler/tabler.component";
import { LayoutVerticalComponent } from "../pages/Demo/layout-vertical/layout-vertical.component";
import { AnimationComponent } from "../pages/Elements/animation/animation.component";
import { SamplePageComponent } from "../pages/Auth/sample-page/sample-page.component";
import { PageSettingsComponent } from "../pages/page-settings/page-settings.component";


export const PAGE_ROUTES: Routes = [

  { path: '', component: IndexComponent },
  { path: 'affiliate', component: AffiliateComponent },
  { path: 'finance', component: FinanceComponent },
  { path: 'invoice', component: InvoiceComponent },
  { path: 'membership', component: MembershipComponent },
  { path: 'helpdesk', component: HelpdeskComponent },
  { path: 'course', component: CourseComponent },

  { path: 'statistics', component: StatisticsComponent },
  { path: 'user', component: UserComponent },
  { path: 'data', component: DataComponent },
  { path: 'chart', component: ChartComponent },

  { path: 'feather', component: FeatherComponent },
  { path: 'custom', component: CustomComponent },
  { path: 'fontawesome', component: FontawesomeComponent },
  { path: 'material', component: MaterialComponent },
  { path: 'phosphor', component: PhosphorComponent },
  { path: 'tabler', component: TablerComponent },

  { path: 'form-basic', component: FormBasicComponent },
  { path: 'form-checkbox', component: FormCheckboxComponent },
  { path: 'form-floating', component: FormFloatingComponent },
  { path: 'form-input-group', component: FormInputGroupComponent },
  { path: 'form-megaoption', component: FormMegaoptionComponent },
  { path: 'form-radio', component: FormRadioComponent },
  { path: 'form-switch', component: FormSwitchComponent },
  { path: 'form-two-basic', component: FormTwoBasicComponent },
  { path: 'form-choices', component: FormChoicesComponent },
  { path: 'form-clipboard', component: FormClipboardComponent },
  { path: 'form-datepicker', component: FormDatepickerComponent },
  { path: 'form-inputmask', component: FormInputmaskComponent },
  { path: 'form-rating', component: FormRatingComponent },
  { path: 'form-recaptcha', component: FormRecaptchaComponent },
  { path: 'form-timepicker', component: FormTimepickerComponent },
  { path: 'form-typeahead', component: FormTypeaheadComponent },
  { path: 'file-upload', component: FileUploadComponent },
  { path: 'form-validation', component: FormValidationComponent },
  { path: 'form-wizard', component: FormWizardComponent },
  { path: 'image-crop', component: ImageCropComponent },
  { path: 'form-lay-actionbars', component: FormLayActionbarsComponent },
  { path: 'form-lay-default', component: FormLayDefaultComponent },
  { path: 'form-lay-multicolumn', component: FormLayMulticolumnComponent },
  { path: 'form-lay-stickyactionbars', component: FormLayStickyactionbarsComponent },
  { path: 'editor-classic', component: EditorClassicComponent },
  { path: 'markdown', component: MarkdownComponent },
  { path: 'quill', component: QuillComponent },
  { path: 'tinymce', component: TinymceComponent },


  { path: 'basic-table', component: BasicTableComponent },
  { path: 'border-table', component: BorderTableComponent },
  { path: 'sizing-table', component: SizingTableComponent },
  { path: 'styling-table', component: StylingTableComponent },
  { path: 'dt-advance', component: DtAdvanceComponent },
  { path: 'dt-api', component: DtApiComponent },
  { path: 'dt-plugin', component: DtPluginComponent },
  { path: 'dt-sources', component: DtSourcesComponent },
  { path: 'dt-styling', component: DtStylingComponent },
  { path: 'dt-ext-autofill', component: DtExtAutofillComponent },
  { path: 'dt-ext-basic-buttons', component: DtExtBasicButtonsComponent },
  { path: 'dt-ext-col-reorder', component: DtExtColReorderComponent },
  { path: 'dt-ext-export-buttons', component: DtExtExportButtonsComponent },
  { path: 'dt-ext-fixed-columns', component: DtExtFixedColumnsComponent },
  { path: 'dt-ext-fixed-header', component: DtExtFixedHeaderComponent },
  { path: 'dt-ext-key-table', component: DtExtKeyTableComponent },
  { path: 'dt-ext-responsive', component: DtExtResponsiveComponent },
  { path: 'dt-ext-row-reorder', component: DtExtRowReorderComponent },
  { path: 'dt-ext-scroller', component: DtExtScrollerComponent },
  { path: 'dt-ext-select', component: DtExtSelectComponent },
  { path: 'tbl-dt-add-rows', component: TblDtAddRowsComponent },
  { path: 'tbl-dt-column-manipulation', component: TblDtColumnManipulationComponent },
  { path: 'tbl-dt-datetime-sorting', component: TblDtDatetimeSortingComponent },
  { path: 'tbl-dt-export', component: TblDtExportComponent },
  { path: 'tbl-dt-fetch-api', component: TblDtFetchApiComponent },
  { path: 'tbl-dt-filters', component: TblDtFiltersComponent },
  { path: 'tbl-dt-methods', component: TblDtMethodsComponent },
  { path: 'tbl-dt-simple', component: TblDtSimpleComponent },
  { path: 'tbl-dt-dynamic-import', component: TblDtDynamicImportComponent },


  { path: 'chart-apex', component: ChartApexComponent },


  { path: 'map-gmap', component: MapGmapComponent },
  { path: 'map-vector', component: MapVectorComponent },

  { path: 'gallery-grid', component: GridComponent },
  { path: 'gallery-masonry', component: MasonryComponent },

  { path: 'calender', component: CalenderComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'helpdesk-customer', component: CustomerComponent },


  { path: 'invoice-two-create', component: InvoiceTwoCreateComponent },
  { path: 'invoice-two-edit', component: InvoiceTwoEditComponent },
  { path: 'invoice-two-list', component: InvoiceTwoListComponent },
  { path: 'invoice-two-view', component: InvoiceTwoViewComponent },

  { path: 'contact-search', component: ContactSearchComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'loading', component: LoadingComponent },
  { path: 'login-modal', component: LoginModalComponent },
  { path: 'search-page', component: SearchPageComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'ticket-list', component: TicketListComponent },
  { path: 'ticket-details', component: TicketDetailsComponent },
  { path: 'ticket-create', component: TicketCreateComponent},
  { path: 'membership-list', component: ListComponent},
  { path: 'membership-pricing', component: PricingComponent},
  { path: 'membership-setting', component: SettingsComponent },

  { path: 'student-add', component: StudentAddComponent},
  { path: 'student-list', component: StudentListComponent},
  { path: 'student-apply', component: StudentApplyComponent },

  { path: 'teacher-add', component: TeacherAddComponent },
  { path: 'teacher-list', component: TeacherListComponent },
  { path: 'teacher-apply', component: TeacherApplyComponent },

  { path: 'course-view', component: CourseViewComponent},
  { path: 'course-add', component: CourseAddComponent },

  { path: 'online-course-pricing', component: OnlineCoursePricingComponent },
  { path: 'online-course-site', component: SiteComponent },
  { path: 'online-course-setting-payment', component: PaymentComponent },
  { path: 'online-course-setting-pricing', component: SettingPricingComponent},
  { path: 'online-course-setting-notifaction', component: SettingNotifictionComponent },

  { path: 'applications-plans', component: PlansComponent},
  { path: 'applications-users-account-profile', component: UsersAccountProfileComponent},
  { path: 'applications-users-social-media', component: UsersSocialMediaComponent},
  { path: 'applications-users-card', component: UsersCardComponent},
  { path: 'applications-users-list', component: UserListComponent},
  { path: 'applications-user-team', component: UserTeamComponent},

  { path: 'settings', component: SettingsComponent },
  { path: 'mail', component: MailComponent },

  { path: 'invoice-one-list', component: InvoiceListComponent},
  { path: 'invoice-one-create', component: InvoiceCreateComponent},
  { path: 'invoice-one-preview', component: InvoicePreviewComponent },

  { path: 'e-commerce-product', component: ECommerceProductComponent},
  { path: 'e-commerce-product-add', component: ECommerceProductAddComponent},
  { path: 'e-commerce-product-details', component: ECommerceProductDetailsComponent},
  { path: 'e-commerce-product-checkout', component: ECommerceProductCheckoutComponent},
  { path: 'e-commerce-product-list', component: ECommerceProductListComponent},

  { path: 'layout-vertical',component: LayoutVerticalComponent},
  { path: 'animation',component: AnimationComponent},
  { path: 'sample-page',component: SamplePageComponent},
  { path: 'page-settings',component: PageSettingsComponent},

]
