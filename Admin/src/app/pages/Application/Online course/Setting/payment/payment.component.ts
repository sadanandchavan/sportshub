import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../../../../layouts/breadcrumb/breadcrumb.component";
import { AuthSectionOneComponent } from './section/auth-section-one/auth-section-one.component';
import { AuthSectionTwoComponent } from './section/auth-section-two/auth-section-two.component';
import { AuthSectionThreeComponent } from './section/auth-section-three/auth-section-three.component';
import { AuthSectionFourComponent } from './section/auth-section-four/auth-section-four.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [BreadcrumbComponent,CommonModule, AuthSectionOneComponent,AuthSectionTwoComponent,AuthSectionThreeComponent,AuthSectionFourComponent],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {

  currentStep: string = 'step1';

  nextStep() {
    switch (this.currentStep) {
      case 'step1':
        this.currentStep = 'step2';
        break;
      case 'step2':
        this.currentStep = 'step3';
        break;
      case 'step3':
        this.currentStep = 'step4';
        break;
    }
  }

  previousStep() {
    switch (this.currentStep) {
      case 'step2':
        this.currentStep = 'step1';
        break;
      case 'step3':
        this.currentStep = 'step2';
        break;
      case 'step4':
        this.currentStep = 'step3';
        break;
    }
  }

}
