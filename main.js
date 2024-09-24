const url = 'https:githubusercontent.com/Guilhermemeonrails/api/main/dados-globais.js'
console.log(url);

async function visualizarInformaçõesGlobais (){
const res = await fetch(url);
const dados = await res.json();
const paragrafo = document.createElement('p')
paragrafo.classList.add('graficos-container_texto')
paragrafo.innerHTML = 'Você sabia que o mundo tem
${dados.total_pessoas_mundo} de pessoas e 
que aproximadamente ${dados.total_pessoas_conectadas}
estão conectadas em alguma rede social e passam em média
${dados.tempo_medio} horas conectadas.'
console.log(paragrafo)
}
viasualizaInformacosGlobais()