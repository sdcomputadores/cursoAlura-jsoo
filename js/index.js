class Cliente{
  nome;
  cpf;
}
class contaCorrente {
  agencia;
  saldo;

  sacar(valor){
    if(this.saldo >= valor){
      this.saldo -= valor
    }
    return valor
  }
  depoistar(valor){
    if(valor >0 ){
      this.saldo += valor
    }
    return valor
  }
}

const cliente1 =  new Cliente();

cliente1.nome = 'Ricardo';
 cliente1.cpf = 11223243117;
 cliente1.agencia = 3342    ;
 cliente1.saldo = 100;





contaCorrenteRicardo.sacar(50)


