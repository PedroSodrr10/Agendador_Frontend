import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabelaComponent } from './view/components/conteudo/tabela/tabela.component';

const routes: Routes = [
  {
    path: 'contatos',
     component: TabelaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
