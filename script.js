function escolherCaverna() {
    document.getElementById("story").textContent = 
        "Você entrou na caverna e encontrou um dragão dormindo. Você pode tentar roubar seu tesouro ou sair silenciosamente.";
    document.querySelector(".choices").innerHTML = `
        <button onclick="roubarTesouro()">Roubar o tesouro</button>
        <button onclick="sairSilenciosamente()">Sair silenciosamente</button>
    `;
}

function escolherFloresta() {
    document.getElementById("story").textContent = 
        "Você foi para a floresta e encontrou um caminho que se divide em dois. Você pode seguir pela esquerda ou pela direita.";
    document.querySelector(".choices").innerHTML = `
        <button onclick="escolherEsquerda()">Seguir pela esquerda</button>
        <button onclick="escolherDireita()">Seguir pela direita</button>
    `;
}

// Opções dentro da caverna
function roubarTesouro() {
    document.getElementById("story").textContent = 
        "Você tentou roubar o tesouro, mas o dragão acordou! O que você vai fazer?";
    document.querySelector(".choices").innerHTML = `
        <button onclick="lutarComDragao()">Lutar com o dragão</button>
        <button onclick="fugir()">Fugir</button>
    `;
}

function sairSilenciosamente() {
    document.getElementById("story").textContent = 
        "Você saiu silenciosamente e continuou sua jornada, mas encontrou um estranho artefato mágico na saída da caverna. O que fazer?";
    document.querySelector(".choices").innerHTML = `
        <button onclick="pegarArtefato()">Pegar o artefato</button>
        <button onclick="deixarArtefato()">Deixar o artefato</button>
    `;
}

// Respostas dentro da caverna
function lutarComDragao() {
    document.getElementById("story").textContent = 
        "Você lutou bravamente, mas o dragão era muito forte. Fim da história.";
    document.querySelector(".choices").innerHTML = '<button onclick="reiniciar()">Recomeçar</button>';
}

function fugir() {
    document.getElementById("story").textContent = 
        "Você fugiu rapidamente e escapou do dragão. Fim da história.";
    document.querySelector(".choices").innerHTML = '<button onclick="reiniciar()">Recomeçar</button>';
}

function pegarArtefato() {
    document.getElementById("story").textContent = 
        "O artefato lhe deu poderes mágicos. Agora você é um mago poderoso. Fim da história.";
    document.querySelector(".choices").innerHTML = '<button onclick="reiniciar()">Recomeçar</button>';
}

function deixarArtefato() {
    document.getElementById("story").textContent = 
        "Você decidiu não tocar no artefato e seguiu sua jornada em paz. Fim da história.";
    document.querySelector(".choices").innerHTML = '<button onclick="reiniciar()">Recomeçar</button>';
}

// Opções na floresta
function escolherEsquerda() {
    document.getElementById("story").textContent = 
        "Você seguiu pela esquerda e encontrou um lago mágico. Há algo brilhando no fundo. O que você faz?";
    document.querySelector(".choices").innerHTML = `
        <button onclick="mergulharNoLago()">Mergulhar no lago</button>
        <button onclick="ignorarLago()">Ignorar o lago</button>
    `;
}

function escolherDireita() {
    document.getElementById("story").textContent = 
        "Você seguiu pela direita e encontrou um castelo misterioso. A porta está entreaberta. O que você faz?";
    document.querySelector(".choices").innerHTML = `
        <button onclick="entrarNoCastelo()">Entrar no castelo</button>
        <button onclick="ficarFora()">Ficar do lado de fora</button>
    `;
}

// Respostas na floresta
function mergulharNoLago() {
    document.getElementById("story").textContent = 
        "Você mergulhou no lago e encontrou um tesouro escondido. Fim da história.";
    document.querySelector(".choices").innerHTML = '<button onclick="reiniciar()">Recomeçar</button>';
}

function ignorarLago() {
    document.getElementById("story").textContent = 
        "Você ignorou o lago e seguiu seu caminho pela floresta. Fim da história.";
    document.querySelector(".choices").innerHTML = '<button onclick="reiniciar()">Recomeçar</button>';
}

function entrarNoCastelo() {
    document.getElementById("story").textContent = 
        "Você entrou no castelo e descobriu que ele estava assombrado! Fim da história.";
    document.querySelector(".choices").innerHTML = '<button onclick="reiniciar()">Recomeçar</button>';
}

function ficarFora() {
    document.getElementById("story").textContent = 
        "Você decidiu ficar do lado de fora do castelo e explorar o jardim. Fim da história.";
    document.querySelector(".choices").innerHTML = '<button onclick="reiniciar()">Recomeçar</button>';
}

function reiniciar() {
    document.getElementById("story").textContent = 
             "Você está em frente a uma caverna escura. O que você deseja fazer?";
    document.querySelector(".choices").innerHTML = `
        <button onclick="escolherCaverna()">Entrar na caverna</button>
        <button onclick="escolherFloresta()">Ir para a floresta</button>
    `;
}
