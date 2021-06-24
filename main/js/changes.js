window.onload = max_input()

function home(){
    window.location.href = './index.html'
}

function slide(){
    let verificacao = document.getElementById('saldo-parcela')
    let renda = Number(localStorage.getItem('renda'))
    let fixas = Number(localStorage.getItem('fixas'))
    let variaveis = Number(localStorage.getItem('variaveis'))
    let saldo = renda - fixas - variaveis
    let sliderValor = document.getElementById('span')
    let total = document.getElementById('total')
    let valorInicial = document.getElementById('input').value
    let parcela = document.getElementById('input-1').value
    let valorFinal = (valorInicial*(Math.pow(1 + 0.005, parcela)))/parcela
    valorFinal = parseFloat(valorFinal.toFixed(2))
    valorFinal = valorFinal.toString().replace('.', ',')
    sliderValor.textContent = `R$${valorInicial},00`
    total.textContent = `R$${valorFinal}`

    total = document.getElementById('total').innerHTML
    total = total.replace(',', '.')
    total = total.replace('R$', '')
    total = Number(total)
    if (total < saldo) {
        verificacao.innerHTML = 'Esta parcela se encaixa no seu orçamento! &#x1F601&#x2705'
    }else {
        verificacao.innerHTML = 'Esta parcela excede seu orçamento! &#x1F97A&#x274C'
    }

}

function slide1(){
    let verificacao = document.getElementById('saldo-parcela')
    let renda = Number(localStorage.getItem('renda'))
    let fixas = Number(localStorage.getItem('fixas'))
    let variaveis = Number(localStorage.getItem('variaveis'))
    let saldo = renda - fixas - variaveis
    let sliderValor = document.getElementById('span-1')
    let sliderParcela = document.getElementById('parcela')
    let total = document.getElementById('total')

    let valorInicial = document.getElementById('input').value
    let parcela = document.getElementById('input-1').value
    let valorFinal = (valorInicial*(Math.pow(1 + 0.005, parcela)))/parcela
    valorFinal = parseFloat(valorFinal.toFixed(2))
    valorFinal = valorFinal.toString().replace('.', ',')
    sliderParcela.textContent = `${parcela}x`
    sliderValor.textContent = `${parcela}x`
    total.textContent = `R$${valorFinal}`

    total = document.getElementById('total').innerHTML
    total = total.replace(',', '.')
    total = total.replace('R$', '')
    total = Number(total)
    if (total < saldo) {
        verificacao.innerHTML = 'Esta parcela se encaixa no seu orçamento! &#x1F601&#x2705'
    }else {
        verificacao.innerHTML = 'Esta parcela excede seu orçamento! &#x1F97A&#x274C'
    }
}

function max_input(){
    let input = document.getElementById('input')
    let renda = Number(localStorage.getItem('renda'))
    let valor = document.getElementById('valor-direita')
    let span = document.getElementById('span')
    let max = renda*4
    input.setAttribute('max', max)
    input.setAttribute('value', max/2)
    input = input.value
    valor.innerHTML = `R$${max}`
    span.innerHTML = `R$${input},00`


}

