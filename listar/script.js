
window.addEventListener('load',() => {
    const ERROR_TO_RENDER = 'Students not Found'
    let listOfStudents = JSON.parse(localStorage.getItem('students')) || ERROR_TO_RENDER;

    if(listOfStudents != ERROR_TO_RENDER) {
        createResultElements(listOfStudents.length);
    }
    else {
        createPageWithNotFound();
    }


    
});

window.addEventListener('storage', (event) => {
   location.reload()

})

createPageWithNotFound = () => {
    let containerParent = document.getElementsByClassName('container');

    let pageNotFound = document.createElement('div')
    pageNotFound.setAttribute("class","notfound");

    let texto = document.createElement('h2');
    texto.innerHTML = "Nenhum Estudante encontrado!"

    let imagem = document.createElement('img');
    imagem.setAttribute('src','./notfound.jpg');
    imagem.setAttribute('alt','imagem do not found');

    pageNotFound.appendChild(imagem);
    pageNotFound.appendChild(texto);

    containerParent[0].appendChild(pageNotFound);

}



createResultElements = () => {
let timesToCreateStudents = JSON.parse(localStorage.getItem('students'));
let student = timesToCreateStudents
for(let i = 0; i < timesToCreateStudents.length; i++) {
    let containerParent = document.getElementsByClassName('container');

    let result = document.createElement('div')

    result.setAttribute("class","result");

    containerParent[0].appendChild(result);
    let ul = document.createElement('ul')


    let liNome = document.createElement('li');
    liNome.innerHTML = `<h3 id="h3-menu">${student[i].nome}</h3>`;

    let liCpf = document.createElement("li");
    liCpf.innerHTML = `<h5><i>CPF:  </i>${student[i].cpf}</h5>`;

    let liSexo = document.createElement("li");
    liSexo.innerHTML = `<h5><i>Sexo:  </i>${student[i].sexo}</h5>`;

    let liDataNascimento = document.createElement("li");
    liDataNascimento.innerHTML = `<h5><i>Data de Nascimento:  </i>${student[i].dataNascimento}</h5>`;

    let liEndereco = document.createElement("li");
    liEndereco.innerHTML = `<h5><i>Endereço:  </i>${student[i].endereco}</h5>`;

    let liEmail = document.createElement("li");
    liEmail.innerHTML = `<h5><i>E-mail:  </i>${student[i].email}</h5>`;

    let liCurso = document.createElement("li");
    liCurso.innerHTML = `<h5><i>Curso:  </i>${student[i].curso}</h5>`;

    let liMatricula = document.createElement("li");
    liMatricula.innerHTML = `<h5><i>Matricula:  </i>${student[i].matricula}</h5>`;

    let liTurno = document.createElement("li");
    liTurno.innerHTML = `<h5>Turno:  ${student[i].turno}</h5>`;



    ul.appendChild(liNome)
    ul.appendChild(liCpf);
    ul.appendChild(liSexo);
    ul.appendChild(liDataNascimento);
    ul.appendChild(liEndereco);
    ul.appendChild(liEmail);
    ul.appendChild(liCurso);
    ul.appendChild(liMatricula);
    ul.appendChild(liTurno);
    result.appendChild(ul);
    
    

}

}




