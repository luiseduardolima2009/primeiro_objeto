function chama_aluno(){

    let aluno = {
        nome: 'Cristiano Ronaldo',
        idade: 15,
        altura: 1.87,
        nota: 9.0

};
    //alert(aluno.nome);

    document.getElementById('nome_aluno').textContent = 'Nome: ' + aluno.nome;
    document.getElementById('idade_aluno').textContent = 'Idade: ' + aluno.idade;
    document.getElementById('altura_aluno').textContent = 'Altura: ' + aluno.altura;
    document.getElementById('nota_aluno').textContent = 'Nota: ' + aluno.nota;

}