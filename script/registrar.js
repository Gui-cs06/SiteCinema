
function limparUsuarios() {
    localStorage.removeItem("usuarios");
}

function mostrarSalvos() {
    let usuariosSalvos = JSON.parse(localStorage.getItem("usuarios"));
    console.log(usuariosSalvos)
}

function salvarUsuario(login, nome, cpf, telefone, email, cep, endereco, bairro, numero, senha) {
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    usuarios.push({ login: login, nome: nome, cpf: cpf, telefone: telefone, email: email, cep: cep, endereco: endereco, bairro: bairro, numero: numero, senha: senha });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    window.location.href = "login.html";
    alert("Usuário Cadastrado Com Sucesso!");
}

function loginValido() {
    let usuariosSalvos = JSON.parse(localStorage.getItem("usuarios")) || [];
    let loginInvalido = usuariosSalvos.find(usuario => usuario.login === login);

    if (loginInvalido) {
        return false;
    } else {
        return true;
    }
}

function validaCPF(cpf) {
    cpf = cpf.replace(/\D+/g, '');
    if (cpf.length !== 11) return false;
    if (/^(\d)\1{10}$/.test(cpf)) return false;

    let soma = 0;
    for (let i = 1; i <= 9; i++) soma += parseInt(cpf.charAt(i - 1)) * (11 - i);
    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++) soma += parseInt(cpf.charAt(i - 1)) * (12 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(10))) return false;

    return true;
}

function telefoneValido(numero) {
    const apenasNumeros = numero.replace(/\D/g, '');
    return apenasNumeros.length === 11;
}


function validarCampo(input, condicaoValida) {
    input.classList.remove('validado-valido', 'validado-invalido');
    if (input.value.length > 0) {
        if (condicaoValida(input.value)) {
            input.classList.add('validado-valido');
        } else {
            input.classList.add('validado-invalido');
        }
    }
}

//começa a validação
const loginInput = document.getElementById('login');
const loginLabel = document.querySelector('label[for="login"]');

const nomeInput = document.getElementById('nome');
const nomeLabel = document.querySelector('label[for="nome"]');

const cpfInput = document.getElementById('cpf');
const cpfLabel = document.querySelector('label[for="cpf"]');

const telefoneInput = document.getElementById('telefone');
const telefoneLabel = document.querySelector('label[for="telefone"]');

const emailInput = document.getElementById('email');
const emailLabel = document.querySelector('label[for="email"]');

const cepInput = document.getElementById('cep');
const cepLabel = document.querySelector('label[for="cep"]');

const enderecoInput = document.getElementById('endereco');
const enderecoLabel = document.querySelector('label[for="endereco"]');

const bairroInput = document.getElementById('bairro');
const bairroLabel = document.querySelector('label[for="bairro"]');

const numeroInput = document.getElementById('numero');
const numeroLabel = document.querySelector('label[for="numero"]');

const senhaInput = document.getElementById('senha');
const senhaLabel = document.querySelector('label[for="senha"]');

const senhaCInput = document.getElementById('senhaC');
const senhaCLabel = document.querySelector('label[for="senhaC"]');

const botaoEnviar = document.getElementById("enviar");

loginInput.addEventListener('input', () => {
    validarCampo(loginInput, (login) => {
        let usuariosSalvos = JSON.parse(localStorage.getItem("usuarios")) || [];
        let loginInvalido = usuariosSalvos.find(usuario => usuario.login === login);

        if (loginInvalido || login.length < 4) {
            loginLabel.style.color = 'red';

            if (loginInvalido) {
                loginLabel.textContent = 'Login (já existe)';
            } else if (login.length < 4) {
                loginLabel.textContent = 'Login (mínimo 4 caracteres)';
            }

            return false;
        } else {
            loginLabel.style.color = '';
            loginLabel.textContent = 'Login';

            return true;
        }
    });
});

nomeInput.addEventListener('input', () => {
    const nome = nomeInput.value.trim().replace(/\s{2,}/g, ' ');
    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/;

    validarCampo(nomeInput, (nome) => {
        const partes = nome.split(' ').filter(p => p.length > 0);
        const nomeValido =
            partes.length >= 2 &&
            partes.every(p => p.length >= 2) &&
            regex.test(nome);

        if (!nomeValido) {
            nomeLabel.style.color = 'red';

            if (!regex.test(nome)) {
                nomeLabel.textContent = 'Nome Completo (caracteres inválidos)';
            } else if (partes.length < 2) {
                nomeLabel.textContent = 'Nome Completo (informe pelo menos dois nomes)';
            } else if (partes.some(p => p.length < 2)) {
                nomeLabel.textContent = 'Nome Completo (cada nome deve ter no mínimo 2 letras)';
            }
        } else {
            nomeLabel.style.color = '';
            nomeLabel.textContent = 'Nome Completo';
        }

        return nomeValido;
    });
});

cpfInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 9) {
        e.target.value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else if (value.length > 6) {
        e.target.value = value.replace(/(\d{3})(\d{3})(\d+)/, '$1.$2.$3');
    } else if (value.length > 3) {
        e.target.value = value.replace(/(\d{3})(\d+)/, '$1.$2');
    } else {
        e.target.value = value;
    }

    validarCampo(cpfInput, (cpf) => {
        const cpfLimpo = cpf.replace(/\D+/g, '');

        const cpfValido = validaCPF(cpfLimpo);

        if (!cpfValido) {
            cpfLabel.style.color = 'red';

            if (cpfLimpo.length < 11) {
                cpfLabel.textContent = 'CPF (incompleto)';
            } else {
                cpfLabel.textContent = 'CPF (inválido)';
            }
        } else {
            cpfLabel.style.color = '';
            cpfLabel.textContent = 'CPF';
        }

        return cpfValido;
    });
});

telefoneInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');

    if (value.length > 11) value = value.slice(0, 11);

    if (value.length >= 2 && value.length <= 6) {
        e.target.value = value.replace(/(\d{2})(\d+)/, '($1) $2');
    } else if (value.length > 6 && value.length <= 10) {
        e.target.value = value.replace(/(\d{2})(\d{4})(\d+)/, '($1) $2-$3');
    } else if (value.length === 11) {
        e.target.value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else {
        e.target.value = value;
    }

    validarCampo(telefoneInput, (numero) => {
        const apenasNumeros = numero.replace(/\D/g, '');
        const valido = apenasNumeros.length === 11;

        if (!valido) {
            telefoneLabel.style.color = 'red';

            if (apenasNumeros.length < 11) {
                telefoneLabel.textContent = 'Telefone (incompleto)';
            } else {
                telefoneLabel.textContent = 'Telefone (inválido)';
            }
        } else {
            telefoneLabel.style.color = '';
            telefoneLabel.textContent = 'Telefone';
        }

        return valido;
    });
});

emailInput.addEventListener('input', () => {
    validarCampo(emailInput, (email) => {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const valido = regexEmail.test(email);

        if (!valido) {
            emailLabel.style.color = 'red';

            if (email.trim() === '') {
                emailLabel.textContent = 'Email (obrigatório)';
            } else {
                emailLabel.textContent = 'Email (formato inválido)';
            }
        } else {
            emailLabel.style.color = '';
            emailLabel.textContent = 'Email';
        }

        return valido;
    });
});


cepInput.addEventListener('input', () => {
    let cep = cepInput.value.replace(/\D/g, '');

    cepInput.classList.remove('validado-valido', 'validado-invalido');

    if (cep.length > 8) cep = cep.slice(0, 8);

    if (cep.length >= 6) {
        cepInput.value = cep.replace(/(\d{5})(\d{0,3})/, '$1-$2');
    } else {
        cepInput.value = cep;
    }

    if (!/^\d{5}-\d{3}$/.test(cepInput.value)) {
        cepInput.classList.add('validado-invalido');
        cepLabel.style.color = 'red';
        cepLabel.textContent = 'CEP (formato inválido)';
        return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            if (!data.erro) {
                enderecoInput.value = data.logradouro;
                bairroInput.value = data.bairro;

                cepInput.classList.add('validado-valido');
                enderecoInput.classList.add('validado-valido');
                bairroInput.classList.add('validado-valido');

                cepLabel.style.color = '';
                cepLabel.textContent = 'CEP';
            } else {
                cepInput.classList.add('validado-invalido');
                cepLabel.style.color = 'red';
                cepLabel.textContent = 'CEP (não encontrado)';
            }
        })
        .catch(error => {
            console.error('Erro ao buscar CEP:', error);
            cepInput.classList.add('validado-invalido');
            cepLabel.style.color = 'red';
            cepLabel.textContent = 'CEP (erro na busca)';
        });
});

