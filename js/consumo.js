import { getConsumo } from "./api.js";
import { desenharGrafico } from "./grafico.js";
import { verificarMeta } from "./meta.js";

export let dadosGlobais = [];

export async function carregarConsumo() {
  try {
    const dados = await getConsumo();
    dadosGlobais = dados;

    const tbody = document.getElementById("tabelaConsumo");
    const totalHoje = document.getElementById("totalHoje");
    const custoHoje = document.getElementById("custoHoje");
    const totalDias = document.getElementById("totalDias");

    tbody.innerHTML = "";
    dados.forEach((d) => {
      tbody.innerHTML += `
        <tr class="hover:bg-gray-50">
          <td class="p-2">${d.data}</td>
          <td class="p-2">${d.kwh}</td>
          <td class="p-2">R$ ${d.custo.toFixed(2)}</td>
          <td class="p-2">${d.observacao || "-"}</td>
        </tr>`;
    });

    if (dados.length > 0) {
      const ultimo = dados[dados.length - 1];
      totalHoje.textContent = ultimo.kwh.toFixed(2);
      custoHoje.textContent = ultimo.custo.toFixed(2);
      totalDias.textContent = dados.length;
    }

    desenharGrafico(dados);
    verificarMeta(dados);
  } catch (error) {
    console.error("Erro ao carregar consumo:", error);
  }
}
