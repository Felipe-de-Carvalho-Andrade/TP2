function checklogin(user){
  user.forEach((nomes) => {
    if (nomes.nome == $("#nome").val() && nomes.senha == $("#senha").val()) {
      usuario.senha = nomes.senha;
      usuario.nome = nomes.nome;
      sessionStorage.setItem("usuario", JSON.stringify(usuario));
      localStorage.setItem("usuario", JSON.stringify(usuario));
      return 0;
  }});
return 1;
}

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

let usuario = {
  nome: "",
  senha: "",
};

let user;

let us = localStorage.getItem("usuario");
if (us != undefined) {
  let usuario = JSON.parse(us);
  $("#nome").val(usuario.nome);
  $("#senha").val(usuario.senha);
}

$("#submit").on("click", () => {
  if (
    $("#nome").val() == "" ||
    $("#senha").val() == "" ||
    $("#nome").val() == " " ||
    $("#senha").val() == " "
  ) {
    alert("preencher todos os campos");
    return false;
  }
  $.ajax({
    url: "enviar.php",
    method: "POST",
    data: { nome: $("#nome").val(), senha: $("#senha").val() },
    success: () => {
      if ($("#check").prop("checked")) {
        usuario.nome = $("#nome").val();
        usuario.senha = $("#senha").val();

        localStorage.setItem("usuario", JSON.stringify(usuario));
      }

      $("#nome").val("");
      $("#senha").val("");
      alert("cadastro efetuado");
      $("#telalogin").toggle();
    },
  });
});

$("#login").on("click", () => {
  if (
    $("#nome").val() == "" ||
    $("#senha").val() == "" ||
    $("#nome").val() == " " ||
    $("#senha").val() == " "
  ) {
    alert("preencher todos os campos");
    return false;
  }

  $.ajax({
    url: "receber.php",
    success: (re) => {
      user = JSON.parse(re);
      user.pop();
      if (checklogin(user) == 1) {
        alert("dados incorretos");
        return false;
      }
      $("#botaologin").before('<div class="login">' + usuario.nome + "</div>");
      $("#botaologin").remove();
      $("#botaocadastro").remove();

      $("#nome").val("");
      $("#senha").val("");
      $("#telalogin").toggle();
    },
  });
});

$("#botaocadastro").on("click", () => {
  $("#telalogin").toggle();
  $("legend b").html("cadastre-se");
  $("#check").css("visibility", "inherit");
  $("[for=check]").css("visibility", "inherit");
  $("#login").css("display", "none");
  $("#submit").css("display", "inherit");
});

$("#botaologin").on("click", () => {
  $("#telalogin").toggle();
  $("legend b").html("login de conta");
  $("#check").css("visibility", "hidden");
  $("[for=check]").css("visibility", "hidden");
  $("#submit").css("display", "none");
  $("#login").css("display", "inherit");
});

$("#x").on("click", () => {
  $("#telalogin").toggle();
});
