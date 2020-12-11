(function() {
  /*
  Envolva todo o conteúdo desse arquivo em uma IIFE.
  */

  /*
  Crie um objeto chamado `person`, com as propriedades:
      `name`: String
      `lastname`: String
      `age`: Number
  Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
  de valor para cada propriedade.
  */
  const person = {
    name: 'Julia',
    lastname: 'Ramos',
    age: 25
  }
  console.log( 'Propriedades de "person":' );

  /*
  Mostre no console, em um array, todas as propriedades do objeto acima.
  Não use nenhuma estrutura de repetição, nem crie o array manualmente.
  */
  console.log(Object.keys(person));

  /*
  Crie um array vazio chamado `books`.
  */
  const books = [];

  /*
  Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
  seguintes propriedades:
  `name`: String
  `pages`: Number
  */
  books.push({ name: 'O poder do hábito', pages: '562' })
  books.push({ name: 'Mulheres Que Correm Com Os Lobos', pages: '520' })
  books.push({ name: 'As coisas que você só vê quando desacelera', pages: '256' })


  /*
  Mostre no console todos os livros.
  */
  console.log( '\nLista de livros:' );
  console.log(books);

  /*
  Remova o último livro, e mostre-o no console.
  */
  console.log( '\nLivro que está sendo removido:' );
  console.log(books.pop())

  /*
  Mostre no console os livros restantes.
  */
  console.log( '\nAgora sobraram somente os livros:' );
  console.log(books);

  /*
  Converta os objetos que ficaram em `books` para strings.
  */
  console.log( '\nLivros em formato string:' );
  books = JSON.stringify(books);

  /*
  Mostre os livros nesse formato no console:
  */
  console.log(books);

  /*
  Converta os livros novamente para objeto.
  */
  console.log( '\nAgora os livros são objetos novamente:' );
  books = JSON.parse(books);

  /*
  Mostre no console todas as propriedades e valores de todos os livros,
  no formato abaixo:
      "[PROPRIEDADE]: [VALOR]"
  */
  for ( let i = 0; i < Object.keys(books).length; i++ ) {
    console.log(books[i]);
    //console.log(books[i].name, books[i].pages)
  }

  /*
  Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
  seu nome. Adicione seu nome completo no array.
  */
  // ?
  console.log( '\nMeu nome é:' );

  /*
  Juntando todos os itens do array, mostre no console seu nome.
  */
  // ?

  console.log( '\nMeu nome invertido é:' );

  /*
  Ainda usando o objeto acima, mostre no console seu nome invertido.
  */
  // ?

  console.log( '\nAgora em ordem alfabética:' );
  /*
  Mostre todos os itens do array acima, odenados alfabéticamente.
  */
  // ?
})();
