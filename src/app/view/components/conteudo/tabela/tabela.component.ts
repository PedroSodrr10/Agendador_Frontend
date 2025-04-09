import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
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
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: ContatoService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.listarTodos().subscribe((resposta) => {
      this.contato = resposta.content; // <-- aqui!
      this.dataSource = new MatTableDataSource<Contatos>(this.contato);
      this.dataSource.paginator = this.paginator;
    });
  }



}
