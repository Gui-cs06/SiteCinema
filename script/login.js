        const loginInput = document.getElementById('login');
        const emailInput = document.getElementById('email');
        const senhaInput = document.getElementById('senha');
        const botaoEnviar = document.getElementById('enviar');

        function fazerLogout() {
            localStorage.removeItem("sessao");
        }

        function mostrarSalvos() {
            let usuariosSalvos = JSON.parse(localStorage.getItem("usuarios"));
            console.log(usuariosSalvos)
        }

        function mostrarSessao() {
            let sessaoSalva = JSON.parse(localStorage.getItem("sessao"));
            console.log(sessaoSalva)
        }

        function fazerLogin(login, email, senha) {
            let usuariosSalvos = JSON.parse(localStorage.getItem("usuarios")) || [];
            let loginValido = usuariosSalvos.find(usuario => usuario.login === login);
            
            if (loginValido) {
                let emailValido = loginValido.email === email;
                let senhaValida = loginValido.senha === senha;
                if (emailValido) {

                    if (senhaValida) {
                        localStorage.removeItem("sessao");
                        localStorage.setItem("sessao", JSON.stringify({ ativa: true, login: login, email: email, senha: senha }));
                        location.href = "../index.html";
                    } else {
                        alert("Senha Incorreta");
                    }
                } else {
                    alert("Email Incorreto")
                }
            } else {
                alert("Login Inválido");
            }
        }

        botaoEnviar.addEventListener('click', () => {
            let login = loginInput.value.trim();
            let email = emailInput.value.trim();
            let senha = senhaInput.value.trim();

            if (login != "" && email != "" && senha != "") {
                fazerLogin(login, email, senha);
            }

            else {
                alert('Por favor, preencha todos os campos.');
            }
        });

