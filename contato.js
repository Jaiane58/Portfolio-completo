const dadosForm = document.querySelectorAll(".input");
const botaoEnviar = document.getElementsByClassName("botao");

botaoEnviar[0].addEventListener('click', function(){
    dadosForm.forEach(element => {
        if (element.value) {
			element.classList.remove('bordaVermelha');
			element.classList.add('bordaVerde');


			element.parentElement.children[1].setAttribute('hidden', true);
		} else {
			element.classList.add('bordaVermelha')
			element.classList.remove('bordaVerde')
		}

    })
})