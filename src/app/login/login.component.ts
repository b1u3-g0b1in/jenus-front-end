import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  togglePanel(isSignUp: boolean) {
    const container = document.getElementById('container');
    if (isSignUp) {
      container?.classList.add('right-panel-active');
    } else {
      container?.classList.remove('right-panel-active');
    }
  }
  email: string = '';
  username: string = '';
  password: string = '';

  generateUsername(): void {
    if (this.email) {
      const emailParts = this.email.split('@');
      this.username = emailParts[0];
    } else {
      alert('Please enter your email address first.');
    }
  }
}
