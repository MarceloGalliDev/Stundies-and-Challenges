#salvando contatos
def salvar_contatos(lista): #recebendo por parâmentro a lista
  arquivo = open("contatos.txt", "w")
  for contato in lista:
    arquivo.write("{};{};{};{};{}\n".format(contato['nome'], contato['telefone'], contato['cidade'], contato['estado'], contato['status']))
  arquivo.close()

#carregando contatos
def carregar_contato():
  lista = []
  try:
    arquivo = open("contatos.txt", "r")

    for linha in arquivo.readlines(): #aqui o readline lê todas as linhas do arquivo e passa para váriavel linha
      coluna = linha.strip().split(";")#.strip = remover espaços em branco, .split = quebra de coluna, tornando um vetor, onde possui colunas
      contato = {
      "nome": coluna[0],
      "telefone": coluna[1],
      "cidade": coluna[2],
      "estado": coluna[3],
      "status": coluna[4]
      }

      lista.append(contato)
    arquivo.close()
  except FileNotFoundError:
    pass
  return lista #esta retornando lista quando carregada no início do programa

def existe_contato1(lista, nome):
  if len(lista) > 0:
    for contato in lista:
      if contato['nome'] == nome:
        return True
    return False

def adicionar(lista):
  print("\n----- Cadastrar Contato -----\n")
  while True:
    while True:
      try:
        nome = input("Digite o nome: ")
        if all(c.isalpha() or c.isspace() for c in nome):
          nome = nome.upper()
          break
        else:
          print("Por favor digite um Nome válido.")
      except ValueError:
        print('Não foi digitado um Nome.')

    while True:
      try:
        telefone = int(input("Telefone com DDD: "))
        if 10000000000 <= telefone <= 99999999999: # é um número de 11 dígitos
          break
        print('O número deve ter 11 dígitos')
      except ValueError:
        print('Não foi digitado um número')

    while True:
      try:
        cidade = str(input("Digite a Cidade: "))
        if all(c.isalpha() or c.isspace() for c in cidade):
          cidade = cidade.upper()
          break
        else:
          print("Por favor digite uma Cidade válida.")
      except ValueError:
        print('Não foi digitado uma Cidade.')

    while True:
      try:
        estado = input("Digite o Estado: ")
        if all(c.isalpha() or c.isspace() for c in estado):
          estado = estado.upper()
          break
        else:
          print("Por favor digite um Estado válido.")
      except ValueError:
        print('Não foi digitado um Estado.')

    while True:
      status = str(input("Digite o status, P - Pessoal ou C - Comercial: "))
      if all(c.isalpha() or c.isspace() for c in status):
        status = status.upper()
        if status == ('P'):
          break
        elif status == ('C'):
          break
        else:
          print("Por favor digite uma opção válida")
      else:
        print("Por favor digite uma opção válida")

    if not existe_contato1(lista, nome):
      break
    else:
      print("Esse contato já foi utilizado")
      print("Faça um novo cadastro!\n")

  contato = {
    "nome": nome,
    "telefone": telefone,
    "cidade": cidade,
    "estado": estado,
    "status": status
  }

  lista.append(contato)
  print("Contato {} cadastrado!\n".format(contato['nome']))
  print("\n---------------------------\n")




