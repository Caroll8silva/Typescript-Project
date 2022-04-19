![capa type](https://user-images.githubusercontent.com/63256085/163912927-ca978dac-5fcb-4cf4-9961-e56d6869619d.png)

# PROJETO API EM TYPESCRIPT

Sistema para cadastro de clientes e cidades. (EM ANDAMENTO)
<br>

## TECNOLOGIAS UTILIZADAS PARA O DESENVOLVIMENTO DA API

Para o funcionamento da API é preciso ter instalado em sua máquina as seguintes tecnologias:
<br>
<br>
![tech](https://user-images.githubusercontent.com/63256085/164014099-33d1bbe1-4e22-4adf-8329-6fdef6eca422.png)

## PACOTES PARA O FUNCIONAMENTO DA API

- cors
- dotenv
- express
- joi
- pg
- reflect-metadata
- typeorm
- typeorm-pagination
- typescript
- uuid

## EXECUTANDO A API



## ACESSANDO AS ROTAS

### Rota de cidades

Rota para inserir uma cidade (POST)
![postCity](https://user-images.githubusercontent.com/63256085/164021162-b2ad69e4-e658-4a74-920e-d8d3a86870a8.png)
Exemplo: 
```bash
{
"name": "Olinda",
"state": "Pernambuco"
}
 ```
 Rota para consultar cidade pelo nome (GET)
 ![getCity](https://user-images.githubusercontent.com/63256085/164021686-145a627e-ea6b-4fb1-8401-3cc7e2464641.png)

Rota para consultar cidade pelo estado (GET)
![getCityState](https://user-images.githubusercontent.com/63256085/164021783-105caa89-cecb-40cd-846f-aa206a50c98c.png)


### Rota de clientes

Rota para cadastrar cliente (POST)
![postClient](https://user-images.githubusercontent.com/63256085/164022140-51abe547-5775-4463-be47-3e6c8ab642ad.png)
Exemplo: 
```bash
{
"fullname": "Maria da Silva",
"gender": "Feminino",
"birthdate": "04/05/2002",
"age": "19",
"city": "Fortaleza"
}
 ```
 Rota para consultar cliente pelo nome (GET)
 ![getClientName](https://user-images.githubusercontent.com/63256085/164022659-594f6bd7-0bfb-4180-9932-8b71adc5cdae.png)

Rota para consultar cliente pelo id (GET)
![getByID](https://user-images.githubusercontent.com/63256085/164022778-a35e79b9-89bb-46f2-b3a9-9b52d96f9768.png)

Rota para remover um cliente (DELETE) 
![deleteClient](https://user-images.githubusercontent.com/63256085/164022935-b6174390-7c19-4341-8f56-6ab1e6bbebf4.png)

Rota para alterar nome do cliente (PUT)
![updateClient](https://user-images.githubusercontent.com/63256085/164023016-694aaff3-9940-42ae-bbfc-2f4771e60104.png)

```bash
{
"fullname": "Ana da Silva",
}
 ```