enderecoInput.addEventListener('input', () => {
    validarCampo(enderecoInput, (endereco) => {
        const texto = endereco.trim();
        const temTamanhoValido = texto.length >= 5;
        const regexEndereco = /^[A-Za-zÀ-ÿ0-9\s.,'-]+$/;
        const temCaracteresValidos = regexEndereco.test(texto);

        if (!temTamanhoValido) {
            enderecoLabel.style.color = 'red';
            enderecoLabel.textContent = 'Endereço (mínimo 5 caracteres)';
            return false;
        }

        if (!temCaracteresValidos) {
            enderecoLabel.style.color = 'red';
            enderecoLabel.textContent = 'Endereço (contém caracteres inválidos)';
            return false;
        }

        enderecoLabel.style.color = '';
        enderecoLabel.textContent = 'Endereço';
        return true;
    });
});

bairroInput.addEventListener('input', () => {
    validarCampo(bairroInput, (bairro) => {
        const texto = bairro.trim();
        const temTamanhoValido = texto.length >= 3;
        const regexBairro = /^[A-Za-zÀ-ÿ\s'-]+$/;
        const temCaracteresValidos = regexBairro.test(texto);

        if (!temTamanhoValido) {
            bairroLabel.style.color = 'red';
            bairroLabel.textContent = 'Bairro (mínimo 3 letras)';
            return false;
        }

        if (!temCaracteresValidos) {
            bairroLabel.style.color = 'red';
            bairroLabel.textContent = 'Bairro (contém caracteres inválidos)';
            return false;
        }

        bairroLabel.style.color = '';
        bairroLabel.textContent = 'Bairro';
        return true;
    });
});


numeroInput.addEventListener('input', () => {
    validarCampo(numeroInput, (numero) => {
        const texto = numero.trim();
        const naoVazio = texto.length > 0;
        const apenasCaracteresValidos = /^[0-9A-Za-z\s-]+$/.test(texto);
        const comecaComDigito = /^\d/.test(texto);

        if (!naoVazio) {
            numeroLabel.style.color = 'red';
            numeroLabel.textContent = 'Número (obrigatório)';
            return false;
        }

        if (!apenasCaracteresValidos) {
            numeroLabel.style.color = 'red';
            numeroLabel.textContent = 'Número (contém caracteres inválidos)';
            return false;
        }

        if (!comecaComDigito) {
            numeroLabel.style.color = 'red';
            numeroLabel.textContent = 'Número (deve começar com dígito)';
            return false;
        }

        numeroLabel.style.color = '';
        numeroLabel.textContent = 'Número';
        return true;
    });
});



senhaInput.addEventListener('input', () => {
    const senha = senhaInput.value;

    const temMaiuscula = /[A-Z]/.test(senha);
    const temMinuscula = /[a-z]/.test(senha);
    const temNumero = /[0-9]/.test(senha);
    const temEspecial = /[!@#\$%\^\&*\)\(+=._-]/.test(senha);

    const valido = senha.length >= 6 && temMaiuscula && temMinuscula && temNumero && temEspecial;

    validarCampo(senhaInput, () => valido);

    if (!valido) {
        senhaLabel.style.color = 'red';

        if (senha.length < 6) {
            senhaLabel.textContent = 'Senha (mínimo 6 caracteres)';
        } else if (!temMaiuscula) {
            senhaLabel.textContent = 'Senha (precisa ter letra maiúscula)';
        } else if (!temMinuscula) {
            senhaLabel.textContent = 'Senha (precisa ter letra minúscula)';
        } else if (!temNumero) {
            senhaLabel.textContent = 'Senha (precisa ter número)';
        } else if (!temEspecial) {
            senhaLabel.textContent = 'Senha (precisa ter caractere especial)';
        } else {
            senhaLabel.textContent = 'Senha (inválida)';
        }
    } else {
        senhaLabel.style.color = '';
        senhaLabel.textContent = 'Senha';
    }
});

senhaCInput.addEventListener('input', () => {
    const senhaConfirm = senhaCInput.value;
    const senhaOriginal = senhaInput.value;

    const valido = senhaConfirm === senhaOriginal && senhaConfirm.length >= 6;

    validarCampo(senhaCInput, () => valido);

    if (!valido) {
        senhaCLabel.style.color = 'red';

        if (senhaConfirm.length < 6) {
            senhaCLabel.textContent = 'Confirmar Senha (mínimo 6 caracteres)';
        } else {
            senhaCLabel.textContent = 'Confirmar Senha (as senhas não coincidem)';
        }
    } else {
        senhaCLabel.style.color = '';
        senhaCLabel.textContent = 'Confirmar Senha';
    }
});

//salvar no localStorage
botaoEnviar.addEventListener('click', () => {
    let login = loginInput.value.trim()
    let nome = nomeInput.value.trim();
    let cpf = cpfInput.value.trim();
    let telefone = telefoneInput.value.trim();
    let email = emailInput.value.trim();
    let cep = cepInput.value.trim();
    let endereco = enderecoInput.value.trim();
    let bairro = bairroInput.value.trim();
    let numero = numeroInput.value.trim();
    let senha = senhaInput.value.trim();

    salvarUsuario(login, nome, cpf, telefone, email, cep, endereco, bairro, numero, senha);
    /*
    nomeInput.value='';
    cpfInput.value='';
    telefoneInput.value='';
    emailInput.value='';
    cepInput.value='';
    enderecoInput.value='';
    bairroInput.value='';
    numeroInput.value='';
    senhaInput.value='';
    senhaCInput.value='';
    */
});
