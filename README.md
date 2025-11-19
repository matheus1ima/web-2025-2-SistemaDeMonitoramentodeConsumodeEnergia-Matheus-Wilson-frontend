# web-2025-2-SistemaDeMonitoramentodeConsumodeEnergia-Matheus-Wilson-frontend
# ⚡ Sistema de Monitoramento de Consumo de Energia - Frontend

## 👥 Integrantes
- Antônio Matheus de Oliveira Lima
- José Wilson Bezerra Neto

---

## 📝 Descrição do Projeto
É uma aplicação web voltada ao monitoramento de consumo de energia elétrica.  
Este repositório contém o **frontend**, responsável pela interface gráfica e interação do usuário com os dados fornecidos pela API do backend.

O sistema exibe gráficos de consumo, metas mensais e estatísticas de eficiência energética.

---

## 🧠 Tecnologias Utilizadas
- **React.js** (biblioteca principal)
- **Vite** (ambiente de desenvolvimento)
- **Axios** (requisições HTTP)
- **TailwindCSS** (estilização)
- **Chart.js / Recharts** (gráficos)

---

## ⚙️ Instruções para Executar o Projeto

### 1. Clone o repositório:
```bash
git clone https://github.com/usuario/web-2025-2-SistemaDeMonitoramentodeConsumodeEnergia-Matheus-Wilson-frontend.git
cd web-2025-2-SistemaDeMonitoramentodeConsumodeEnergia-Matheus-Wilson-frontend
```
### 2. Instale as dependências:
```bash
npm install
```
### 3. Configure o arquivo .env:

Crie um arquivo .env na raiz com a URL da API:
```bash
VITE_API_URL=http://127.0.0.1:8000
```
### 4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```
### 5. Acesse a aplicação:

http://localhost:5173


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
