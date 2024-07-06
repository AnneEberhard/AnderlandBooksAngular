import { Component, ViewChild, ElementRef, AfterViewInit, inject } from '@angular/core';
import { PageService } from '../shared/services/page-service/page.service';
import { TranslateService } from '@ngx-translate/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit{

  constructor(private pageService: PageService, public translate: TranslateService) {  }

  private readonly viewport = inject(ViewportScroller)

  @ViewChild('contactForm') contactFormElement!: ElementRef;
  @ViewChild('nameField') nameFieldElement!: ElementRef;
  @ViewChild('emailField') emailFieldElement!: ElementRef;
  @ViewChild('messageField') messageFieldElement!: ElementRef;
  @ViewChild('sendButton') sendButtonElement!: ElementRef;
  @ViewChild('privacyContainerBox') privacyContainerBoxElement!: ElementRef;
  @ViewChild('privacyAlert') privacyAlertElement!: ElementRef;
  @ViewChild('nameAlert') nameAlertElement!: ElementRef;
  @ViewChild('emailAlert') emailAlertElement!: ElementRef;
  @ViewChild('messageAlert') messageAlertElement!: ElementRef;

  nameField: any;
  emailField: any;
  messageField: any;
  sendButton: any;
  privacyContainerBox: any;
  privacyAlert: any;
  nameAlert: any;
  emailAlert: any;
  messageAlert: any;

  sendMessage = 'Send message'

  privacyChecked: boolean = false;
  showPrivacyAlert: boolean = false;
  showNameAlert: boolean = false;
  showEmailAlert: boolean = false;
  showMessageAlert: boolean = false;

/**
 * Lifecycle hook that is called after the component's view has been fully initialized.
 * Assigns HTML elements to their respective class properties.
 */
  ngAfterViewInit() {
    this.assignFields();
}

/**
 * Assigns HTML elements to their respective class properties using ViewChild references.
 */
assignFields() {
  this.nameField = this.nameFieldElement?.nativeElement;
  this.emailField = this.emailFieldElement?.nativeElement;
  this.messageField = this.messageFieldElement?.nativeElement;
  this.sendButton = this.sendButtonElement?.nativeElement;
  this.privacyContainerBox = this.privacyContainerBoxElement?.nativeElement;
  this.privacyAlert = this.privacyAlertElement?.nativeElement;
  this.nameAlert = this.nameAlertElement?.nativeElement;
  this.emailAlert = this.emailAlertElement?.nativeElement;
  this.messageAlert = this.messageAlertElement?.nativeElement;
}

/**
 * Handles the mail sending process.
 * Prevents the default form submission, validates the fields, collects form data,
 * sends an HTTP POST request, and handles the response.
 * 
 * @param event - The event object for the form submission.
 */
async sendMail(event: Event) {
  event.preventDefault();
  if (this.fieldsFilled()) {
      const data = this.collectdata();
      this.disableFields();
      this.sendAnimation();
      try {
          const response = await fetch("send_mail.php", {
              method: "POST",
              body: data
          });
          if (response.ok) {
              this.messageSend();
              this.clearFields();
              this.enableFields();
          } else {
              console.error(`HTTP error! status: ${response.status}`);
              this.enableFields();
              alert('Fehler beim Senden');
          }
      } catch (error) {
          console.error('Error:', error);
      }
  }
}

/**
 * Collects form data into a FormData object for sending via HTTP POST.
 * 
 * @returns A FormData object containing the collected form data.
 */
collectdata() {
  const data = new FormData();
  data.append('name', this.nameField.value);
  data.append('email', this.emailField.value);
  data.append('message', this.messageField.value);
  data.append('newsletter', '0');
  return data;
}

/**
 * Disables the input fields and send button to prevent user interaction during form submission.
 */
disableFields() {
  this.nameField.disabled = true;
  this.emailField.disabled = true;
  this.messageField.disabled = true;
  this.sendButton.disabled = true;
}

/**
 * Enables the input fields and send button after form submission is complete.
 */
enableFields() {
  this.nameField.disabled = false;
  this.emailField.disabled = false;
  this.messageField.disabled = false;
  this.sendButton.disabled = false;
}

/**
 * Clears the values of the input fields and removes the 'filled' class from them.
 */
