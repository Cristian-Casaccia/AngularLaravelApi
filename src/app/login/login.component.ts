import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login({ username: this.username, password: this.password }).subscribe({
      next: (response) => {
        console.log(response);
        console.log(response.data.token);

        localStorage.setItem('token', response.data.token);
        this.router.navigate(['/table']);
      },
      error: (err) => {
        this.errorMessage = 'Login fallito. Verifica le credenziali.';
      }
    });
  }
}
