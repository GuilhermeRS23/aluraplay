import { conectaAPI } from "./conectaAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function criarVideo(event) {
    event.preventDefault();

    const titulo = document.querySelector("[data-titulo]").value;
    const url = document.querySelector("[data-url]").value;
    const imagem = document.querySelector("[data-imagem]").value;
    const descricao = Math.floor(Math.random() * 10).toString();
    try {
        await conectaAPI.criarVideo(titulo, descricao, url, imagem)

        window.location.href = '../pages/envio-concluido.html';
    } catch(e) {
        const mensagemErro = document.querySelector("[data-mensagem-erro]");
        mensagemErro.innerHTML = e;
    } 
}

formulario.addEventListener('submit', event => criarVideo(event));
