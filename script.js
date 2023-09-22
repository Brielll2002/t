var array = []

function enviar(){
    var nome = String(document.getElementById('nome').value)
    var m1 = Number(document.getElementById('m1').value)
    var m2 = Number(document.getElementById('m2').value)
    var m3 = Number(document.getElementById('m3').value)
    var m4 = Number(document.getElementById('m4').value)
    var msg = document.getElementById("enviado")

    if(localStorage.array){
      array = localStorage.getItem(JSON.parse(array))

    if(m1>10){m1=10}
    if(m2>10){m2=10}
    if(m3>10){m3=10}
    if(m4>10){m4=10}
    if(m1<0){m1=0}
    if(m2<0){m2=0}
    if(m3<0){m3=0}
    if(m4<0){m4=0}
    var media = (m1+m2+m3+m4)/4

    array.push({Nome:nome, Nota1:m1, Nota2:m2, Nota3:m3, Nota4:m4, Média: media})

    localStorage.setItem("Notas", JSON.stringify(array))

    msg.innerHTML = `Enviado com sucesso!`

    setTimeout(function(){
        msg.innerHTML = ``
    }, 3000)

    console.log(array)
    }
    else{
    if(m1>10){m1=10}
    if(m2>10){m2=10}
    if(m3>10){m3=10}
    if(m4>10){m4=10}
    if(m1<0){m1=0}
    if(m2<0){m2=0}
    if(m3<0){m3=0}
    if(m4<0){m4=0}
    var media = (m1+m2+m3+m4)/4

    array.push({Nome:nome, Nota1:m1, Nota2:m2, Nota3:m3, Nota4:m4, Média: media})

    localStorage.setItem("Notas", JSON.stringify(array))

    msg.innerHTML = `Enviado com sucesso!`

    setTimeout(function(){
        msg.innerHTML = ``
    }, 3000)

    console.log(array)
    }
}

function buscar(){
    var resultado = localStorage.getItem("Notas")
    var res = JSON.parse(resultado)
    var msg2 = document.getElementById("mostrar")
    msg2.innerHTML = ""


    for(c=0; c<res.length; c++){
     if(res[c].Média>=7){
        msg2.innerHTML += `
        <br>Aluno: ${res[c].Nome}<br>
        1 Unidade: ${res[c].Nota1}<br>
        2 Unidade: ${res[c].Nota2}<br>
        3 Unidade: ${res[c].Nota3}<br>
        4 Unidade: ${res[c].Nota4}<br>
        Média: ${res[c].Média}<br>
        <strong>Aprovado(a)!<strong/><br>`
        console.log(res[c])
     }
     else{
        msg2.innerHTML += `
        <br>Aluno: ${res[c].Nome}<br>
        1 Unidade: ${res[c].Nota1}<br>
        2 Unidade: ${res[c].Nota2}<br>
        3 Unidade: ${res[c].Nota3}<br>
        4 Unidade: ${res[c].Nota4}<br>
        Média: ${res[c].Média}<br>
        <strong>Reprovado(a)!<strong/><br>`
        console.log(res[c])
    }
    }
}

function limpar(){
    localStorage.clear("Notas")
    array = []
    var msg3 = document.getElementById("mostrar")
    msg3.innerHTML = ""
}