
  console.clear();
      //mensagens iniciais do jogo
  console.log("ola, Antes de começamos, você só pode responder (sim ou não).Descubra se você é o assasino, seu pai está desaparecido e se chama carlos ");
  console.log("obs; escreva igual o exemplo acima, com letras somente minusculas");
  const prompt = require('prompt-sync')();

  let inicial = prompt('Pronto pra começar?');
  console.log(" ")
  console.log('uhu um '+ (inicial) );
  console.log(" ");
  console.log("você tem uma mensagem");
  console.log(" ");
  console.log("Oi eu sou a policial Max e estou investigando a morte do Sr Carlos e preciso fazer algumas perguntas");
  console.log(" ");

           //perguntas do jogo

   pergunta1 = prompt('os vizinhos falaram que você tinha um péssimo relacionamento com seu pai,isso é verdade?');
   console.log(" ")
    pergunta2 = prompt('Você visitou seu pai recentemente?');
   console.log(" ")
    pergunta3 = prompt('Testemunhas disseram que seu pai iria tirar você do testamento. Você sabia disso?');
   console.log(" ")
    pergunta4 = prompt('Você foi na casa de praia recentemete?')
   console.log(" ")
    pergunta5 = prompt('você acha que me engana?')

    //esse codigo de pergunta abaixo deu problema se puder me esplicar agradeço
    //pergunta5 = prompt('As última noticias do seu pai foi que ele iria na casa de praia, tems imagens de segurança mostrando ele indo, você sabia disso?')


   let resultado = 0 
   if(pergunta1=='sim'){
     }  resultado++
   
   if(pergunta2=='sim'){
      resultado++
   }
   if(pergunta3=='sim'){
     resultado++
   }
   if(pergunta4=='sim'){
        resultado++
   }
    if(pergunta5=='sim'){
       resultado++
    }
   
   resultado

   console.log('')
 if (resultado>=4){
    console.log('voce e culpado.');
} else if (resultado == 3 ){
    console.log('voce e suspeito.');
} else {
    console.log('voce e inocente.');
}

          // essa pergunta foi arquivada por que o teste so pede uma

  // pergunta6 = prompt('Seu pai foi encontrado sem vida na casa de praia. Na mesma noite que ele iria assinar os papeis,você sabia disso?')
  // console.log(" ")
                             //observação
     //todos os teste aqui em baixo falhharam mas estão em comentario pra que no proximo teste se eu errar consiga indentificar
            //Resultado
  //const resposta = (pergunta1 + pergunta2 + pergunta3 + pergunta4 + pergunta5 + pergunta6 )
 


// Esse teste tinha falhado pois vc tava somando o obvio e ele por sim estava atrapalhando o resultado
// resposta = ( pergunta1 + pergnta2 + pergunta3 +pergunta4 + pergunta5)
//if(resultado>3);{
   // console.log("voce e culpado")
//}
//else if(resultado<0);{
    //console.log("voce e suspeito")
//}

//else if(resultado==3);{
 // console.log("voce e suspeito")



       //teste esse tambem tinha falhado pelo mesmo motivo de cima
//if(pergunta6=='sim'){
   // resultado++
//}
//let soma = pergunta1 + pergunta2 + pergunta3 + pergunta4 + pergunta5 

//if(soma=>4){
  //  console.log('Você é culpado');
//}
 // let soma1 = pergunta1 + pergunta2 + pergunta3 + pergunta4 + pergunta5 

  //if(sim=3){

  //  console.log("você é um suspeito");
 //}
 
// let soma2 = pergunta1 + pergunta2 + pergunta3 + pergunta4 + pergunta5 
 //if(soma=>0<2){
    //console.log("você é inocente" );
 //}

     
 
