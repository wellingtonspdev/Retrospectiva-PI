const titulosPerguntas = {
    q1: "1. Desafio Técnico Pessoal: Qual foi a maior dificuldade técnica que você enfrentou pessoalmente no projeto?",
    q2: "2. Complexidade do Código: Pensando no código que escrevemos, qual parte você achou mais complexa ou 'chata' de implementar e entender? Por quê?",
    q3: "3. Processo de Trabalho: Houve algum momento em que você sentiu que o progresso do time estava lento ou 'travado'? Se sim, o que você acha que foi a principal causa?",
    q4: "4. Maior Aprendizado: Qual foi o seu maior aprendizado com as dificuldades que enfrentamos?",
    q5: "5. Funcionalidade Faltante: Na sua opinião, qual é a principal funcionalidade que o nosso sistema não tem, mas que seria muito útil para o IBDN?",
    q6: "6. Próxima Prioridade: Se tivéssemos mais um mês para trabalhar neste projeto, qual seria a SUA prioridade número 1 para adicionar ou melhorar? Por quê?",
    q7: "7. 'Dívida Técnica': Existe alguma parte do nosso código que funciona, mas que você sabe que poderia ser melhorada em uma versão futura?",
    q8: "8. Considerações Finais: Algum outro desafio, dificuldade, limitação ou sugestão de melhoria que não foi coberto pelas perguntas acima?"
};

function validarRespostas() {
    const formData = new FormData(document.getElementById('retrospectivaForm'));
    const totalQuestoes = 8;
    let todasRespondidas = true;
    let questoesNaoRespondidas = [];

    for (let i = 1; i <= totalQuestoes; i++) {
        const fieldName = `q${i}`;
        // Verifica se o campo existe e se o valor, após remover espaços em branco, não está vazio.
        if (!formData.has(fieldName) || formData.get(fieldName).trim() === '') {
            todasRespondidas = false;
            questoesNaoRespondidas.push(`Questão ${i}`);
        }
    }

    if (!todasRespondidas) {
        alert(`Por favor, responda todas as questões obrigatórias. Faltando: ${questoesNaoRespondidas.join(', ')}`);
        return false;
    }
    return true;
}

function exportarRespostas() {
    if (!validarRespostas()) {
        return;
    }

    const formData = new FormData(document.getElementById('retrospectivaForm'));
    let resultadoTexto = "Respostas do Questionário de Retrospectiva - Projeto IBDN\n";
    resultadoTexto += "========================================================\n\n";
    
    // Adiciona a data e hora da exportação
    const dataAtual = new Date();
    resultadoTexto += `Exportado em: ${dataAtual.toLocaleDateString('pt-BR')} às ${dataAtual.toLocaleTimeString('pt-BR')}\n\n`;


    for (let i = 1; i <= 8; i++) {
        const nomeQuestao = `q${i}`;
        const tituloCompleto = titulosPerguntas[nomeQuestao];
        const respostaUsuario = (formData.get(nomeQuestao) || "Não respondida").trim();

        resultadoTexto += `--------------------------------------------------------\n`;
        resultadoTexto += `${tituloCompleto}\n`;
        resultadoTexto += `--------------------------------------------------------\n\n`;
        resultadoTexto += `RESPOSTA:\n${respostaUsuario}\n\n\n`;
    }

    resultadoTexto += "========================================================\n";
    resultadoTexto += "Fim do Relatório.\n";

    // Criar e baixar o arquivo de texto
    const blob = new Blob([resultadoTexto], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `respostas_retrospectiva_${Date.now()}.txt`; // Nome do arquivo com timestamp para ser único
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
    
    alert("Respostas compiladas com sucesso! O download do arquivo de texto foi iniciado.");
}