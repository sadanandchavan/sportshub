import { Component } from '@angular/core';
import { SweetAlertService } from '../../../../service/sweetalert.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ac-alert',
  standalone: true,
  imports: [],
  templateUrl: './ac-alert.component.html',
  styleUrls: ['./ac-alert.component.css'],
})
export class AcAlertComponent {
  constructor(public sweetAlertService: SweetAlertService) {}

  open() {
    this.sweetAlertService
      .custom('Any fool can use a computer')
      .then((result) => {});
  }

  openTwo(dec: string = 'That thing is still around?') {
    this.sweetAlertService.info('The Internet?', dec).then((result) => {});
  }

  openThree(dec: string = 'Something went wrong!') {
    this.sweetAlertService.danger('Oops...', dec).then((result) => {});
  }

  openFour() {
    this.sweetAlertService
      .img(
        'assets/images/gallery-grid/img-grd-gal-4.jpg',
        'Image Title',
        'Some description text'
      )
      .then((result) => {});
  }

  openFive(dec: string = 'You can use bold text, links and other HTML tags') {
    this.sweetAlertService.info1('HTML example', dec).then((result) => {});
  }

  openSix() {
    this.sweetAlertService
      .info2('Do you want to save the changes?')
      .then((result) => {});
  }

  openSeven() {
    this.sweetAlertService
      .animation('Custom animation with Animate.css')
      .then((result) => {});
  }

  openEight(dec: string = 'Event Deleted successfully') {
    this.sweetAlertService.confirm('Success', dec).then((result) => {});
  }

  openNine(dec: string = 'You wont be able to revert this!') {
    this.sweetAlertService.confirm2('Are you sure?', dec).then((result) => {});
  }

  openTen(dec: string = 'You wont be able to revert this!') {
    this.sweetAlertService.confirm3('Are you sure?', dec).then((result) => {});
  }

  open11(dec: string = 'You wont be able to revert this!') {
    this.sweetAlertService
      .confirm4('هل تريد الاستمرار؟', dec)
      .then((result) => {
        console.log(result);
      });
  }

  open12(dec: string = 'You wont be able to revert this!') {
    this.sweetAlertService
      .confirm5('Submit your Github username', dec)
      .then((result) => {
        console.log(result);
      });
  }

  // Method to trigger toast notification
  showSuccessToast() {
    this.sweetAlertService.showToast('success', 'Signed in successfully');
  }

  showAlert(
    icon: 'success' | 'error' | 'warning' | 'info' | 'question',
    title: string
  ) {
    Swal.fire({
      icon: icon,
      title: title,
    });
  }

  async showTextInput() {
    const ipAPI = '//api.ipify.org?format=json';
    const response = await fetch(ipAPI);
    const data = await response.json();
    const inputValue = data.ip;

    const { value: ipAddress } = await Swal.fire({
      title: 'Enter your IP address',
      input: 'text',
      inputValue: inputValue,
      showCancelButton: true,
      inputValidator: (value) => {
        if (value) {
          return ''; // Return an empty string for valid input
        } else {
          return 'This field is required'; // Return an error message for invalid input
        }
      },
    });

    if (ipAddress) {
      Swal.fire(`Your IP address is ` + ipAddress);
    }
  }

  async showEmailInput() {
    const { value: email } = await Swal.fire({
      title: 'Input email address',
      input: 'email',
      inputPlaceholder: 'Enter your email address',
    });

    if (email) {
      Swal.fire(`Entered email: ` + email);
    }
  }

  async showUrlInput() {
    const { value: url } = await Swal.fire({
      input: 'url',
      inputPlaceholder: 'Enter the URL',
    });

    if (url) {
      Swal.fire(`Entered URL: ` + url);
    }
  }

  async showPasswordInput() {
    const { value: password } = await Swal.fire({
      title: 'Enter your password',
      input: 'password',
      inputPlaceholder: 'Enter your password',
      inputAttributes: {
        maxlength: '10', // Ensure these are strings
        autocapitalize: 'off',
        autocorrect: 'off',
      },
    });

    if (password) {
      Swal.fire(`Entered password: ${password}`);
    }
  }

