import { ActivatedRoute, RouterLink } from '@angular/router';
import { SecondaryButtonComponent } from './../../_components/secondary-button/secondary-button.component';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Certificado } from '../../interfaces/certificado';
import { CertificadoService } from '../../_services/certificado.service';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-certificado',
  imports: [SecondaryButtonComponent, RouterLink],
  templateUrl: './certificado.component.html',
  styleUrl: './certificado.component.css',
})
export class CertificadoComponent implements OnInit {
  id: string | null = null;
  certificado: Certificado | undefined;

  @ViewChild('certificadoContainer') certificadoElement!: ElementRef;

  constructor(
    private certificadoService: CertificadoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.certificado = this.certificadoService.certificados.find(
        (item) => item.id == this.id
      );
    });
  }

  downloadCertificado() {
    if (this.certificado != undefined) {
      html2canvas(this.certificadoElement.nativeElement, { scale: 2 }).then(
        (canvas) => {
          const link = document.createElement('a');
          const url = `certificado_${this.certificado?.nome.replaceAll(
            ' ',
            '_'
          )}_${this.certificado?.dataEmissao}`;

          link.href = canvas.toDataURL('image/png');
          link.download = url.toLowerCase();
          link.click();
        }
      );
    }
  }
}
