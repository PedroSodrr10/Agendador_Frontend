import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContatoService } from 'src/app/service/contato.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})

export class CadastroComponent implements OnInit {
  form!: FormGroup;

  @Output() salvo = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder,
    private service: ContatoService,
    private snack: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      cpf: [''],
      cnpj: [''],
      email: ['', [Validators.required, Validators.email]],
      telefone: [''],
      tipoPessoa: ['', Validators.required],
      endereco: this.fb.group({
        cep: ['', Validators.required],
        logradouro: ['', Validators.required],
        cidade: ['', Validators.required],
        estado: ['', Validators.required],
        numero: ['', Validators.required],
        complemento: ['']
      })
    });

  }

  salvar(): void {
    console.log('Form:', this.form.value);
    console.log('É válido?', this.form.valid);

    if (this.form.invalid) {
      this.snack.open('Preencha todos os campos obrigatórios', 'OK', { duration: 3000 });
      return;
    }

    this.service.salvar(this.form.value).subscribe(() => {
      this.snack.open('Contato salvo com sucesso!', 'OK', { duration: 3000 });
      this.form.reset();
      this.salvo.emit();
    });
  }
}
