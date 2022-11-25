let swiper = new Swiper(".home", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let usuario = { nome: "", senha: "" };
let $nome = $("#nome");
let $senha = $("#senha");
let lsEL = localStorage.getItem("usuario");

if (lsEL != undefined) {
  usuario = JSON.parse(lsEL);
  $nome.val(usuario.nome);
  $senha.val(usuario.senha);
}

$("#form-login").submit((e) => {
  e.preventDefault();
  $("#telalogin").toggle();

usuario.nome = $nome.val();
usuario.senha = $senha.val();
let $checkbox = $("#salvarcredenciais").prop('checked');

  sessionStorage.setItem("usuario", JSON.stringify(usuario));

  if ($checkbox) {
    localStorage.setItem("usuario", JSON.stringify(usuario));
  }
  else {
    let apagar = localStorage.getItem("usuario");

    if (apagar != undefined) {
      localStorage.removeItem("usuario");
    }
  }

  $nome.val("");
  $senha.val("");
});

$('#botaologin').on('click', ()=>{
  
  $("#telalogin").toggle();

})

$('#x').on('click', ()=>{
  
  $("#telalogin").toggle();

})