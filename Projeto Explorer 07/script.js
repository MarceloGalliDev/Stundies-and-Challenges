/*
Nesse desafio você irá criar uma lista de ** estudantes ** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- Crie uma **função** que irá calcular a média das notas de cada aluno;
- Supondo que a média, para esse concurso é ** 7 **, verifique ** se ** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

class Student {

  constructor() {
    this.id = 1 
    this.registration = []
    this.editId = null

  }
  //na função construtora o this.editId = null, significa que é uma verificação para saber se é uma edição ou uma inserção de dados, vai verificar se o Id é nulo ou se ja existe e habilitar a edição caso não seja nulo

  saveItems() {
    let student = this.writeData()

    if (this.validateFields(student)) {
      if (this.editId == null) {
        this.add(student)
      } else {
        this.refresh(this.editId, student)
      }
    }

    this.listTables(student)

    this.clearItems()
  }

  add(student) {
    this.registration.push(student)
    this.id++

  }

  writeData() {
    let student = {}

    student.id = this.id
    student.nameStudent = document.querySelector('input#name1').value
    student.grade1Student = document.querySelector('input#grade1').value
    student.grade2Student = document.querySelector('input#grade2').value

     return student
  }


  validateFields(student) {
    let msg = ''

    if(student.nameStudent == '') {
      msg += 'Enter the student name \n'
    }

    if(student.grade1Student == '') {
      msg += 'Enter the first note \n'
    }

    if(student.grade2Student == '') {
      msg += 'Enter the second note \n'
    }
    
    if (msg != '') {
      alert(msg)
      return false
    }
    return true
  }

  clearItems() {
    document.querySelector('input#name1').value = ''
    document.querySelector('input#grade1').value = ''
    document.querySelector('input#grade2').value = ''

    document.querySelector('button#update').innerText = 'Save'
    this.editId = null
  }//aqui deixamos os campos vazios, para limpar a caixa

  listTables(student) {
    let tbody = document.querySelector('tbody#tbody')
    tbody.innerText = ''
    //aqui deixamos o tbody vazio, sempre que foi salvo algum item dentro do array, para não duplicar

    for (let i = 0; i < this.registration.length; i++) {
      let tr = tbody.insertRow()
      //insertRow é para inserir linhas

      let td_id = tr.insertCell()
      let td_name1 = tr.insertCell()
      let td_grade1 = tr.insertCell()
      let td_grade2 = tr.insertCell()
      let td_result = tr.insertCell()
      let td_action = tr.insertCell()
      //insertCell é para inserir colunas

      td_id.innerText = this.registration[i].id
      td_name1.innerText = this.registration[i].nameStudent
      td_grade1.innerText = this.registration[i].grade1Student
      td_grade2.innerText = this.registration[i].grade2Student


      let imgEdit = document.createElement('img')
      imgEdit.src = "Image/caderno.gif"
      td_action.appendChild(imgEdit)
      imgEdit.setAttribute("onclick","student.edit("+ JSON.stringify(this.registration[i]) +")")

      let imgDel = document.createElement('img')
      imgDel.src = "Image/cesto-de-lixo.gif"
      td_action.appendChild(imgDel)
      imgDel.setAttribute("onclick", "student.delete(" + this.registration[i].id + ")")
      
      //estamos adiconando uma imagem dentro do td_action de cada linha
      //estamos criando um atributo para a img ter uma funcionalidade, o setAttribute("evento","ação") possui duas propriedades, a primeira é a ação que queremos e a segunda é aonde queremos
      //imgDel.setAttribute("onclick","student.delete("+ this.registration[i].id +")") > nesta linha estamos concatenando a propriedade Id, la dentro da função da img, para selecionar o Id correto e deletar somente a linha, observe la no HTML que foi criado a img já concatenada o Id correspondente a linha


      let teste = parseFloat(student.grade1Student) + parseFloat(student.grade2Student)
      if (teste >= 6) {
        let imgEdit1 = document.createElement('img')
        imgEdit1.src = "Image/afirmativo.gif"
        td_result.insertBefore(imgEdit1, td_result.children[4])
        imgEdit1.setAttribute("onclick", "student.okay(" + this.registration[i].id + ")")
      } else if (teste <= 5.9) {
        let imgEdit2 = document.createElement('img')
        imgEdit2.src = "Image/negativo.gif"
        td_result.insertBefore(imgEdit2, td_result.children[4])
        imgEdit2.setAttribute("onclick", "student.loss(" + this.registration[i].id + ")")
      } else {
        return false
      }
      console.log(teste)
    }

  }

  okay() {
    alert('okay')
  }
  loss() {
    alert('loss')
  }

  delete(id) {
    if (confirm(`Do you really want to delete the ID ${id}?` )) {
      let tbody = document.querySelector('tbody#tbody')
  
      for (let i = 0; i < this.registration.length; i++) {
        if (this.registration[i].id == id) {
          this.registration.splice(i, 1)
          tbody.deleteRow(i)
        }
      }
    }
  }

  //criamos uma variavél i, onde inicia-se com 0, postiormente o i vai percorrer todo nosso array buscando o Id correspondente até que o i seja menor do array, o incremento é para descer cada linha do array
  //splice possui dois argumentos, qual o indice e a quantidade de registro
  
  edit(dados) {
    this.editId = dados.id;

    document.querySelector('input#name1').value = dados.nameStudent
    document.querySelector('input#grade1').value = dados.grade1Student
    document.querySelector('input#grade2').value = dados.grade2Student

    document.querySelector('button#update').innerText = 'Update'
  }

  refresh(id, student) {
    for (let i = 0; i < this.registration.length; i++) {
      if (this.registration[i].id == id) {
        this.registration[i].nameStudent = student.nameStudent
        this.registration[i].grade1Student = student.grade1Student
        this.registration[i].grade2Student = student.grade2Student
      }
    }
  }

}


var student = new Student()

/*
> writeData() {
    let student = {
  
    }
  }
  Quando fazemos nesse formato, o let so existe dentro da função, e quando colocamos as {}, criamos a variável em forma de objeto.
  -----------------------------------------
> student.nameStudent = document.querySelector('input#nameStudent').value

  Essa propriedade estamos usando o querySelector como o getElementById(), é mais moderno e estamos capturando o valor digitado no campo imput do ID identificado, usando o .value

>  a questão do student.nameStudent = 
  É a forma de colocar dentro do objeto nossa função

-------------------------------------------
> let msg = '';
  if (student.nameStudent == '') {
    msg += "Enter the student's name"
  }
  Aqui criamos um campo de validação, onde incluimos a msg += (msg + ela mesma), para caso não tiver sido preenchido o campo

  -------------------------------------------
  > para criar uma classe em uma tag dentro do JS, usamos a seguinte forma:
  td_id.classList.add('nome')
*/