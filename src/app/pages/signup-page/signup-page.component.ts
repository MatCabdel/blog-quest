import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { SignupFormComponent } from '../../components/signup-form/signup-form.component';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [HeaderComponent, SignupFormComponent],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.scss'
})
export class SignupPageComponent {

}
