import { Injectable } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js'; // Use the ESM path

@Injectable({
  providedIn: 'root',
})
export class SweetAlertService {
  constructor() {}

  confirm(title: string, text: string): Promise<any> {
    return Swal.fire({
      title: title,
      text: text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#1de9b6',
      cancelButtonColor: '#f44236',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No cancel!',
    });
  }

  success(title: string, text: string): Promise<any> {
    return Swal.fire({
      title: title,
      text: text,
      icon: 'success',
      showCancelButton: false,
      confirmButtonColor: '#1de9b6',
      confirmButtonText: 'Ok',
    });
  }

  custom(title: string): Promise<any> {
    return Swal.fire({
      title: title,
      showCancelButton: false,
      confirmButtonColor: '#1de9b6',
      confirmButtonText: 'Ok',
    });
  }

  danger(title: string, text: string): Promise<any> {
    return Swal.fire({
      title: title,
      text: text,
      icon: 'error',
      showCancelButton: false,
      confirmButtonColor: '#1de9b6',
      confirmButtonText: 'Ok',
    });
  }

  info(title: string, text: string): Promise<any> {
    return Swal.fire({
      title: title,
      text: text,
      icon: 'info',
      showCancelButton: false,
      confirmButtonColor: '#1de9b6',
      confirmButtonText: 'Ok',
    });
  }

  info1(title: string, text: string): Promise<any> {
    return Swal.fire({
      title: title,
      text: text,
      icon: 'info',
      showCancelButton: false,
      confirmButtonColor: '#1de9b6',
      confirmButtonText: 'Great!',
      didOpen: (popup) => {},
    });
  }

  info2(title: string): Promise<any> {
    return Swal.fire({
      title: title,
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#1de9b6',
      confirmButtonText: 'Save',
      cancelButtonColor: '#d33',
      cancelButtonText: "Don't Save",
      showDenyButton: true,
      denyButtonColor: '#f44336',
      denyButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Success!',
          text: 'You clicked Save.',
          icon: 'success',
          confirmButtonColor: '#1de9b6',
          confirmButtonText: 'Ok',
        });
      } else if (result.isDenied) {
        Swal.fire({
          title: 'Cancelled',
          text: 'You clicked Cancel.',
          icon: 'error',
          confirmButtonColor: '#1de9b6',
          confirmButtonText: 'Ok',
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: 'Not Saved',
          text: "You clicked Don't Save.",
          icon: 'warning',
          confirmButtonColor: '#1de9b6',
          confirmButtonText: 'Ok',
        });
      }
    });
  }

  img(imageUrl: string, title: string = '', text: string = ''): Promise<any> {
    return Swal.fire({
      title: title,
      text: text,
      imageUrl: imageUrl,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      showCancelButton: false,
      confirmButtonColor: '#1de9b6',
      confirmButtonText: 'Ok',
    });
  }

  animation(title: string): Promise<any> {
    return Swal.fire({
      title: title,
      showClass: {
        popup: 'animate__animated animate__fadeInDown',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp',
      },
      showCancelButton: false,
      confirmButtonColor: '#1de9b6',
      confirmButtonText: 'Ok',
    });
  }

  confirm2(title: string, text: string): Promise<any> {
    return Swal.fire({
      title: title,
      text: text,
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#1de9b6',
      cancelButtonColor: '#d33',
      showDenyButton: true,
      denyButtonColor: '#f44336',
      denyButtonText: 'Cancel',
    }).then((result) => {
      if (result.isDenied) {
        Swal.fire({
          title: 'Cancelled',
          text: 'You clicked Cancel.',
          icon: 'error',
          confirmButtonColor: '#1de9b6',
          confirmButtonText: 'Ok',
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: 'Not Saved',
          text: "You clicked Don't Save.",
          icon: 'warning',
          confirmButtonColor: '#1de9b6',
          confirmButtonText: 'Ok',
        });
      }
    });
  }

  confirm3(title: string, description: string): Promise<any> {
    let timerInterval: any;
    return Swal.fire({
      title: title,
      html: `I will close in <b></b> milliseconds. <br> ${description}`,
      timer: 2000,
      timerProgressBar: true,
      willOpen: () => {
        Swal.showLoading();
        timerInterval = setInterval(() => {
          const content = Swal.getHtmlContainer();
          if (content) {
            const b = content.querySelector('b');
            if (b) {
              b.textContent = Swal.getTimerLeft()?.toString() ?? '';
            }
          }
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
      showCancelButton: true,
      confirmButtonColor: '#1de9b6',
      confirmButtonText: 'Yes, do it!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('Alert was closed by the timer');
      } else if (result.isConfirmed) {
        console.log('Confirmed by user');
      }
    });
  }

  confirm4(title: string, description: string): Promise<any> {
    return Swal.fire({
      title: title,
      text: description,
      icon: 'question',
      iconHtml: '؟',
      confirmButtonText: 'نعم',
      cancelButtonText: 'لا',
      showCancelButton: true,
      showCloseButton: true,
      customClass: {
        popup: 'rtl-sweetalert',
      },
    });
  }

  confirm5(title: string, description: string): Promise<any> {
    return Swal.fire({
      title: title,
      text: description,
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off',
      },
      showCancelButton: true,
      confirmButtonText: 'Look up',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        return fetch(`https://api.github.com/users/${login}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response.json();
          })
          .catch((error) => {
            Swal.showValidationMessage(`Request failed: ${error}`);
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url,
        });
      }
    });
  }

  showToast(icon: 'success' | 'error' | 'warning' | 'info', title: string) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: icon,
      title: title,
    });
  }

  showToastWithout(title: string, backgroundColor: string, textColor: string) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);

        const toastElement = toast.querySelector('.swal2-toast') as HTMLElement; // Cast to HTMLElement
        if (toastElement) {
          toastElement.style.backgroundColor = backgroundColor;
          toastElement.style.color = textColor;
        }
      },
    });

    Toast.fire({
      title: title,
    });
  }
}
