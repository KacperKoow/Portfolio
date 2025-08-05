import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FontAwesomeModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faLinkedin = faLinkedin;
  faPaperPlane = faPaperPlane;

  onSubmit(formData: NgForm) {
    if (formData.form.invalid) {
      alert('Please enter valid information in all required fields.');
      return;
    }
    emailjs.init('PU3i1gbVeoMgsd_Iv');
    emailjs.send('service_ppon2po', 'template_nq7dvwf', {
      name: formData.value.name,
      email: formData.value.email,
      message: formData.value.message,
    });
    alert('Your message has been sent successfully.');
    formData.reset();
  }
}
