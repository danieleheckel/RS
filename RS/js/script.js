const url = '/dados/dados_felinos'
console.log(url);

async function VIG() {
    const res = await fetch(url)
    const dados = await res.js()
    console.log(dados);
}

VIG()
