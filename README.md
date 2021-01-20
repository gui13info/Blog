# Blog

### Montar um blog desenvolvido em ReactJS para web baseado nos dados do JSON

## Iniciando o projeto

### :wrench: Como utilizar (api)

Dentro da pasta api está o arquivo etapa2blog.json que foi 
disponilizado. Os dados JSON estão sendo usados com JSON 
SERVER para simular uma API. Caso não tenha o JSON SERVER 
instalado, digite no terminal:
```sh
npm install -g json-server
``` 

É de extrema importância ter o JSON SERVER instalado, pois é 
com ele que será feito o uso dos dados dentro de etapa2blog.
json.

1. Clone esse repositório:
```sh
https://github.com/gui13info/Blog
```
2. Após instalar o JSON SERVER entre na pasta api:
```sh
cd api
```

3. Abra o projeto no seu editor de texto.

4. Digite no seu terminal:
```sh
yarn start / npm start
```

5. Se tudo deu certo, os endpoints serão mostrados no terminal.

### :wrench: Como Utilizar (front)

Após ter clonado o repositório e ter feito os passos da api:

1. Entre na pasta front:
```sh
cd front
```

2. Abra o projeto no seu editor de texto:

3. No seu terminal, para instalar os pacotes necessários, digite:
```sh
yarn install
```

4. Após o passo 3, digite no seu terminal:
```sh
yarn start
```

5. Tudo ok! Caso o projeto não seja aberto automaticamente no seu navegador, coloque o seguite endereço no navegador:
```sh
http://localhost:3000
``` 

## Dificuldades no projeto
```sh
De início tive dificuldade para mostrar os posts mais 
recentes, mas consegui resolver usando o sort. Também tive 
dificuldades em colocar a quantidade de curtidas na listagem 
dos posts, por isso coloquei a quantidade nos detalhes da 
postagem e acabei sem conseguir implementar a quantidade na 
listagem da página principal.
```