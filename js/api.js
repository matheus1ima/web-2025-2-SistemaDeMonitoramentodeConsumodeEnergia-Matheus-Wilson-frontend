const API_URL = "http://127.0.0.1:8000";

export async function login(username, password) {
  const response = await fetch(`${API_URL}/login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.detail || "Usuário ou senha inválidos");
  }

  const data = await response.json();
  localStorage.setItem("token", data.access_token);
  return data;
}

export async function getConsumo() {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/consumo/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar dados de consumo");
  }

  return response.json();
}