  async showTextareaInput() {
    const { value: text } = await Swal.fire({
      input: 'textarea',
      inputPlaceholder: 'Type your message here...',
      inputAttributes: {
        'aria-label': 'Type your message here',
      },
      showCancelButton: true,
    });

    if (text) {
      Swal.fire(text);
    }
  }

  async showSelectInput() {
    const { value: fruit } = await Swal.fire({
      title: 'Select field validation',
      input: 'select',
      inputOptions: {
        Fruits: {
          apples: 'Apples',
          bananas: 'Bananas',
          grapes: 'Grapes',
          oranges: 'Oranges',
        },
        Vegetables: {
          potato: 'Potato',
          broccoli: 'Broccoli',
          carrot: 'Carrot',
        },
        icecream: 'Ice cream',
      },
      inputPlaceholder: 'Select a fruit',
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value === 'oranges') {
            resolve('');
          } else {
            resolve('You need to select oranges :)');
          }
        });
      },
    });

    if (fruit) {
      Swal.fire(`You selected: ` + fruit);
    }
  }

  async showColorSelection() {
    const { value: color } = await Swal.fire({
      title: 'Select color',
      input: 'radio',
      inputOptions: {
        '#ff0000': 'Red',
        '#00ff00': 'Green',
        '#0000ff': 'Blue',
      },
      inputValidator: (value) => {
        if (!value) {
          return 'You need to choose something!';
        }
        return undefined; // Indicates valid input
      },
    });

    if (color) {
      Swal.fire({
        html: `You selected: ${color}`,
      });
    }
  }

  async showCheckboxInput() {
    const { value: accept } = await Swal.fire({
      title: 'Terms and conditions',
      input: 'checkbox',
      inputValue: 1,
      inputPlaceholder: 'I agree with the terms and conditions',
      confirmButtonText: 'Continue<i class="fa fa-arrow-right"></i>',
      inputValidator: (result) => {
        return !result && 'You need to agree with T&C';
      },
    });

    if (accept) {
      Swal.fire('You agreed with T&C :)');
    }
  }

  async showFileInput() {
    const { value: file } = await Swal.fire({
      title: 'Select image',
      input: 'file',
      inputAttributes: {
        accept: 'image/*',
        'aria-label': 'Upload your profile picture',
      },
    });

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        Swal.fire({
          title: 'Your uploaded picture',
          imageUrl: e.target?.result as string,
          imageAlt: 'The uploaded picture',
        });
      };
      reader.readAsDataURL(file);
    }
  }

  async showRangeInput() {
    await Swal.fire({
      title: 'How old are you?',
      icon: 'question',
      input: 'range',
      inputAttributes: {
        min: '8',
        max: '120',
        step: '1',
      },
      inputValue: 25,
    });
  }

  async showMultipleInputs() {
    const { value: formValues } = await Swal.fire({
      title: 'Multiple inputs',
      html:
        '<input id="swal-input1" class="swal2-input">' +
        '<input id="swal-input2" class="swal2-input">',
      focusConfirm: false,
      preConfirm: () => {
        return [
          (document.getElementById('swal-input1') as HTMLInputElement).value,
          (document.getElementById('swal-input2') as HTMLInputElement).value,
        ];
      },
    });

    if (formValues) {
      Swal.fire(`Entered values: ${formValues.join(', ')}`);
    }
  }
  async showRadioInput(): Promise<void> {
    const inputOptions = new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          '#ff0000': 'Red',
          '#00ff00': 'Green',
          '#0000ff': 'Blue'
        });
      }, 1000);
    });

    const { value: color } = await Swal.fire({
      title: 'Select color',
      input: 'radio',
      inputOptions: await inputOptions,
      inputValidator: (value) => {
        if (!value) {
          return 'You need to choose something!';
        }
        return undefined; // Ensure it returns undefined or a valid value
      }
    });

    if (color) {
      Swal.fire({
        html: `You selected: ${color}`
      });
    }
  }
}
