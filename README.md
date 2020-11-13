# JavaScript Laboratory

  - Fontes de pesquisa:
    - Curso em Vídeo: [Veja Aqui](https://www.youtube.com/playlist?list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1)
    - MDN Web docs (Mozilla):
	  - Home: [Veja Aqui](https://developer.mozilla.org/pt-BR/)
	  - HTML: [Veja Aqui](https://developer.mozilla.org/pt-BR/docs/Glossario/HTML) 
	  - CSS: [Veja Aqui](https://developer.mozilla.org/pt-BR/docs/Glossario/CSS)
	  - JavaScript: [Veja Aqui](https://developer.mozilla.org/pt-BR/docs/Glossario/JavaScript) 
    - ECMA International:
	  - Home: [Veja Aqui](http://ecma-international.org/publications/standards/Standard.htm)
	  - Standard ECMA-262: [Veja Aqui](http://ecma-international.org/publications/standards/Ecma-262-arch.htm)
	    - Edições mais populares: **5.1 edition** e **6th**
		  - 5.1: [Veja Aqui](http://ecma-international.org/ecma-262/5.1/index.html)
		  - 6th: [Veja Aqui](http://ecma-international.org/ecma-262/6.0/index.html)
	- Livros:
	  - JavaScript: O Guia Definitivo (Autor: David Flanagem): [Veja Aqui](https://www.amazon.com.br/JavaScript-Guia-Definitivo-David-Flanagan/dp/856583719X/ref=sr_1_1?adgrpid=1136895682082976&dchild=1&hvadid=71056066549249&hvbmt=be&hvdev=c&hvlocphy=668&hvnetw=s&hvqmt=e&hvtargid=kwd-71056498082298%3Aloc-20&hydadcr=5657_11235229&keywords=javascript+guia+definitivo&qid=1605209043&sr=8-1&tag=msndesktopsta-20)
	  - JavaScript - Guia do Programador (Maurício Samy Silva): [Veja Aqui](https://www.amazon.com.br/JavaScript-Programador-completo-funcionalidades-linguagem-ebook/dp/B088SLKN48/ref=asc_df_B088SLKN48/?tag=googleshopp00-20&linkCode=df0&hvadid=379795277213&hvpos=&hvnetw=g&hvrand=10335191552235157669&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001538&hvtargid=pla-935381946194&psc=1)

# Resumo dos Recursos mais utilizados

  - Comandos Diversos:
    - ```window.alert();```
	- ```window.confirm();```
	- ```window.prompt();```
  - Fonte: [Veja Aqui](https://youtu.be/OmmJBfcMJA8?list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1)
	
  - Ver sobre o uso do comando ```typeof``` no **JavaScript**
  - Boas práticas para a definição das variáveis: [Veja Aqui](https://youtu.be/Vbabsye7mWo?list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1)

# Comentários
  
  - Em HTML: ```<!-- isso é um comentário em HTML -->```
  - Em CSS: ```/* isso é um comentário em CSS */```
  - Em JavaScript
    - Simples em Linha: ```//```
    - Em Bloco: ```/* */```
  
# Variáveis

  - Verificar diferenças entre: **var** e **let** nas declarações de variáveis

# Tipos de Dados e TypeCast

## TypeCast

  - String para Inteiros: **Number.parseInt(n)**
  - String para Flutuantes: **Number.parseFloat(n)**
  - String para Números(Inteiros/Flutuantes): **Number(n)**
    - O próprio compilador decide qual tipo numérico deve usar, conforme os valores informados.
  - Número para String: **String(n)**
  - Número para String: **n.toString()**

## Strings

  - Formatação de Strings:
    - **Concatenção** usando o símbolo de mais: **+** 
	- Usando Template Strings: **Placeholder**
      - Entre **Apóstrofe**: ``` ${s} ```
        - Exemplo: ``` `O aluno ${nome} com ${idade} anos, tirou a nota ${nota}` ```
		  - Onde:
		    - ${nome}: entra o valor armazenado na variável **nome**
			- ${idade}: entra o valor armazenado na variável **idade**
			- ${nota}: entra o valor armazenado na variável **nota**
  - Tamanho de uma String: **s.length** 	
  - Conversão de String para MAIÚSCULA: **s.toUpperCase()** 	
  - Conversão de String para minúscula: **s.toLowerCase()** 	
	
## Formatação de Números

  - Pontos Flutuantes (Float): ```var n1 = 1543.5```
    - Duas casas decimais: **n1.toFixed(2)**
    - Trocar o **Ponto** por **Vírgula**, fica: **n1.toFixed(2).replace('.',',')**
	- Usando o formato **pt-BR** de formatação de valores: **n1.toLocaleString('pt-BR',{style:'currency', currency: 'BRL'})**
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	