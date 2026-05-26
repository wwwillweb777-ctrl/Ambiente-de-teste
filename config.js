// ==================================================
// ✅ ARQUIVO DE CONFIGURAÇÃO DO FIREBASE
// Projeto: ambiente-de-teste-b966a
// Banco de Dados: Realtime Database
// ==================================================

const CONFIG_FIREBASE = {
  apiKey: "AIzaSyAsrFAwToc89j32XX0juvW7C7VYgpGcdiE",
  authDomain: "ambiente-de-teste-b966a.firebaseapp.com",
  databaseURL: "https://ambiente-de-teste-b966a-default-rtdb.firebaseio.com",
  projectId: "ambiente-de-teste-b966a",
  storageBucket: "ambiente-de-teste-b966a.firebasestorage.app",
  messagingSenderId: "878588656595",
  appId: "1:878588656595:web:46596b60a49e840f4a8d26"
};

// ==================================================
// ✅ CONTAS DE ACESSO LIBERADAS
// AQUI VOCÊ CADASTRA QUEM PODE ENTRAR NO SISTEMA
// ==================================================

// 🟢 ACESSO TOTAL: PODE TUDO (VER, EDITAR, EXCLUIR, CADASTRAR)
const EMAIL_ADMIN = "williamempreiteiro007@gmail.com";       

// 🟡 ACESSO ATENDENTE: PODE VER PEDIDOS, ALTERAR STATUS E CADASTRAR PRODUTOS
const EMAIL_ATENDENTE = "mylenamilagre827@gmail.com";        

// 📋 LISTA GERAL DE QUEM ESTÁ AUTORIZADO A FAZER LOGIN
const CONTAS_AUTORIZADAS = [EMAIL_ADMIN, EMAIL_ATENDENTE];

// ==================================================
// ⚙️ CONFIGURAÇÕES EXTRAS DO SISTEMA (OPCIONAIS)
// ==================================================

// Definição de nível de acesso para cada e-mail
// Usado para liberar ou bloquear áreas específicas
const NIVEIS_ACESSO = {
  [EMAIL_ADMIN]: "admin",
  [EMAIL_ATENDENTE]: "atendente"
};

// ✅ FUNÇÃO PARA VERIFICAR SE O EMAIL ESTÁ LIBERADO
// (VAI USAR NO LOGIN PARA SABER SE PODE ENTRAR)
function verificarPermissao(email) {
  return CONTAS_AUTORIZADAS.includes(email);
}

// ✅ FUNÇÃO PARA PEGAR O NÍVEL DE ACESSO DO USUÁRIO
// (VAI USAR PARA SABER SE É ADMIN OU ATENDENTE)
function getNivelAcesso(email) {
  return NIVEIS_ACESSO[email] || "nenhum";
}
