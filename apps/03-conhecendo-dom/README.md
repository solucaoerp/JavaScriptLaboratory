# # Infra (Recomendações)

  - Visual Studio Code: [Clique Aqui](https://code.visualstudio.com/)
    - Extensões recomendadas para o VSCode
      - Live Server
	  - Live Server Preview

# # Entendendo o DOM (Document Object Model)

  - O DOM é formado por elementos diversos
    - **Elemento:** É todo e qualquer componente que aparecer dentro da arvore DOM, conforme exemplo mostrado a abaixo

## # Árvore DOM

  - Principais componentes:
    - **window** (raiz): tudo dentro de um objeto JavaScript está dentro de um objeto chamado **window**
      - *location*: localização do site (URL; Página Atual; Página Anterior)
	  - *document*: documento atual
	    - ```<html>```
		  - ```<head>```
		    - ```<meta>```
			- ```<title>```
			- etc...
		  - ```<body>```
		    - ```<h1>```
			- ```<p>```
			- ```<p>```
			  - ```<strong>```
			- ```<div>```
			- etc...
	  - *history*: armazena o histórico de onde você veio, para onde você vai (facilitando a navegação dentro do site)

## # Manipulando / Navegando pelo DOM

  - Tipos de Navegação (**Selecionando**) - 5 métodos de acesso, são eles:
    - por **Marca**: TAGs
	  - ```getElementsByTagName()```
	- por **ID**: se houver uma propriedade ID para acessar
	  - ```getElementById()```
	- por **Nome**: se houver uma propriedade Name para acessar
	  - ```getElementsByName()```
	- por **Classe**
	  - ```getElementsByClassName()```
	- por **Selector**: CSS
	  - ```querySelector()```

 

