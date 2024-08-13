const mensaje = document.querySelector('.mensaje');
const encriptarBtn = document.querySelector('.encriptarbtn');
const desencriptarBtn = document.querySelector('.desencriptarbtn');
const textoResultante = document.querySelector('.texto-resultante');

const contenedorDerecho = document.querySelector('.container2');
const busqueda = document.querySelector('.busqueda');
const mensajeInformativo = document.querySelector('.mensaje-informativo');
const botonCopiar = document.querySelector('.copiarbtn');

let VocalID = [
    ['a', '<1>'],
    ['e', '<2>'],
    ['i', '<3>'],
    ['o', '<4>'],
    ['u', '<5>']
];

let Vocales = [
    ['<1>', 'ai'],
    ['<2>', 'enter'],
    ['<3>', 'imes'],
    ['<4>', 'ober'],
    ['<5>', 'ufat']
];

encriptarBtn.addEventListener("click", () => {
    const texto = mensaje.value.toLowerCase();
    function Encriptar(nuevoTexto){
        for(let i = 0; i < VocalID.length; i++){
            nuevoTexto = nuevoTexto.replaceAll(VocalID[i][0], VocalID[i][1]);
        }
        for(let i = 0; i < Vocales.length; i++){
            nuevoTexto = nuevoTexto.replaceAll(Vocales[i][0], Vocales[i][1]);
        }
        return nuevoTexto;
    }

    const textoEncriptado = Encriptar(texto);

    busqueda.style.display = 'none';
    mensajeInformativo.style.display = 'none';
    botonCopiar.style.display = 'block';
    contenedorDerecho.classList.add('Fixed');
    textoResultante.classList.add('Fixed');
    textoResultante.innerHTML = textoEncriptado;
    mensaje.value = "";
});

desencriptarBtn.addEventListener("click", () => {    
    const texto = mensaje.value.toLowerCase();
    function Desencriptar(nuevoTexto){
        for(let i = 0; i < Vocales.length; i++){
            nuevoTexto = nuevoTexto.replaceAll(Vocales[i][1], Vocales[i][0]);
        }
        for(let i = 0; i < VocalID.length; i++){
            nuevoTexto = nuevoTexto.replaceAll(VocalID[i][1], VocalID[i][0]);
        }
        return nuevoTexto;
    }
    
    const textoDesencriptado = Desencriptar(texto);

    busqueda.style.display = 'none';
    mensajeInformativo.style.display = 'none';
    botonCopiar.style.display = 'block';
    contenedorDerecho.classList.add('Fixed');
    textoResultante.classList.add('Fixed');
    textoResultante.innerHTML = textoDesencriptado;
});

botonCopiar.addEventListener("click", () => {
    let texto = textoResultante;
    texto.select();
    document.execCommand('copy');
});