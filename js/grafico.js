export function desenharGrafico(dados) {
  const ctx = document.getElementById("graficoConsumo");
  if (!ctx) return;

  const labels = dados.map((d) => d.data);
  const valores = dados.map((d) => d.kwh);

  if (window.graficoExistente) window.graficoExistente.destroy();

  window.graficoExistente = new Chart(ctx, {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label: "Consumo (kWh)",
          data: valores,
          backgroundColor: "rgba(16, 185, 129, 0.6)",
          borderColor: "rgb(16, 185, 129)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: { y: { beginAtZero: true } },
    },
  });
}
