var nomes = []
var cavalosVelocidades = {
    "cavalo": [],
    "velocidade": []
}

var imagens = ['imagens-cavalos/cavalo-1.png', 'imagens-cavalos/cavalo-2.png', 'imagens-cavalos/cavalo-3.png', 'imagens-cavalos/cavalo-4.png', 'imagens-cavalos/cavalo-5.png', 'imagens-cavalos/cavalo-6.png', 'imagens-cavalos/cavalo-7.png']
var qtdCavalos = 0
var numeroVoltas = 0

var cavalo1 = 0
var cavalo2 = 0
var cavalo3 = 0
var cavalo4 = 0
var cavalo5 = 0
var cavalo6 = 0
var cavalo7 = 0

function mostrarCavalos() {
    qtdCavalos = comboUm.value
    var erro = true
    console.log("A (qtdCavalos) é: " + qtdCavalos)

    if (comboUm = '') {
        erro = false
        alert('Selecione a quantidade de cavalos.')
    }

    if (erro) {
        container.style.display = "none"
        containerCards.style.display = "flex"
        for (var i = 0; i < qtdCavalos; i++) {
            containerCards.innerHTML += `
                <div class="card">
                <p>Cavalo ${i + 1}</p>
                <div class="imagemCardContainer">
                <img src="${imagens[i]}" width="120px">
                </div>
                <p>Nome do cavalo:</p>
                <input id="nomeCavalo${i + 1}"></div>
                `
        }
        containerCadastro.innerHTML += `
            <div class="divDarNomes">
            <p>Quantas voltas terá a corrida?</p>
            <select id="comboDois">
                    <option selected disabled value="0">--Selecione--</option>
                    <option value="1">Uma volta</option>
                    <option value="2">Duas voltas</option>
                    <option value="3">Tres voltas</option>
                    <option value="4">Quatro voltas</option>
                    <option value="5">Cinco voltas</option>
                    <option value="6">Seis voltas</option>
                    <option value="7">Sete voltas</option>
                    <option value="8">Oito voltas</option>
                    <option value="9">Nove voltas</option>
                    <option value="10">Dez voltas</option>
                </select>
            <button onclick="validarCampos()">CORRIDA!</button> 
            </div>`
    }
}

/* AQUI VALIDA OS INPUTS DE NOMES DOS CAVALOS */
function validarCampos() {
    container.style.display = "none"
    var erro = false

    for (var i = 1; i <= qtdCavalos; i++) {
        let nomeCavalos = document.getElementById(`nomeCavalo${i}`).value
        document.getElementById(`nomeCavalo${i}`).style.background = "white"
        if (nomeCavalos == '') {
            erro = true
            document.getElementById(`nomeCavalo${i}`).style.background = "rgb(255, 33, 81)"
        }
    }

    if (erro) {
        alert('Preencha corretamente todos os nomes!')
    } else {
        for (let i = 1; i <= qtdCavalos; i++) {
            let nomeCavalos = document.getElementById(`nomeCavalo${i}`).value
            nomes.push(nomeCavalos)
            console.log(nomes)
        }
        containerCards.style.display = 'none'
        containerCadastro.style.display = 'none'
        containerCorrida.style.display = 'flex'
        containerVoltas.style.display = 'flex'

        /* AQUI CHAMA A FUNÇÃO ABAIXO */
        corrida()
    }
}

/* ESSA FUNÇÃO CADASTRA OS NOMES DOS INPUTS NO JSON, COM A VELOCIDADE */
function corrida() {
    numeroVoltas++
    if (numeroVoltas <= comboDois.value) {
        cardCorrida.innerHTML += `VOLTA ${numeroVoltas}:<br>`
        
        /* INSERINDO VALOR NO JSON */
        for (let i = 0; i < qtdCavalos; i++) {
            cavalosVelocidades.cavalo.push(nomes[i])
            cavalosVelocidades.velocidade.push((Math.random() * 2 + 7))
        }

        /* MOSTRANDO OS VALORES DO JSON, 
        ❌PORÉM TA ERRADO POR ENQUANTO */
        for (let i = 0; i <= comboDois.value; i++) {
            if (i < qtdCavalos) {
                cardCorrida.innerHTML += `
                    ${cavalosVelocidades.cavalo[i]}: 
                    ${(cavalosVelocidades.velocidade[i]).toFixed(2)}<br>
                `
                console.log(cavalosVelocidades)
            }
            
        }
        
    } else {
        /* FAZER ALGO PARA SUBSTITUIR O ALERT DEPOIS */
        alert('Todas as voltas já foram dadas')
    }
}




