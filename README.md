<div align="center">

# 📚 Gestão de Tarefas Académicas

**Uma aplicação mobile moderna e intuitiva para estudantes organizarem o seu dia a dia.**

[![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

</div>

---

## 📱 Sobre o Projeto

Este projeto foi desenvolvido no âmbito da disciplina de **Programação de Dispositivos Móveis**. Trata-se de uma aplicação completa de gestão de tarefas académicas, construída com **React Native** e **Expo**, focada numa experiência de utilizador (UX) fluida e num design (UI) moderno e limpo.

### ✨ Funcionalidades Principais

- **Lista de Tarefas:** Visualização de todas as tarefas através de uma `FlatList` com cartões estilizados.
- **Gestão de Estado:** Possibilidade de marcar tarefas como concluídas diretamente na lista (com feedback visual imediato).
- **Detalhes da Tarefa:** Ecrã dedicado com a "ficha" completa da tarefa (título, disciplina, descrição, data e estado).
- **Adicionar Tarefas:** Formulário intuitivo com validação de campos obrigatórios (Título e Disciplina).
- **Contador Dinâmico:** Acompanhamento em tempo real do número de tarefas concluídas.
- **Design & UI:** Interface cuidada, paleta de cores coerente, ícones (`@expo/vector-icons`), sombras suaves e suporte para *SafeArea*.
- **Empty State:** Ecrã amigável quando não existem tarefas na lista.

---

## 🛠️ Tecnologias Utilizadas

- **[React Native](https://reactnative.dev/)** (JavaScript puro)
- **[Expo](https://expo.dev/)** (SDK 58)
- **[React Navigation](https://reactnavigation.org/)** (Native Stack)
- **[Expo Vector Icons](https://icons.expo.fyi/)** (Ionicons)

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- Aplicação **Expo Go** instalada no teu telemóvel (Android ou iOS).
- O telemóvel e o computador devem estar ligados à **mesma rede Wi-Fi**.

### Passo a passo

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/Dongo-28/GestaoTarefas
2. Entrar na pasta do projeto:
   ```bash
   cd GestaoTarefas
3. Instalar as dependências:
    ```bash
   npm install
4. Iniciar o servidor de desenvolvimento:
    ```bash
    npx expo start
5. Abrir no telemóvel:
    ```bash
    Lê o QR Code gerado no terminal utilizando a aplicação Expo Go.
## 📂 Estrutura de Ficheiros

```text
GestaoTarefas/
│
├── App.js                  # Ponto de entrada, estado global e navegação
│
├── screens/                # Ecrãs da aplicação
│   ├── HomeScreen.js       # Lista de tarefas e contador
│   ├── DetailsScreen.js    # Detalhes de cada tarefa
│   └── AddTaskScreen.js    # Formulário de criação e validação
│
├── assets/                 # Imagens e ícones estáticos
│
└── package.json            # Dependências e configurações do projeto
```

---

## 👨‍💻 Autor

Desenvolvido por **Amadeu Dongo Rocha**.

- 💼 **LinkedIn:** [Amadeu Dongo Rocha](https://www.linkedin.com/in/amadeu-dongo-rocha-828aab2b2)
- 🐙 **GitHub:** [Dongo-28](https://github.com/Dongo-28)

---

<p align="center">
  <i>Desenvolvido com ☕ e React Native.</i>
</p>