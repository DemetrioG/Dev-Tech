const usuario = 'ADMINISTRADOR'
const senha = 'CREDITOPASSWORD'

const submit = document.getElementById('submitteste')

const verificarLogin = () => {
    let frmusuario = document.getElementById('usuario').value.toUpperCase()
    let frmsenha = document.getElementById('senha').value.toUpperCase()
    let insert = document.getElementById('insert')
    localStorage.setItem('usuario', frmusuario)

    if (frmusuario != usuario || frmsenha != senha) {
        return insert.innerHTML = "Senha incorreta, verifique os dados informados!"
    }

    return document.getElementById('form').submit()    
}

submit.addEventListener('click', () => verificarLogin())
