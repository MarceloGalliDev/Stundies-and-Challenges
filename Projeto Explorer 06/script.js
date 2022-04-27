/*
A soma dos dois números;
A subtração dos dois números;
A multiplicação dos dois números;
A divisão dos dois números;
O resto da divisão dos dois números;

Verifique se a soma dos dois números é par/ímpar;
Verifique se os dois números inseridos são iguais/diferentes;
*/

/*
function verify() {
  if (x % 2 != 0) {
    alert('Esse número é ímpar')
  } else {
    alert('Esse número é par')
  }
}

function verify2() {
  if (x == y) {
  alert('São iguais os números digitados')
  } else {
  alert('São diferentes os números digitados')
  }
}
*/

function somar() {
  var tn1 = document.querySelector('input#txtn1')
  var tn2 = document.querySelector('input#txtn2')
  var n1 = Number(tn1.value)
  var n2 = Number(tn2.value)
  var s = n1 + n2
  res.innerHTML = `A soma de ${n1} e ${n2} é igual a <strong>${s}</strong>`
  
  if (s % 2 != 0) {
    verifyOne.innerHTML = `Seu número é <strong>ímpar</strong>`
  } else {
    verifyOne.innerHTML = `Seu número é <strong>par</strong>`
  }

  if (n1 == n2) {
    verifyTwo.innerHTML = `Seus números são <strong>iguais</strong>`
  } else {
    verifyTwo.innerHTML = `Seus números são <strong>diferentes</strong>`
  }
}
function subtrair() {
  var tn1 = document.querySelector('input#txtn1')
  var tn2 = document.querySelector('input#txtn2')
  var n1 = Number(tn1.value)
  var n2 = Number(tn2.value)
  var s = n1 - n2
  res.innerHTML = `A subtração de ${n1} e ${n2} é igual a <strong>${s}</strong>`
  if (s % 2 != 0) {
    verifyOne.innerHTML = `Seu número é <strong>ímpar</strong>`
  } else {
    verifyOne.innerHTML = `Seu número é <strong>par</strong>`
  }

  if (n1 == n2) {
    verifyTwo.innerHTML = `Seus números são <strong>iguais</strong>`
  } else {
    verifyTwo.innerHTML = `Seus números são <strong>diferentes</strong>`
  }
}
function multiplicar() {
  var tn1 = document.querySelector('input#txtn1')
  var tn2 = document.querySelector('input#txtn2')
  var n1 = Number(tn1.value)
  var n2 = Number(tn2.value)
  var s = n1 * n2
  res.innerHTML = `A multiplicação de ${n1} e ${n2} é igual a <strong>${s}</strong>`
  if (s % 2 != 0) {
    verifyOne.innerHTML = `Seu número é <strong>ímpar</strong>`
  } else {
    verifyOne.innerHTML = `Seu número é <strong>par</strong>`
  }

  if (n1 == n2) {
    verifyTwo.innerHTML = `Seus números são <strong>iguais</strong>`
  } else {
    verifyTwo.innerHTML = `Seus números são <strong>diferentes</strong>`
  }
}
function dividir() {
  var tn1 = document.querySelector('input#txtn1')
  var tn2 = document.querySelector('input#txtn2')
  var n1 = Number(tn1.value)
  var n2 = Number(tn2.value)
  var s = n1 / n2
  res.innerHTML = `A divisão de ${n1} e ${n2} é igual a <strong>${s}</strong>`
  if (s % 2 != 0) {
    verifyOne.innerHTML = `Seu número é <strong>ímpar</strong>`
  } else {
    verifyOne.innerHTML = `Seu número é <strong>par</strong>`
  }

  if (n1 == n2) {
    verifyTwo.innerHTML = `Seus números são <strong>iguais</strong>`
  } else {
    verifyTwo.innerHTML = `Seus números são <strong>diferentes</strong>`
  }
}
function resto() {
  var tn1 = document.querySelector('input#txtn1')
  var tn2 = document.querySelector('input#txtn2')
  var n1 = Number(tn1.value)
  var n2 = Number(tn2.value)
  var s = n1 % n2
  res.innerHTML = `O resto da divisão de ${n1} e ${n2} é igual a <strong>${s}</strong>`
  if (s % 2 != 0) {
    verifyOne.innerHTML = `Seu número é <strong>ímpar</strong>`
  } else {
    verifyOne.innerHTML = `Seu número é <strong>par</strong>`
  }

  if (n1 == n2) {
    verifyTwo.innerHTML = `Seus números são <strong>iguais</strong>`
  } else {
    verifyTwo.innerHTML = `Seus números são <strong>diferentes</strong>`
  }
}