function resumo(){

    let verificacao = document.getElementById('saldo-parcela').innerHTML
    let erro = document.getElementById('erro-parcela')

    if (verificacao.indexOf('excede') != -1) {
        erro.innerHTML = 'Escolha uma parcela que se encaixe no seu orçamento!'
    }else {

        let validacao = document.getElementById('resumo')
    if (validacao != null) {
        validacao.innerHTML = ''
        let html = document.getElementById('conteudo')
        html.removeChild(validacao)
    }

    html = document.getElementById('conteudo')
    let resumo = document.createElement('div')
    resumo.id = 'resumo'
    html.appendChild(resumo)
    html = document.getElementById('resumo')

    resumo = document.createElement('div')
    html.appendChild(resumo)
    let p = document.createElement('p')
    p.innerHTML = 'Valor Empréstimo:'
    p.className = 'resumo_form'
    resumo.appendChild(p)

    let div = document.createElement('div')
    let sliderValor = document.getElementById('span').innerHTML
    div.id = 'resumo-emprestimo'
    div.className = 'resumo_form'
    div.innerHTML = sliderValor
    resumo.appendChild(div)

    resumo = document.createElement('div')
    html.appendChild(resumo)
    p = document.createElement('p')
    p.innerHTML = 'Parcelas:'
    p.className = 'resumo_form'
    resumo.appendChild(p)

    div = document.createElement('div')
    let parcela = document.getElementById('parcela').innerHTML
    div.id = 'resumo-parcelas'
    div.className = 'resumo_form'
    div.innerHTML = parcela
    resumo.appendChild(div)

    resumo = document.createElement('div')
    html.appendChild(resumo)
    p = document.createElement('p')
    p.innerHTML = 'Taxa de Juros:'
    p.className = 'resumo_form'
    resumo.appendChild(p)

    div = document.createElement('div')
    div.id = 'resumo-juros'
    div.className = 'resumo_form'
    div.innerHTML = '0,50% a.m'
    resumo.appendChild(div)

    resumo = document.createElement('div')
    html.appendChild(resumo)
    p = document.createElement('p')
    p.innerHTML = 'Dia Vencimento:'
    p.className = 'resumo_form'
    resumo.appendChild(p)

    div = document.createElement('div')
    div.id = 'resumo-vencimento'
    div.className = 'resumo_form'
    resumo.appendChild(div)
    div = document.getElementById('resumo-vencimento')
    let select = document.createElement('select')
    select.name = 'lista-vencimento'
    select.id = 'lista-vencimento'
    select.setAttribute('required', 'required')
    div.appendChild(select)
    select = document.getElementById('lista-vencimento')
    let option = document.createElement('option')
    option.innerHTML = 'Selecione o vencimento'
    select.appendChild(option)
    let contador = 1
    while (contador < 31) {
        option = document.createElement('option')
        option.value = contador
        option.innerHTML = contador
        select.appendChild(option)
        contador++
    }

    resumo = document.createElement('div')
    html.appendChild(resumo)
    p = document.createElement('p')
    p.innerHTML = 'Valor Total:'
    p.className = 'resumo_form'
    resumo.appendChild(p)

    div = document.createElement('div')
    div.id = 'resumo-total'
    div.className = 'resumo_form'
    let valorInicial = document.getElementById('span').innerHTML
    valorInicial = valorInicial.replace('R$', '')
    valorInicial = valorInicial.replace(',', '.')
    valorInicial = Number(valorInicial)
    parcela = document.getElementById('span-1').innerHTML
    parcela = parcela.replace('x', '')
    parcela = Number(parcela)
    let valorFinal = valorInicial*(Math.pow(1 + 0.005, parcela))
    valorFinal = parseFloat(valorFinal.toFixed(2))
    valorFinal = valorFinal.toString().replace('.', ',')
    div.innerHTML = `R$${valorFinal}`
    resumo.appendChild(div)

    resumo = document.createElement('div')
    html.appendChild(resumo)
    p = document.createElement('p')
    p.innerHTML = 'Valor Mensal:'
    p.className = 'resumo_form'
    resumo.appendChild(p)

    parcela = document.getElementById('total').innerHTML
    div = document.createElement('div')
    div.id = 'resumo-mensal'
    div.className = 'resumo_form'
    div.innerHTML = parcela
    resumo.appendChild(div)

    resumo = document.getElementById('resumo')
    let button = document.createElement('button')
    button.id = 'botao-finalizar'
    button.className = 'input_prosseguir'
    button.setAttribute('type', 'submit')
    button.setAttribute('onclick', 'finalizar()')
    button.innerHTML = 'Prosseguir'
    resumo.appendChild(button)

    let img = document.createElement('img')
    img.setAttribute('src', '../../images/whitelogo.png')
    resumo.appendChild(img)

    }
    
    
}

function finalizar(){
    window.location.href = './finalizar.html'
}