import { login } from "./api.js";

export function inicializarLogin() {
  const form = document.getElementById("loginForm");
  const btnCadastro = document.getElementById("btnCadastro");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    try {
      const data = await login(user, pass);
      localStorage.setItem("user", user);
      localStorage.setItem("token", data.access_token);
      window.location.href = "dashboard.html";
    } catch {
      alert("Usuário ou senha inválidos!");
    }
  });

  btnCadastro?.addEventListener("click", () => {
    alert("Função de cadastro em desenvolvimento 🛠️");
  });
}

export function inicializarLogout() {
  const logoutBtn = document.getElementById("logout");
  logoutBtn?.addEventListener("click", () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = "index.html";
  });
}
