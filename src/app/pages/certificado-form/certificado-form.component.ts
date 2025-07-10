import { Component } from '@angular/core';
import { SecondaryButtonComponent } from '../../_components/secondary-button/secondary-button.component';
import { PrimaryButtonComponent } from '../../_components/primary-button/primary-button.component';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { Certificado } from '../../interfaces/certificado';

@Component({
  selector: 'app-certificado-form',
  imports: [
    SecondaryButtonComponent,
    PrimaryButtonComponent,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './certificado-form.component.html',
  styleUrl: './certificado-form.component.css',
})
export class CertificadoFormComponent {
  certificado: Certificado = {
    atividades: [],
    nome: '',
  };

  atividade: string = '';

  campoInvalido(control: NgModel) {
    return control.invalid && control.touched;
  }

  formValido(): boolean {
    return (
      this.certificado.atividades.length > 0 && this.certificado.nome.length > 0
    );
  }

  adicionarAtividade(inputAtividade: HTMLInputElement) {
    this.certificado.atividades.push(this.atividade);
    this.atividade = '';
    inputAtividade.focus();
  }

  excluirAtividade(index: number) {
    this.certificado.atividades.splice(index, 1);
  }

  submit() {
    if (!this.formValido()) {
      return;
    }
    console.log(this.certificado);
  }
}