#opcao - 2 = alterar
def alterar(lista):
  print("\n----- Alterar Contato -----\n")
  if len(lista) > 0:
    nome = input("Digite o nome a ser alterado: \n")
    nome = nome.upper()
    if existe_contato1(lista, nome):
      for contato in lista:
        if contato['nome'] == nome:
          print("\nNome: {}".format(contato['nome']))
          print("Telefone: {}".format(contato['telefone']))
          print("Cidade: {}".format(contato['cidade']))
          print("Estado: {}".format(contato['estado']))
          print("Status: {}".format(contato['status']))
          print("\n---------------------------\n")
          
          while True:
            escolha = str(input("Está certo disso? SIM ou NÃO: \n"))
            if all(c.isalpha() or c.isspace() for c in escolha):
              escolha = escolha.upper()
              if escolha == ('SIM'):
                print("Ok!")
                while True:
                  try:
                    contato['nome'] = input("Digite o novo Nome: ")
                    if all(c.isalpha() or c.isspace() for c in contato['nome']):
                      contato['nome'] = contato['nome'].upper()
                      break
                    else:
                      print("Por favor digite um Nome válido.")
                  except ValueError:
                    print('Não foi digitado um Nome.')

                while True:
                  try:
                    contato['telefone'] = int(input("Telefone com DDD: "))
                    if 10000000000 <= contato['telefone'] <= 99999999999: # é um número de 11 dígitos
                      break
                    print('O número deve ter 11 dígitos')
                  except ValueError:
                    print('Não foi digitado um número')

                while True:
                  try:
                    contato['cidade'] = input("Digite a nova Cidade: ")
                    if all(c.isalpha() or c.isspace() for c in contato['cidade']):
                      contato['cidade'] = contato['cidade'].upper()
                      break
                    else:
                      print("Por favor digite uma Cidade válida.")
                  except ValueError:
                    print('Não foi digitado uma Cidade.')

                while True:
                  try:
                    contato['estado'] = input("Digite o novo Estado: ")
                    if all(c.isalpha() or c.isspace() for c in contato['estado']):
                      contato['estado'] = contato['estado'].upper()
                      break
                    else:
                      print("Por favor digite um Estado válido.")
                  except ValueError:
                    print('Não foi digitado um Estado.')

                while True:
                  contato['status'] = input("Digite o novo status, P - Pessoal ou C- Comercial: \n")
                  if all(c.isalpha() or c.isspace() for c in contato['status']):
                    contato['status'] = contato['status'].upper()
                    if contato['status'] == ('P'):
                      print("Ok!")
                      break
                    elif contato['status'] == ('C'):
                      print("Ok!")
                      break
                    else:
                      print("Por favor digite uma opção válida")
                  else:
                    print("Por favor digite uma opção válida")
                print("Os dados de {}, foram alterados com sucesso!\n".format(contato['nome']))
                break
              elif escolha == ('NÃO'):
                print("Retornando ao menu!\n")
                break
              elif escolha == ('NAO'):
                print("Retornando ao menu!\n")
                break
              else:
                print("Por favor digite uma opção válida")
            else:
              print("Por favor digite uma opção válida")
          break
    else:
      print("\nNão existe contato com o nome {}\n".format(nome))
  else:
    print("\nNão existe contato na agenda!\n")

#opcao - 3 = listar
def listar(lista):
  print("\n----- Lista de Contatos -----\n")
  if len(lista) > 0:
    for i, contato in enumerate(lista):
      print("Contato {}:" .format(i+1)) #o uso {} serve para chamar o i da formula. Como i começa em 0, o i+1 corresponde que o início se da do número 1
      print("\tNome: {}".format(contato['nome']))#função para chamar do dicionário para dentro do print, o \t = a tabulação a direita
      print("\tTelefone: {}".format(contato['telefone']))
      print("\tCidade: {}".format(contato['cidade']))
      print("\tEstado: {}".format(contato['estado']))
      print("\tStatus: {}".format(contato['status']))
      print("\n---------------------------\n")
    print("Quantidade de contatos: {}\n".format(len(lista)))
  else:
    print("\nNão existe contato na agenda!\n")

#opcao - 4 = procurar
def buscar(lista):
  print("\n----- Buscar Contato -----\n")
  if len(lista) > 0:
    nome = str(input("Digite o nome a ser buscado: \n"))
    nome = nome.upper()
    if existe_contato1(lista, nome):
      for contato in lista:
        if contato['nome'] == nome:
          print("Nome: {}".format(contato['nome']))
          print("Telefone: {}".format(contato['telefone']))
          print("Cidade: {}".format(contato['cidade']))
          print("Estado: {}".format(contato['estado']))
          print("Status: {}".format(contato['status']))
          print("\n---------------------------\n")
    else:
      print("Não existe contato com o nome {}".format(nome))
  else:
    print("\nNão existe contato na agenda!\n")


