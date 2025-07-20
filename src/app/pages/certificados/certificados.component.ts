import { CertificadoService } from './../../_services/certificado.service';
import { Component, OnInit } from '@angular/core';

import { ItemCertificadoComponent } from '../../_components/item-certificado/item-certificado.component';
import { SecondaryButtonComponent } from '../../_components/secondary-button/secondary-button.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Certificado } from '../../interfaces/certificado';

@Component({
  selector: 'app-certificados',
  imports: [ItemCertificadoComponent, SecondaryButtonComponent, RouterLink],
  templateUrl: './certificados.component.html',
  styleUrl: './certificados.component.css',
})
export class CertificadosComponent implements OnInit {
  id: string | null = null;
  certificado: Certificado | undefined;
  certificados: Certificado[] = [];

  constructor(
    private certificadoService: CertificadoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.certificados = this.certificadoService.certificados;

    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.certificado = this.certificadoService.certificados.find(
        (item) => item.id == this.id
      );
      console.log(this.certificado);
    });
  }
}
