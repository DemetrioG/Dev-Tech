function enviar() {
    let form1 = document.getElementById('nome-completo').value
    let form2 = document.getElementById('endereço').value
    let form3 = document.getElementById('celular').value
    let form4 = document.getElementById('cpf').value
    let form5  = document.getElementById('rg').value
    let insert = document.getElementById('erro-enviar')
    let conteudo = document.getElementById('conteudo')

    if(form1 == "" || form2 == "" || form3 == "" || form4 == "" || form5 == ""){
        insert.innerHTML = 'Algum dado não foi preenchido corretamente!'
    }else {    
        document.getElementById('nome-completo').value = ''
        document.getElementById('endereço').value = ''
        document.getElementById('celular').value = ''
        document.getElementById('cpf').value = ''
        document.getElementById('rg').value = ''

        conteudo.innerHTML = ''
        let p = document.createElement('p')
        p.innerHTML = 'Seus dados foram enviados para análise na Central Financeira.</br>'
        p.innerHTML += 'Logo entratemos em contato. &#x1F389'
        conteudo.appendChild(p)
    }
}