#opcao - 5 = excluir
def excluir(lista):
  print("\n----- Excluir Contato -----\n")
  if len(lista) > 0:
    nome = input("Digite o nome a ser excluído: \n")
    nome = nome.upper()
    if existe_contato1(lista, nome):
      for i, contato in enumerate(lista):
        while True:
          if nome == contato ['nome']:
            print("Nome: {}".format(contato['nome']))
            print("Telefone: {}".format(contato['telefone']))
            print("Cidade: {}".format(contato['cidade']))
            print("Estado: {}".format(contato['estado']))
            print("Status: {}".format(contato['status']))
            print("\n---------------------------\n")

            opcao_1 = input("Deseja apagar este contato? SIM ou NÃO: \n")
            if all(c.isalpha() or c.isspace() for c in opcao_1):
              opcao_1 = opcao_1.upper()
              if opcao_1 == ('SIM'):
                while True:
                  opcao_2 = str(input("Está correto? SIM ou NÃO: \n"))
                  if all(c.isalpha() or c.isspace() for c in opcao_2):
                    opcao_2 = opcao_2.upper()
                    if opcao_2 == ('SIM'):
                      print("O contato foi apagado com sucesso!")
                      del lista[i]
                      break
                    elif opcao_2 == ('NÃO'):
                      #print("Retornando ao menu!\n")
                      break
                    elif opcao_2 == ('NAO'):
                      #print("Retornando ao menu!\n")
                      break
                    else:
                      print("Por favor digite uma opção válida")
                  else:
                    print("Por favor digite uma opção válida")
              elif opcao_1 == ('NAO'):
                #print("Próximo contato!\n")
                break
              elif opcao_1 == ('NÃO'):
                #print("Próximo contato!\n")
                break
              else:
                print("Por favor digite uma opção válida!")
            break
    else:
      print("Não existe contato com o nome {}".format(nome))
  else:
    print("\nNão existe contato na agenda!\n")


def principal ():
  lista = carregar_contato()
  while True:
    print("\nMenu da agenda:")
    print("[1] - Cadastrar contato")
    print("[2] - Alterar dados")
    print("[3] - Listar agenda")
    print("[4] - Procurar contato")
    print("[5] - Excluir contato")
    print("[6] - Sair do sistema")
    #opcao = int(input("Digite a opção: "))
    while True:
      try:
        opcao = int(input("Digite a opção: "))
        if 1 <= opcao <= 6:
          break
        print('Escoha uma opção!')
      except ValueError:
        print('Não foi digitado uma opção')

    if opcao == 1:
      adicionar(lista)
      salvar_contatos(lista)
    elif opcao == 2:
      alterar(lista)
      salvar_contatos(lista)
    elif opcao == 3:
      listar(lista)
    elif opcao == 4:
      buscar(lista)
    elif opcao == 5:
      excluir(lista)
      salvar_contatos(lista)
    elif opcao == 6:
      
        sair_1 = str(input("\nDeseja encerrar? SIM ou NÃO: \n"))
        if all(c.isalpha() or c.isspace() for c in sair_1):
          sair_1 = sair_1.upper()
          if sair_1 == ('SIM'):
            print("\nFechando programa!\n")
            print("Criado por Marcelo L. Galli")
            break
          elif sair_1 == ('NÃO'):
            print("\nRetornando ao menu!\n")
            
          elif sair_1 == ('NAO'):
            print("\nRetornando ao menu!\n")
            
          else:
            print("\nPor favor digite uma opção válida\n")
        else:
          print("\nPor favor digite uma opção válida\n")

    else:
      print("\nOpção inválida\n")

principal()

