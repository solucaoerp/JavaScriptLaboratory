# Definição dos Arquivos

  - Abordagem do Arquivo: **app01.html**
    - Definição da estrutura base do **HTML**
	- Definição da estrutura base da chamada ao **JavaScript**
	- Exemplo de comandos JavaScript:
	  - ```window.alert();```
	  - ```window.confirm();```
	  - ```window.prompt();```
	- Fonte: [Clique Aqui](https://youtu.be/OmmJBfcMJA8?list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1)
	
  - Abordagem do Arquivo: **app02.html**
    - Definição de **comentários simples**
	- Definição de **bloco de comentários**
	- Variáveis de Tipos Primitivos
	- Uso do comando ```typeof``` no **JavaScript**
	- Boas práticas para a definição das variáveis
	- Fonte: [Clique Aqui](https://youtu.be/Vbabsye7mWo?list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1)

# Comentários
  
  - Em HTML: ```<!-- isso é um comentário em HTML -->```
  - Em CSS: ```/* isso é um comentário em CSS */```
  - Em JavaScript
    - Simples em Linha: ```//```
    - Em Bloco: ```/* */```
  
# Declaração de Variáveis

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

# # Operadores

  - **IMPORTANTE 01!** Se houver os três tipos de operadores numa expressão, a análise de precedência ocorre da seguinte forma
    - 1º Resolve os ```Operadores Aritméticos``` (**ATENÇÃO** as ordens de precedência aqui)
	- 2º Resolve os ```Operadores Relacionais``` (não tem ordem de precedência, analisfaz-se da esquerda para a direita)
	- 3º Resolve os ```Operadores Lógicos``` ((**ATENÇÃO** as ordens de precedência aqui. Explicação abaixo!)
	
  - **IMPORTANTE 02!** Se numa mesma expressão houver os operadores lógicos ```!```, ```&&``` e ```||```, a análise de precedência ocorre da seguinte forma
    - 1º Resolve o ```!```
	- 2º Resolve o ```&&```
	- 3º Resolve o ```||```

## # Aritméticos

  - Adição: ```+```
  - Subtração: ```-```
  - Multiplicação: ```*```
  - Divisão: ```/```
  - Resto da Divisão Inteira (Símbolo de Porcentagem): ```%```
  - Potência: ```**``` - Exemplo (5 elevado ao quadrado): ```5²```
  - **Órdem de Precedência no Cálculo**
    - Parêntese: ```()```
	- Potência: ```**```
	- Multiplicação; Divisão; Resto da Divisão: ```* / %``` (se ambos estiverem na mesma operação, considere da esquerda para direita)
	- Adição e Subtração: ```+ -```

## # Atribuição

  - **Simples**
    - **Exemplo 01:** ```var a = 5 + 3```         (Resultado: **8**)
	- **Exemplo 02:** ```var b = a % 3```         (Resultado: **3**)
	- **Exemplo 03:** ```var c = 5 * b ** 2```    (Resultado: **45**)
	- **Exemplo 04:** ```var d = 10 - a / 2```    (Resultado: **6**)
	- **Exemplo 05:** ```var e = 6 * 2 / b```     (Resultado: **2**)
	- **Exemplo 06:** ```var f = b % e + 4 / e``` (Resultado: **3**)
	
  - **Auto-atribuições**
    - **Exemplo 01:** ```var n = 3```  (Resultado: **3**)
	- **Exemplo 02:** ```n = n + 4```  (Resultado: **7**)
	- **Exemplo 03:** ```n = n - 5```  (Resultado: **2**)
	- **Exemplo 04:** ```n = n * 4```  (Resultado: **8**)
	- **Exemplo 05:** ```n = n / 2```  (Resultado: **4**)
	- **Exemplo 06:** ```n = n ** 2``` (Resultado: **16**)
	- **Exemplo 07:** ```n = n % 5```  (Resultado: **1**)
      - **Simplificando**
        - **Exemplo 01:** ```var n = 3```
		- **Exemplo 02:** ```var n = n + 4``` **simplificando, fica:** ```n += 4``` (Resultado: **7**)
		  - **ATENÇÃO!** Só funciona, se a mesma variável receber ela mesmo + o restante da operação!
		  
		- **Exemplo 03:** ```var n = n - 5``` **simplificando, fica:** ```n -= 5``` (Resultado: **2**)
		- **Exemplo 04:** ```var n = n * 4``` **simplificando, fica:** ```n *= 4``` (Resultado: **8**)
		- **Exemplo 05:** ```var n = n / 2``` **simplificando, fica:** ```n /= 5``` (Resultado: **1.6**)
		- **Exemplo 06:** ```var n = n ** 2``` **simplificando, fica:** ```n **= 2``` (Resultado: **2.5600000...**)
		- **Exemplo 07:** ```var n = n % 5``` **simplificando, fica:** ```n %= 5``` (Resultado: **2.5600000...**)
  
  - **Incremento**
    - **Exemplo 01:** ```var n = 5``` (Resultado: **5**)
	  - Pós-incremento:
	    - **Exemplo 02:** ```var n ++```  (Resultado: **6**)
		- **Exemplo 03:** ```var n --```  (Resultado: **5**)
	  - Pré-incremento:	
	    - **Exemplo 04:** ```var ++ n```  (Resultado: **6**)	
	    - **Exemplo 05:** ```var -- n```  (Resultado: **5**)
	
## # Relacionais 

  - **IMPORTANTE!** Para toda operação que tiver um operador relacional ligado a ela, seu resultado será **Booleano** (*True* / *False*).
  - Maior: ```>```
  - Menor: ```<```
  - Maior Igual: ```>=```
  - Menor Igual: ```<=```
  - Igual (Identidade): ```==```
    - Exemplo: ```5 == 5 (true)``` e ```5 == '5' (true)``` - leva em conta apenas o **Valor**
	- **IMPORTANTE!** O sinal de igualdade não testa o Tipo, por isso é (*true*).
  - Idêntico (Igualdade Restrita): ```===```
    - Exemplo: ```5 === 5 (true)``` e ```5 === '5' (false)``` - leva em conta o **Valor** e o **Tipo**
    - **IMPORTANTE!** Considera-se o Valor e o Tipo.
  - Diferente: ```!=```
    - Exemplo: ```5 != '5' (false)``` - leva em conta apenas o **Valor**	
  - Desigual restrito: ```!==```  
    - Exemplo: ```5 !== '5' (true)``` - leva em conta o **Valor** e o **Tipo**

## # Lógicos

  - Negação (análise unária: *true* ou *false*): ```!``` (**NÃO** lógico)
  - Conjunção (análise binária): ```&&``` (**E** lógico) - satisfaz se e somente se, as duas forem verdadeiras
  - Disjunção (Duplo **Pipe**): ```||``` (**OU** lógico) - basta que um seja verdadeiro, para que o resultado seja verdadeiro

## # Ternários
  
  - Símbolo de Interrogação: ```?```
  - Símbolo Dois pontos: ```:```
  - Chama-se ternário porque possui três partes
    - **teste**```?```**true**```:```**false**

	
	
	
	
	
	
	
	
	
	
	
	
	