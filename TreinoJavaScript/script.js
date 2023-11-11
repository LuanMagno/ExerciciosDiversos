function LerDados() {
    let Dados = localStorage.getItem('Usuario');
    let DadosUsuario = {};
    if (Dados) {
        DadosUsuario = JSON.parse(Dados);
    } else {
        DadosUsuario = { Contatos: [{ nome: "Insira Nome", telefone: "000000000" }] };
    }
    return DadosUsuario;
}

function SalvarDados(DadosUsuario) {
    localStorage.setItem('Usuario', JSON.stringify(DadosUsuario));
}

function IncluirContato() {
    let DadosUsuario = LerDados();
    let Nome = document.getElementById('Nome').value;
    let Telefone = document.getElementById('Telefone').value;
    let NovoContato = {
        nome: Nome,
        telefone: Telefone
    };
    DadosUsuario.Contatos.push(NovoContato);
    SalvarDados(DadosUsuario);
}

function MostrarDados() {
    let ExibeDados = document.getElementById('ExibeDados');
    let HTMLnaDIV = '';
    let DadosUsuario = LerDados();
    for (let i = 0; i < DadosUsuario.Contatos.length; i++) {
        HTMLnaDIV += `<p>${DadosUsuario.Contatos[i].nome} - ${DadosUsuario.Contatos[i].telefone}</p>`;
    }
    ExibeDados.innerHTML = HTMLnaDIV;
}

//ConfigBotoes
document.getElementById('CarregarDados').addEventListener('click', MostrarDados);
document.getElementById('Salvar').addEventListener('click', IncluirContato);
