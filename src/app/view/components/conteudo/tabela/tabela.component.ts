import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Contatos } from 'src/app/models/contatos';
import { ContatoService } from 'src/app/service/contato.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit {

  contato: Contatos[] = [];

  displayedColumns: string[] = [
    "id",
    "nome",
    "cpf",
    "cnpj",
    "email",
    "telefone",
    "endereco"
  ];
  dataSource = new MatTableDataSource<Contatos>(this.contato);

  totalElements: number = 0;
  pageSize = 5;
  pageIndex = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: ContatoService) {}

  ngOnInit(): void {
    this.carregarContatos(this.pageIndex, this.pageSize);
  }

  carregarContatos(page: number, size: number): void {
    this.service.listarTodos(page, size).subscribe(resposta => {
      this.contato = resposta.content;
      this.dataSource = new MatTableDataSource<Contatos>(this.contato);
      this.totalElements = resposta.totalElements;
    });
  }

  onPaginar(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.carregarContatos(this.pageIndex, this.pageSize);
  }
}
