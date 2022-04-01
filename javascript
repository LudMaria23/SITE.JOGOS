
let email = document.getElementById("campo-email");

function enviarEmail() {
 let.emailDigitado = email.value;
 console.log(emailDigitado)
}

let listPromocoes = [{
        titulo: "Inserir título aqui",
        descricao: "Descrição aqui"
     },
    {
       titulo: "Inserir título aqui 2",
       descricao: "Inserir descrição aqui 2"
    },

    {
     titulo: "Inserir título aqui 3",
      descricao: "Inserir descrição aqui 3"
    },

 ]
 function renderizarPromocoes() {
   let espaco = document.getElementsById("container-destaques")

 let template = "";
    for (let index = 0; index < listPromocoes.length; index++) {
       const promocoes = listPromocoes[index];

         template += `   <div id="quadro-produto">
         <div class="produto">
            <img src="img/PRODUTO.png" alt="Produto">
            <a href="">
               <h3>${Promocoes.titulo}</h3>
              </a>
           <p>${Promocoes.descricao}</p>
         </div>
    </div>`
     }
 espaco.innerHTML = template;
 }

function openNav() {
 document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
 document.getElementById("myNav").style.width = "0%";
}

