export interface Endereco {
  cep: string;
  logradouro: string;
  cidade: string;
  estado: string;
  numero: string;
  complemento?: string;
}

export interface Contatos {
  id: number;
  nome: string;
  cpf: string;
  cnpj?: string;
  email: string;
  telefone: string;
  tipoPessoa: string;
  endereco: Endereco;
}
