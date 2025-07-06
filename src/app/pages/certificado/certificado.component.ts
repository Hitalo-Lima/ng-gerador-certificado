import { RouterLink } from '@angular/router';
import { SecondaryButtonComponent } from './../../_components/secondary-button/secondary-button.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-certificado',
  imports: [SecondaryButtonComponent, RouterLink],
  templateUrl: './certificado.component.html',
  styleUrl: './certificado.component.css',
})
export class CertificadoComponent {}
