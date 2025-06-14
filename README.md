# Questionário de Retrospectiva de Projeto

Uma ferramenta front-end simples, eficaz e reutilizável para coletar feedback de equipes de forma assíncrona. O projeto foi criado como uma alternativa a reuniões de retrospectiva, permitindo que cada membro da equipe responda a perguntas-chave sobre os desafios, aprendizados e limitações de um projeto no seu próprio tempo.

O resultado é um arquivo de texto (`.txt`) padronizado e bem formatado, que compila todas as respostas, facilitando a análise e a criação da documentação final do projeto.

> **Sugestão:** substitua este texto por um screenshot do seu questionário

## ✨ Principais Funcionalidades

- **Interface Limpa e Profissional**: Um layout sem distrações, focado nas perguntas e respostas
- **Estrutura Pronta para Uso**: O questionário já vem dividido em seções estratégicas (ex: "Desafios e Dificuldades", "Limitações e Trabalhos Futuros")
- **Validação de Preenchimento**: Garante que todas as perguntas sejam respondidas antes de permitir a exportação, evitando envios incompletos
- **Exportação em `.txt`**: A funcionalidade principal. Compila todas as respostas em um único arquivo de texto formatado, com data e hora, pronto para ser compartilhado ou arquivado
- **Sem Dependências ou Backend**: Funciona 100% no navegador, garantindo privacidade (os dados não são enviados para nenhum servidor) e facilidade de uso
- **Facilmente Customizável**: As perguntas e títulos podem ser alterados com conhecimento básico de HTML e JavaScript

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Para a estrutura e o conteúdo do questionário
- **CSS3**: Para a estilização visual e a responsividade
- **JavaScript (Vanilla)**: Para a validação do formulário e a lógica de compilação e download das respostas

## 🚀 Como Usar

Existem duas maneiras de utilizar este projeto:

### Para Membros da Equipe (Preenchimento)

Se você precisa apenas responder ao questionário:

1. Abra o arquivo `index.html` em qualquer navegador web
2. Preencha todas as perguntas com atenção
3. Clique no botão **"Compilar e Baixar Respostas"**
4. Um arquivo `.txt` (ex: `respostas_retrospectiva_1678886400000.txt`) será baixado no seu computador
5. Envie este arquivo para o gestor ou responsável pelo projeto

### Para Gestores de Projeto (Reutilização)

Se você quer adaptar este questionário para o seu próprio projeto:

1. **Clone ou baixe o repositório**

2. **Altere as Perguntas (HTML)**:
   - Abra o arquivo `index.html`
   - Edite os textos dentro das divs `<div class="question-number">` e `<div class="question-text">` para cada uma das perguntas que deseja alterar
   - Você pode adicionar ou remover blocos `<div class="question">` conforme necessário

3. **Atualize os Títulos para Exportação (JavaScript)**:
   - Abra o arquivo `script.js`
   - Localize o objeto `titulosPerguntas` no topo do arquivo
   - Altere os textos das perguntas neste objeto para que correspondam exatamente às novas perguntas que você definiu no `index.html`
   - **Este passo é importante para que o arquivo `.txt` exportado tenha os títulos corretos**
   - Se você alterou o número de perguntas, ajuste a variável `totalQuestoes` na função `validarRespostas()`

4. **Pronto!** Agora você pode compartilhar o `index.html` com sua equipe

## 📂 Estrutura dos Arquivos

O código é mantido de forma simples e modular para facilitar a customização.

```
/
├── index.html   # Estrutura do questionário e textos das perguntas
├── style.css    # Estilização visual, cores e layout
└── script.js    # Validação e lógica para compilar e exportar as respostas
```

## 📋 Exemplo de Uso

1. **Distribuição**: Compartilhe o arquivo `index.html` com sua equipe
2. **Preenchimento**: Cada membro responde individualmente
3. **Coleta**: Receba os arquivos `.txt` de cada participante
4. **Análise**: Use as respostas compiladas para documentação ou melhorias futuras

## 🔧 Customização

Para personalizar o questionário:

- **Cores e Layout**: Edite o arquivo `style.css`
- **Perguntas**: Modifique o `index.html` e atualize o `script.js`
- **Validações**: Ajuste as regras no `script.js` conforme necessário

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

- Reportar bugs
- Sugerir melhorias
- Enviar pull requests
- Compartilhar ideias de novas funcionalidades