/* ---------------------------------------------------------- */
/* NAO LINKEI NADA AQUI AINDA, ESSAS FUNÇÕES NAO SAO CHAMADAS */
/* ---------------------------------------------------------- */

function geradorMath() {
    var contador = 1

    while (contador <= qtdCavalos) {

        if (contador == 1) {
            let aleatorio = Math.random()* 2 + 7
            cavalo1 = aleatorio 
        } else if (contador == 2) {
            let aleatorio2 = Math.random()* 2 + 7
            cavalo2 = aleatorio2 
        } else if (contador == 3) {
            let aleatorio3 = Math.random()* 2 + 7
            cavalo3 = aleatorio3 
        } else if (contador == 4) {
            let aleatorio4 = Math.random()* 2 + 7
            cavalo4 = aleatorio4 
        } else if (contador == 5) {
            let aleatorio5 = Math.random()* 2 + 7
            cavalo5 = aleatorio5 
        } else if (contador == 6) {
            let aleatorio6 = Math.random()* 2 + 7
            cavalo6 = aleatorio6 
        } else if (contador == 7) {
            let aleatorio7 = Math.random()* 2 + 7
            cavalo7 = aleatorio7 
        }
        contador++
    }
    console.log(cavalo1), console.log(cavalo2), console.log(cavalo3), console.log(cavalo4), 
    console.log(cavalo5), console.log(cavalo6), console.log(cavalo7)
}

/* setTimeout(largada(), 3000)  */
function largada() {
    var contador2 = 1

    var tempoTotal1 = 0
    var tempoTotal2 = 0
    var tempoTotal3 = 0
    var tempoTotal4 = 0
    var tempoTotal5 = 0
    var tempoTotal6 = 0
    var tempoTotal7 = 0

    var velocidade1 = 0
    var velocidade2 = 0
    var velocidade3 = 0
    var velocidade4 = 0
    var velocidade5 = 0
    var velocidade6 = 0
    var velocidade7 = 0


    while (contador2 <= qtdCavalos) {
        tempoTotal1 += cavalo1
        tempoTotal2 += cavalo2
        tempoTotal3 += cavalo3
        tempoTotal4 += cavalo4
        tempoTotal5 += cavalo5
        tempoTotal6 += cavalo6
        tempoTotal7 += cavalo7


        velocidade1 = cavalo1
        velocidade2 = cavalo2
        velocidade3 = cavalo3
        velocidade4 = cavalo4
        velocidade5 = cavalo5
        velocidade6 = cavalo6
        velocidade7 = cavalo7

        for (var i = 0; i < qtdCavalos; i++) {
            containerCorrida.innerHTML += `
                <div class="voltasCards">
                <p>Nome do cavalo: ${i + 1}</p>
                <img src="${imagens[i]}" height="50px" width="auto">
                </div>
                `
        }
        /* 
                if (contador2 == 1) {
                    div_corrida.innerHTML += `${nomes[contador2 - 1]} - Velocidade: ${velocidade1.toFixed(1)} - Tempo: ${tempoTotal1.toFixed(2)} <br>`
                    contador2++
                }
                else if (contador2 == 2) {
                    div_corrida.innerHTML += `${nomes[contador2 - 1]} - Velocidade: ${velocidade2.toFixed(1)} - Tempo: ${tempoTotal2.toFixed(2)} <br>`
                    contador2++
                }
                else if (contador2 == 3) {
                    div_corrida.innerHTML += `${nomes[contador2 - 1]} - Velocidade: ${velocidade3.toFixed(1)} - Tempo: ${tempoTotal3.toFixed(2)} <br>`
                    contador2++
                }
                else if (contador2 == 4) {
                    div_corrida.innerHTML += `${nomes[contador2 - 1]} - Velocidade: ${velocidade4.toFixed(1)} - Tempo: ${tempoTotal4.toFixed(2)} <br>`
                    contador2++
                }
                else if (contador2 == 5) {
                    div_corrida.innerHTML += `${nomes[contador2 - 1]} - Velocidade: ${velocidade5.toFixed(1)} - Tempo: ${tempoTotal5.toFixed(2)} <br>`
                    contador2++
                }
                else if (contador2 == 6) {
                    div_corrida.innerHTML += `${nomes[contador2 - 1]} - Velocidade: ${velocidade6.toFixed(1)} - Tempo: ${tempoTotal6.toFixed(2)} <br>`
                    contador2++
                }
                else if (contador2 == 7) {
                    div_corrida.innerHTML += `${nomes[contador2 - 1]} - Velocidade: ${velocidade7.toFixed(1)} - Tempo: ${tempoTotal7.toFixed(2)} <br>`
                    contador2++
                }
        
            } */


    }
}
