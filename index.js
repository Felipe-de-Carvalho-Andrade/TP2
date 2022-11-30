function checklogin(user) {
  user.forEach((nomes) => {
    if (nomes.nome == $("#nome").val() && nomes.senha == $("#senha").val()) {
      usuario.senha = nomes.senha;
      usuario.nome = nomes.nome;
      sessionStorage.setItem("usuario", JSON.stringify(usuario));
      localStorage.setItem("usuario", JSON.stringify(usuario));
      return 0;
    }
  });
  return 1;
}

//Slide
let swiper = new Swiper("#fundo", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//Trailer
for (let i = 0; i < $(".bx-play").length; i++) {
  $(".bx-play")[i].onclick = () => {
    $(".video-container")[i].classList.add("show-video");
    $(".trailer")[i].play();
  };
  $(".close-video")[i].onclick = () => {
    $(".video-container")[i].classList.remove("show-video");
    $(".trailer").pause();
  };
}

//Menu
addEventListener("scroll", () => {
  $("header").toggleClass("menu-cor", window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");

menu.onclick = () => {
  $("#menu-icon").toggleClass("bx-x");
  $(".menu").toggleClass("ativo");
};
window.onscroll = () => {
  $("#menu-icon").removeClass("bx-x");
  $(".menu").removeClass("ativo");
};

//Login e Cadastro
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

$("#adicionar").click(() => {
  $("#adicionar-lista").toggle();
});
let filmes;

let es = localStorage.getItem("filmes");
if (es != undefined) {
  filmes = JSON.parse(es);
} else {
  filmes = [
    {
      nome: "Kill Bill",
      descricao: " filme ai",
      poster:
        "https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2021/07/01/698803739-kill-bill-uma-thurman.jpg",
      genero: "Ação",
    },
    {
      nome: "Kill Bifgdfgll",
      descricao: " filfgdme ai",
      poster:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FKill_Bill&psig=AOvVaw0seRajd-ubeMDyhkEaQRAk&ust=1669906526797000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCIDC7-GU1vsCFQAAAAAdAAAAABAD",
      genero: "Ação",
    },
  ];
}

filmes.forEach((se) => {
  $("#a").append(
    "<li> <h1>" +
      se.nome +
      "<h1> <br> <img src='" +
      se.poster +
      "'> <p>" +
      se.descricao +
      "</p><p>" +
      se.genero +
      "</p></li>"
  );
});

$("#novo").click(() => {
  filmes[filmes.length].nome = $("#titulo").val();
  filmes[filmes.length].descricao = $("#descricao").val();
  filmes[filmes.length].poster = $("#poster").val();
  filmes[filmes.length].genero = $("#sele").val();

  localStorage.setItem("filmes", JSON.stringify(filmes));
});
