document.getElementById('olho').addEventListener('mousedown', function mostrar(){
    document.getElementById('senha').type = 'text'
})

document.getElementById('olho').addEventListener('mouseup', function esconder(){
    document.getElementById('senha').type = 'password'
})

document.getElementById('olho').addEventListener('mousemove', function esconder(){
    document.getElementById('senha').type = 'password'
})