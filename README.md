<img src="https://github.com/camilaseasky/getprice/blob/master/imgs/main.jpg" title="getPrice" alt="GetPrice" width="400px">



# getPrice

> Testando usar o sequelize com postgres!


### Este repositório contém o código desenvolvido para o back-end da aplicação com o objetivo de aprender a usar o sequelize
sem typescript para o acesso e gravação de dados no postgres

##  :sweat_smile: A ideia da aplicação:
  Para fins de estudo, foram criadas 3 entities: User, Solicitation e Product.
  Uma Solicitation pertence à um User e um User pode criar várias Solicitations.
  Uma Solicitation pode ter vários Product e um Product pode estar em várias Solicitations.
  
  Este projeto utiliza as seguintes tecnologias:
* Nodejs
* Express
* Sequelize
* Postgres
  

 :heart_eyes::heart_eyes::heart_eyes::heart_eyes::heart_eyes::heart_eyes:
 
 ### As funcionalidades da API:
 1. Cadastrar user; 
 2. Criar solicitação;
 3. Listar solicitações;
 4. Incluir produto em uma solicitação (se o produto já existir na tabela products, ele será apenas vinculado com a solicitation, senão
 também será criado na tabela products.
 5. Visualizar solicitação e a lista de produtos desta.
 6. Excluir produto de uma solicitação.
  
 Se quiser baixar o json do Insominia para testar as rotas da aplicação clique <a href="https://github.com/camilaseasky/getprice/blob/master/Insomnia_2020-06-10.json">aqui</a>!
 
 ## :star: O aprendizado:
 Consegui realizar as operações no postgres para atender as funcionalidades da aplicação, usando o SEQUELIZE. Ele é bem diferente do 
 typeorm, mas é muito interessante.
 Aprendi muito!
 
 O que achei mais interessante, foi a criação de métodos automáticos nas entities quando criamos uma associação entre estas. Através
 destes métodos conseguimos facilmente incluir novos registros, como foi feito para os produtos da solicitação:
 
 ```javascript
    // busca o produto pela descrição
    const [product] = await Product.findOrCreate({
      where: { description },
    });

    //através do método addProduct, o vínculo entre o produto e a solicitação
    await solicitation.addProduct(product);
```

   
 ## Status do projeto:    :heavy_check_mark: Concluído
 Enfim, considero este projeto concluído em relação aos objetivos para os quais ele foi criado!
