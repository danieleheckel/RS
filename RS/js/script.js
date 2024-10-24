const url = 'https://github.com/danieleheckel/api.json/blob/main/dados/dados_felinos.js'
console.log(url);

async function VIG() {
    const res = await fetch(url)
    const dados = await res.js()
    console.log(dados);
}

VIG()
