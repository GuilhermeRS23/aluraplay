import { conectaAPI } from "./conectaAPI.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideo(event) {
    event.preventDefault();

    const termoPesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaAPI.buscarVideo(termoPesquisa);

    const lista = document.querySelector("[data-lista]");

while (lista.firstChild) {
    lista.removeChild(lista.firstChild)
}

    busca.forEach(element => lista.appendChild(
        constroiCard(element.titulo, element.descricao, element.url, element.imagem)
    ));
}

const btnPesquisa = document.querySelector("[data-btn-pesquisa]");
btnPesquisa.addEventListener('click', event => buscarVideo(event));
