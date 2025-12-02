import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import Choices from 'choices.js';

@Component({
  selector: 'app-form-choices',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './form-choices.component.html',
  styleUrls: ['./form-choices.component.css'], // Fixed typo: should be styleUrls
})
export class FormChoicesComponent implements AfterViewInit, OnInit, OnDestroy {
  initialValue: string = 'preset-1,preset-2';
  choicesInstanceRemoveButton: any;
  choicesInstanceUniqueValues: any;
  choicesInstanceEmailFilter: any; // Added declaration for email filter instance
  choicesInstanceDisabled: any;
  choicesInstancePrependAppend: any;


  ngOnInit(): void {
    // This will make sure the initial value is set correctly
    setTimeout(() => {
      const inputElementRemoveButton = document.getElementById(
        'choices-text-remove-button'
      ) as HTMLInputElement;
      inputElementRemoveButton.value = this.initialValue;
    });
  }

  ngAfterViewInit(): void {
    const inputElementRemoveButton = document.getElementById(
      'choices-text-remove-button'
    ) as HTMLInputElement;
    this.choicesInstanceRemoveButton = new Choices(inputElementRemoveButton, {
      delimiter: ',',
      editItems: true,
      maxItemCount: 5,
      removeItemButton: true,
    });

    const inputElementUniqueValues = document.getElementById(
      'choices-text-unique-values'
    ) as HTMLInputElement;
    this.choicesInstanceUniqueValues = new Choices(inputElementUniqueValues, {
      paste: false,
      duplicateItemsAllowed: false,
      editItems: true,
    });

    const inputElementEmailFilter = document.getElementById(
      'choices-text-email-filter'
    ) as HTMLInputElement;
    this.choicesInstanceEmailFilter = new Choices(inputElementEmailFilter, {
      editItems: true,
      addItemFilter: function (value: string) {
        if (!value) {
          return false;
        }

        const regex =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const expression = new RegExp(regex.source, 'i');
        return expression.test(value);
      },
    }).setValue(['joe@bloggs.com']);

    const inputElementDisabled = document.getElementById(
      'choices-text-disabled'
    ) as HTMLInputElement;
    this.choicesInstanceDisabled = new Choices(inputElementDisabled, {
      addItems: false,
      removeItems: false,
    }).disable();

    const inputElementPrependAppend = document.getElementById('choices-text-prepend-append-value') as HTMLInputElement;
    this.choicesInstancePrependAppend = new Choices(inputElementPrependAppend, {
      prependValue: 'item-',
      appendValue: '-' + Date.now()
    });
  }

  ngOnDestroy(): void {
    // Clean up the Choices instances when the component is destroyed
    if (this.choicesInstanceRemoveButton) {
      this.choicesInstanceRemoveButton.destroy();
    }
    if (this.choicesInstanceUniqueValues) {
      this.choicesInstanceUniqueValues.destroy();
    }
    if (this.choicesInstanceEmailFilter) {
      // Added cleanup for email filter instance
      this.choicesInstanceEmailFilter.destroy();
    }
    if (this.choicesInstanceDisabled) {
      this.choicesInstanceDisabled.destroy();
    }
  }
}
