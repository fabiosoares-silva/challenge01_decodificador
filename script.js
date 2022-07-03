const inputTexto = document.querySelector('.input-texto')
const mensagem = document.querySelector('.mensagem')
let atualizaPagina = document.querySelector('#limpar')

function btnLimpaTexto() {
  inputTexto.value = ''
  mensagem.value = ''

  atualizaPagina = location.reload()
}

function btnEncriptar() {
  const textoEncriptado = encriptar(inputTexto.value)
  mensagem.value = textoEncriptado
  mensagem.style.backgroundImage = 'none'
}

function btnDesencriptar() {
  const textoDesencriptado = desencriptar(inputTexto.value)
  mensagem.value = textoDesencriptado
  mensagem.style.backgroundImage = 'none'
}

function encriptar(stringEncriptada) {
  let matrizCodigo = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat'],
  ]

  stringEncriptada = stringEncriptada.toLowerCase()

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      )
    }
  }

  return stringEncriptada
}

function desencriptar(stringDesencriptada) {
  let matrizCodigo = [
    ['ai', 'a'],
    ['enter', 'e'],
    ['imes', 'i'],
    ['ober', 'o'],
    ['ufat', 'u'],
  ]

  stringDesencriptada = stringDesencriptada.toLowerCase()

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][0])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      )
    }
  }

  return stringDesencriptada
}
