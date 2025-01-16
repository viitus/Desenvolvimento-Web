const form = document.getElementById("formulario");
const cadastrarBtn = document.getElementById("cadastrar");
const limparBtn = document.getElementById("limpar");
const container = document.getElementById("container");
let registros = [];

cadastrarBtn.addEventListener("click", () => {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const idade = document.getElementById("idade").value;
    const cidade = document.getElementById("cidade").value;

    if (!nome || !email || !telefone || !idade || !cidade) {
        alert("Preencha todos os campos!");
        return;
    }

    registros.push({ nome, email, telefone, idade, cidade });

    if (registros.length === 1) criarTabela();

    atualizarTabela();
    form.reset();
});

limparBtn.addEventListener("click", () => {
    registros = [];
    container.innerHTML = "";
});

function criarTabela() {
    container.innerHTML = `
        <table id="tabela">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Telefone</th>
                    <th>Idade</th>
                    <th>Cidade</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    `;
}

function atualizarTabela() {
    const tbody = document.querySelector("#tabela tbody");
    tbody.innerHTML = ""; // Limpa a tabela antes de adicionar novos registros

    registros.forEach((registro) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${registro.nome}</td>
            <td>${registro.email}</td>
            <td>${registro.telefone}</td>
            <td>${registro.idade}</td>
            <td>${registro.cidade}</td>
        `;
        tbody.appendChild(tr);
    });
}
