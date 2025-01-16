const form = document.getElementById("formulario");
const cadastrarBtn = document.getElementById("cadastrar");
const limparBtn = document.getElementById("limpar");
const tabelaContainer = document.getElementById("tabela-container");
const anteriorBtn = document.getElementById("anterior");
const proximoBtn = document.getElementById("proximo");

let registros = [];
let currentPage = 0;
const registrosPorPagina = 5;

function atualizarTabela() {
    tabelaContainer.innerHTML = "";

    const inicio = currentPage * registrosPorPagina;
    const fim = inicio + registrosPorPagina;
    const registrosPagina = registros.slice(inicio, fim);

    if (registrosPagina.length > 0) {
        const table = document.createElement("table");
        const thead = document.createElement("thead");
        const tbody = document.createElement("tbody");

        const headerRow = document.createElement("tr");
        ["Nome", "E-mail", "Telefone", "Endereço", "Idade", "Ações"].forEach(text => {
            const th = document.createElement("th");
            th.textContent = text;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);

        registrosPagina.forEach((registro, index) => {
            const row = document.createElement("tr");
            Object.values(registro).forEach(value => {
                const td = document.createElement("td");
                td.textContent = value;
                row.appendChild(td);
            });

            const actionTd = document.createElement("td");
            const removerBtn = document.createElement("button");
            removerBtn.textContent = "Remover";
            removerBtn.onclick = () => {
                registros.splice(inicio + index, 1);
                atualizarTabela();
            };
            actionTd.appendChild(removerBtn);
            row.appendChild(actionTd);

            tbody.appendChild(row);
        });

        table.appendChild(tbody);
        tabelaContainer.appendChild(table);

        atualizarNavegacao();
    }
}

function atualizarNavegacao() {
    anteriorBtn.style.display = currentPage > 0 ? "inline-block" : "none";
    proximoBtn.style.display = (currentPage + 1) * registrosPorPagina < registros.length ? "inline-block" : "none";
}

cadastrarBtn.onclick = () => {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const endereco = document.getElementById("endereco").value;
    const idade = document.getElementById("idade").value;

    if (nome && email && telefone && endereco && idade) {
        registros.push({ nome, email, telefone, endereco, idade });
        form.reset();
        atualizarTabela();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
};

limparBtn.onclick = () => {
    registros = [];
    currentPage = 0;
    tabelaContainer.innerHTML = "";
    atualizarNavegacao();
};

anteriorBtn.onclick = () => {
    if (currentPage > 0) {
        currentPage--;
        atualizarTabela();
    }
};

proximoBtn.onclick = () => {
    if ((currentPage + 1) * registrosPorPagina < registros.length) {
        currentPage++;
        atualizarTabela();
    }
};

atualizarNavegacao();