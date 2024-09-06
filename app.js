function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    console.log(section);

    let campoPesquisa = document.getElementById("campo-pesquisa").value; 

    
      if(campoPesquisa == ""){
        section.innerHTML = "<p>Nenhuma modelo encontrada. Digite o nome da modelo</p>";
        return;
      }
    campoPesquisa = campoPesquisa.toLowerCase()
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        Tegs = dado.tags.toLowerCase()
    
        if (titulo.includes(campoPesquisa) 
            || descricao.includes(campoPesquisa) 
        || tags.includes(campoPesquisa)) {
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}.</p>
                    <a href=${dado.link} target="_blank">Mais Informações</a>    
                </div>
            `;
        }
    }

    if (!resultados ){ 
     resultados = "<p>Nenhuma modelo encontrada</p>"

    }

    section.innerHTML = resultados; // Atualiza o conteúdo da seção após o loop
}
