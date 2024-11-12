import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SignupFormComponent } from '../signup-form/signup-form.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  private router: Router = inject(Router);

  navigateToSignUpPage(): void {
    this.router.navigate(['/signup'])
  }
}
