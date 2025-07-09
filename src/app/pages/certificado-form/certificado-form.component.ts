import { Component } from '@angular/core';
import { SecondaryButtonComponent } from '../../_components/secondary-button/secondary-button.component';
import { PrimaryButtonComponent } from '../../_components/primary-button/primary-button.component';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

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
  nome: string = '';
  atividade: string = '';
  atividades: string[] = [];

  campoInvalido(control: NgModel) {
    return control.invalid && control.touched;
  }

  formValido(): boolean {
    return this.atividades.length > 0 && this.nome.length > 0;
  }

  adicionarAtividade(inputAtividade: HTMLInputElement) {
    this.atividades.push(this.atividade);
    this.atividade = '';
    inputAtividade.focus();
  }

  excluirAtividade(index: number) {
    this.atividades.splice(index, 1);
  }
}