clearFields() {
  this.nameField.value = '';
  this.emailField.value = '';
  this.messageField.value = '';
  this.nameField.classList.remove('filled');
  this.emailField.classList.remove('filled');
  this.messageField.classList.remove('filled');
}

/**
 * Sets the message to display while sending the form.
 */
sendAnimation() {
  this.sendMessage = this.translate.instant('sending'); 
}

/**
 * Sets the message to display after the message is successfully sent,
 * and then resets it after a delay.
 */
messageSend() {
  this.sendMessage = this.translate.instant('message Sent'); 
  setTimeout(() => {
    this.sendMessage = this.translate.instant('send Message');
  }, 2000);
}

/**
 * Checks the status of the privacy checkbox.
 * Updates UI elements accordingly (checkmark, button state, alerts).
 */
checkPrivacy() {
  if (!this.privacyChecked) {
      this.privacyContainerBox.innerHTML = '<img src="assets/img/icon/checkmarkPetrol.png" class="checkmark">';
      this.sendButton.disabled = false;
      this.sendButton.classList.add('hoverButton');
      this.privacyChecked = true;
      this.showPrivacyAlert = false;
  } else {
      this.privacyContainerBox.innerHTML = '';
      this.sendButton.disabled = true;
      this.sendButton.classList.remove('hoverButton');
      this.privacyChecked = false;
      this.showPrivacyAlert = true;
  }
}

/**
 * Checks if all required fields are filled.
 * 
 * @returns true if all fields are filled, false otherwise.
 */
fieldsFilled() {
  let nameFieldCheck = this.checkFieldsFilled(this.nameField, 'name');
  let emailFieldCheck = this.checkFieldsFilled(this.emailField, 'email');
  let messageFieldCheck = this.checkFieldsFilled(this.messageField, 'message');
  if (nameFieldCheck && emailFieldCheck && messageFieldCheck) {
      return true;
  } else {
      return false;
  }
}

/**
 * Checks if a specific field is filled.
 * Adds or removes CSS classes for alert styling based on field status.
 * 
 * @param field The field element to check.
 * @param id The identifier for the field (e.g., 'name', 'email', 'message').
 * @returns true if the field is filled, false otherwise.
 */
checkFieldsFilled(field: any, id: string) {
  if (field) {
      if (field.value.trim() !== '') {
          field.classList.remove('fieldAlert');
          this.hideAlert(id);
          return true;
      } else {
          field.classList.add('fieldAlert');
          this.showAlert(id);
          return false;
      }
  } else {
      return false
  }
}

/**
 * Checks input fields and updates their visual state based on user interaction.
 * 
 * @param event The input event triggered by user interaction.
 */
checkInputFields(event: Event) {
  const target = event.target as HTMLInputElement;
  const id = target.name.toString();
  if (target.name === 'email') {
      if (this.checkEmail()) {
          target.classList.add('filled');
          this.hideAlert(id);
      };
  } else {
      target.classList.add('filled');
      this.hideAlert(id);
  }
}

/**
 * Checks if the current email field value is valid.
 * 
 * @returns true if the email format is valid, false otherwise.
 */
checkEmail() {
  const emailValue = this.emailField.value;
  const atIndex = emailValue.indexOf('@');
  if (atIndex === -1) {
      return false; 
  }
  const beforeAt = emailValue.substring(0, atIndex);
  const afterAt = emailValue.substring(atIndex + 1);
  const regex = /^[a-zA-Z]{2,}$/;   
  if (regex.test(beforeAt) && regex.test(afterAt)) {
      return true; 
  } else {
      return false; 
  }
}

/**
 * Shows an alert message based on the provided identifier.
 * 
 * @param id The identifier ('name', 'email', 'message') to determine which alert to show.
 */
showAlert(id: string) {
  if (id == 'name') {
      this.showNameAlert = true;
  }
  if (id == 'email') {
      this.showEmailAlert = true;
  }
  if (id == 'message') {
      this.showMessageAlert = true;
  }
}

/**
 * Hides an alert message based on the provided identifier.
 * 
 * @param id The identifier ('name', 'email', 'message') to determine which alert to hide.
 */
hideAlert(id: string) {
  if (id == 'name') {
      this.showNameAlert = false;
  }
  if (id == 'email') {
      this.showEmailAlert = false;
  }
  if (id == 'message') {
      this.showMessageAlert = false;
  }
}
}
