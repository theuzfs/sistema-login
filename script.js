const apiUrl = "http://localhost:3000";

function mostrarLogin() {
    document.getElementById("login").classList.remove("hidden");
    document.getElementById("cadastro").classList.add("hidden");
    document.getElementById("areaUsuario").classList.add("hidden");
    document.getElementById("usuarios").classList.add("hidden");
}

function mostrarCadastro() {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("cadastro").classList.remove("hidden");
    document.getElementById("areaUsuario").classList.add("hidden");
    document.getElementById("usuarios").classList.add("hidden");
}

function mostrarUsuarios() {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("cadastro").classList.add("hidden");
    document.getElementById("areaUsuario").classList.add("hidden");
    document.getElementById("usuarios").classList.remove("hidden");

    listarUsuarios();
}

function mostrarAreaUsuario() {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("cadastro").classList.add("hidden");
    document.getElementById("areaUsuario").classList.remove("hidden");
    document.getElementById("usuarios").classList.add("hidden");
}

async function cadastrarUsuario() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    const response = await fetch(`${apiUrl}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            email,
            password
        })
    });

    const data = await response.json();

    document.getElementById("registerMessage").innerText =
        data.message || data.error;

    if (response.ok) {
        document.getElementById("name").value = "";
        document.getElementById("registerEmail").value = "";
        document.getElementById("registerPassword").value = "";
    }
}

async function fazerLogin() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const response = await fetch(`${apiUrl}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    });

    const data = await response.json();

    if (!response.ok) {
        document.getElementById("loginMessage").innerText = data.error;
        return;
    }

    document.getElementById("loginMessage").innerText = "";

    document.getElementById("userInfo").innerText =
        `Nome: ${data.user.name} | E-mail: ${data.user.email}`;

    mostrarAreaUsuario();
}

async function listarUsuarios() {
    const response = await fetch(`${apiUrl}/users`);
    const users = await response.json();

    const usersList = document.getElementById("usersList");

    usersList.innerHTML = "";

    if (users.length === 0) {
        usersList.innerHTML = "<li>Nenhum usuário cadastrado ainda.</li>";
        return;
    }

    users.forEach(user => {
        const item = document.createElement("li");

        item.innerText = `${user.name} - ${user.email}`;

        usersList.appendChild(item);
    });
}

function logout() {
    document.getElementById("loginEmail").value = "";
    document.getElementById("loginPassword").value = "";
    document.getElementById("loginMessage").innerText = "";
    document.getElementById("userInfo").innerText = "";

    mostrarLogin();
}