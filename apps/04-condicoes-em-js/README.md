# # Trabalhando com Condições no JavaScript

  - Estrutura de Controle e Fluxo

## # Condições Simples

  - No exemplo abaixo, o fluxo só será executado, se a condição for **Verdadeira (True)**
```
if (condicao){
  (bloco de comandos)...
  executa-se esse (bloco de comandos), se o resultado da condição for Verdadeira(True)
}
```

## # Condições Compostas

  - No exemplo abaixo, executa-se um dos fluxos (o **True** ou o **False**)

```
if (condicao){
  (bloco de comandos)...
  executa-se esse (bloco de comandos), se o resultado da condição for Verdadeira(True)
}else{
  (bloco de comandos)...
  executa-se esse (bloco de comandos), se o resultado da condição for Falsa(False)
}
```

## # Condições Aninhadas

  - No exemplo abaixo, executa-se um dos fluxos (o **True** ou o **False**)

```
if (condicao01){
  (bloco de comandos da condicao01)...
  executa-se esse (bloco de comandos), se o resultado da condição for Verdadeira(True)
}else if (condicao02){
		(bloco de comandos da condicao02)...
		executa-se esse (bloco de comandos), se o resultado da condicao02 for Verdadeira(True)
	}else{
	  (bloco de comandos)...
      executa-se esse (bloco de comandos), se o resultado da condicao02 for Falsa(False)
	}
}
```

## # Condições Múltiplas

```
switch (expressão){
	case valor01:
	
		break(obrigatorio)
	case valor02:
	
		break(obrigatorio)
	case valor03:
	
		break(obrigatorio)
	case valor04:
	
		break(obrigatorio)
	default:
	
		break(opcional)
}
```
