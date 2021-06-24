function logout() {
    window.location.href = './login.html'
}

function home() {
    window.location.href = './index.html'
}

window.onload = function ola(){
    let insert = document.getElementById('inserir_ola')
    let nome = localStorage.getItem('usuario').toLowerCase()
    let nomecorreto = nome[0].toUpperCase() + nome.substr(1)
    
    insert.innerHTML = `Olá, ${nomecorreto}!`
    
}

function analisar() {
    let renda = document.getElementById('renda').value
    let fixas = document.getElementById('fixas').value
    let variaveis = document.getElementById('variaveis').value
    let insert = document.getElementById('erro')

    if(renda == "" || fixas == "" || variaveis == ""){
        insert.innerHTML = ('Algum dado não foi preenchido corretamente!')
    }else {
        localStorage.setItem('renda', renda)
        localStorage.setItem('fixas', fixas)
        localStorage.setItem('variaveis', variaveis)
    
        document.getElementById('renda').value = ''
        document.getElementById('fixas').value = ''
        document.getElementById('variaveis').value = ''

    divresultado()
    h1renda()
    divresrenda()
    h1fixas()
    divresfixas()
    h1variaveis()
    divresvariaveis()
    listarrenda()
    listarfixas()
    listarvariaveis()
    canvas()
    dadoscanvas()  
    porcentagem() 
    prosseguir()
    }  
}

function listarrenda(){ 
    let renda = localStorage.getItem('renda')
    let insert = document.getElementById('resrenda')
    let p = document.getElementById('prenda')
    renda = renda.toString().replace(".", ",")

    p.innerHTML = 'Renda Mensal:'
    insert.innerHTML = `R$${renda}`
}

function listarfixas(){ 
    let fixas = localStorage.getItem('fixas')
    let insert = document.getElementById('resfixas')
    let p = document.getElementById('pfixas')
    fixas = fixas.toString().replace(".", ",")

    p.innerHTML = 'Despesas Fixas:'
    insert.innerHTML = `R$${fixas}`
}

function listarvariaveis(){ 
    let variaveis = localStorage.getItem('variaveis')
    let insert = document.getElementById('resvariaveis')
    let p = document.getElementById('pvariaveis')
    variaveis = variaveis.toString().replace(".", ",")

    p.innerHTML = 'Média Desp. Variáveis:'
    insert.innerHTML = `R$${variaveis}`
}

function divresultado(){

    let validacao = document.getElementById('resultado')
    if (validacao != null) {
        validacao.innerHTML = ''
        let main = document.getElementById('conteudo')
        main.removeChild(validacao)
    }
    let html = document.getElementById('conteudo')
    let div = document.createElement('div')
    div.id = 'resultado'
    div.className = 'resultado'
    html.appendChild(div)
}

function h1renda(){
    let html = document.getElementById('resultado')
    let div = document.createElement('div')
    div.id = 'listar_preenchido1'
    div.className = 'listar_preenchido'
    html.appendChild(div)
    let p = document.createElement('p')
    p.id = 'prenda'
    div.appendChild(p)
}

function divresrenda(){
    let html = document.getElementById('listar_preenchido1')
    let div = document.createElement('div')
    div.id = 'resrenda'
    html.appendChild(div)
}

function h1fixas(){
    let html = document.getElementById('resultado')
    let div = document.createElement('div')
    div.id = 'listar_preenchido2'
    div.className = 'listar_preenchido'
    html.appendChild(div)
    let p = document.createElement('p')
    p.id = 'pfixas'
    div.appendChild(p)
}

function divresfixas(){
    let html = document.getElementById('listar_preenchido2')
    let div = document.createElement('div')
    div.id = 'resfixas'
    html.appendChild(div)
}

function h1variaveis(){
    let html = document.getElementById('resultado')
    let div = document.createElement('div')
    div.id = 'listar_preenchido3'
    div.className = 'listar_preenchido'
    html.appendChild(div)
    let p = document.createElement('p')
    p.id = 'pvariaveis'
    div.appendChild(p)
}

function divresvariaveis(){
    let html = document.getElementById('listar_preenchido3')
    let div = document.createElement('div')
    div.id = 'resvariaveis'
    html.appendChild(div)
}

function canvas(){
    let html = document.getElementById('resultado')
    let div = document.createElement('div')
    div.className = 'canvas'
    html.appendChild(div)
    let grafico = document.createElement('canvas')
    grafico.id = 'pie'
    div.appendChild(grafico)
}

function dadoscanvas(){

    let ctx = document.getElementById('pie')
    let labels = ['Saldo', 'Gastos']
    let color = ['#99B970', '#FF7070']
    let renda = localStorage.getItem('renda')
    let fixas = localStorage.getItem('fixas')
    let variaveis = localStorage.getItem('variaveis')

    let gastos = (Number(variaveis) + Number(fixas))
    let custos = ((gastos/Number(renda))*100)
    let saldo = (100 - custos)

    let grafico = new Chart(ctx, {
        type: 'pie',
        data: {
            datasets: [{
                data: [saldo, custos],
                backgroundColor: color,
                borderColor: '#0B3954',
                offset: 15,
            }],
            labels: labels
        },
        options: { 
            animation: {
                duration: 2000,
                easing: 'easeOutBack'
            },
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'right',
                    align: 'center',
                    labels: {
                        color: '#fff',
                        font: {
                            family: 'QuickL',
                            size: 14,
                        }
                    }
                }
            }
            
        }
    })
}

function porcentagem (){
    let html = document.getElementById('resultado')
    let p = document.createElement('p')
    let porcentagem = ((Number(localStorage.getItem('fixas')) + Number(localStorage.getItem('variaveis')))/Number(localStorage.getItem('renda')))*100
    let arredondado = parseFloat(porcentagem.toFixed(2))
    p.id = 'porcentagem'
    p.innerHTML = `Atualmente você tem ${arredondado}% da sua renda comprometida.<br>`  
    p.innerHTML += 'Veja os limites de crédito que disponibilizamos para você!'

    html.appendChild(p)

}

function prosseguir(){
    let html = document.getElementById('resultado')
    let button = document.createElement('button')
    button.id = 'prosseguir'
    button.type = 'submit'
    button.className = 'input_prosseguir'
    button.innerHTML = 'Prosseguir'
    button.onclick = function pagina(){
        window.location.href = './changes.html'
    }

    html.appendChild(button)
}




