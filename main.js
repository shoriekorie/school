//RegEx, använder vid validering av formerna.
let regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
let regNamn = /^[A-Za-z\s]+$/;
let regNummer = /^[0-9\s- \+]{8,13}$/;

// Hämtar meny loggan och menyn
let navMeny = document.getElementById("js-mobil");
let menyToggle = document.getElementById("js-meny-logga");

// Togglar hamburgaren
menyToggle.addEventListener("click", function() {
  navMeny.classList.toggle("active");
});

// Kontakt formen i footern byter meddelande efter en loading animation.
let kontaktLaddare = document.querySelector("#kontakt-laddare");
let kontaktTitle = document.querySelector(".kontakt-title");
// Anropas efter en onsubmit på formen
function testaForm() {
  let email = document.getElementById("kontaktemail").value;
  let namn = document.getElementById("kontaktnamn").value;
  let txtarea = document.getElementById("kontakttxtarea").value;
  //Simpel validering av namn och e-mail
  if (regNamn.test(namn) == false || namn === "") {
    alert("Vänligen ange ditt namn med bokstäver bara.");
    return false;
  }
  else if (regEmail.test(email) == false || email === "") {
    alert("Du har angivit en ogiltlig e-mail");
    return false;
  }
  else if (txtarea === "") {
    alert("Du har inte skrivit något meddelande")
    return false;
  }
  // Om allt är ok, startas laddnings animation och anropar bytaKontaktText funktionen
  if (regEmail.test(email) && regNamn.test(namn) && txtarea) {
    let kontaktForm = document.querySelector(".form");
    kontaktLaddare.style.display = "block";
    kontaktForm.style.display = "none";
    setTimeout(bytaKontaktText, 2000);
  }
  return false;
}

// Tar bort laddaranimationen och lägger till ny text på skärmen
function bytaKontaktText() {
  console.log("bytekontakt");
  kontaktLaddare.style.display = "none";
  kontaktTitle.innerHTML =
    "Vi har tagit emot ditt meddelande och kommer höra av oss inom 24 timmar.";
}

//Lägger in alla knappar i Priser.html i en array, tar mig till medlemskapsformen vid klick.
let ansokan = document.querySelectorAll("button.ansokan-knapp");
for (let i = 0; i < ansokan.length; i++) {
  ansokan[i].addEventListener("click", function() {
    window.location.href = "#medlemsskap";
  });
}

// Medlemsskaps formen valideras och tas bort från display och lägger till ny text vid godkänd validering
// Lägger också till en animation innan nya texten.
let ansokTitle = document.querySelector(".ansokan-title");
let prisLaddare = document.querySelector("#laddare");

function prisValidering() {
    let fnamn = document.getElementById("fnamn").value;
    let enamn = document.getElementById("enamn").value;
    let epost = document.getElementById("epost").value;
    let tele = document.getElementById("tele").value;
    if (regNamn.test(fnamn) == false || fnamn === "") {
        alert("Vänligen ange ditt förnamn (bara bokstäver)");
        return false;
    }
    else if (regNamn.test(enamn) == false || enamn === "") {
        alert("Vänligen ange ditt efternamn (bara bokstäver)");
        return false;
    }
    else if (regEmail.test(epost) == false || epost === "") {
        alert("Vänligen ange din e-post adress");
        return false;
    }
    else if (regNummer.test(tele) == false || tele === "") {
        alert("Vänligen ange ditt telefon nummer (Bara siffror 8-13 siffror långt)");
        return false;
    }
    if (regNummer.test(tele) && regNamn.test(fnamn) && regNamn.test(enamn) && regEmail.test(epost) ) {
        let ansokForm = document.querySelector(".ansokan");
        prisLaddare.style.display = "block";
        ansokForm.style.display = "none";
        setTimeout(bytaText, 2000);
    }
    return false;
}

function bytaText() {
    laddare.style.display = "none";
    ansokTitle.innerHTML ="Tack för din ansökan, vi hör av oss till dig inom 24h timmar. Du kan också ringa oss på 080-08080808 eller komma in till gymmet.";
  }

// Tar bort laddaranimationen och lägger till ny text på sidan.
function bytaText() {
  laddare.style.display = "none";
  ansokTitle.innerHTML =
    "Tack för din ansökan, vi hör av oss till dig inom 24h timmar. Du kan också ringa oss på 080-08080808 eller komma in till gymmet.";
}

// Modalerna, boxarna som öppnas när man klickar på Bli medlam / logga in.
let btn = document.querySelectorAll("button.modal-button");
let modals = document.querySelectorAll(".modal");
let spans = document.getElementsByClassName("close");

// När man klickar på någon av knapparna öppnas en av modalerna
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("name"));
    modal.style.display = "block";
  });
}

// Stänger modalen när man klickar på X
for (let i = 0; i < spans.length; i++) {
  spans[i].addEventListener("click", function() {
    for (let index in modals) {
      if (typeof modals[index].style !== "undefined")
        modals[index].style.display = "none";
    }
  });
}

// Stänger modalen om man klickar utanför boxen med.
window.addEventListener("click", function(event) {
  if (event.target.classList.contains("modal")) {
    for (let index in modals) {
      if (typeof modals[index].style !== "undefined")
        modals[index].style.display = "none";
    }
  }
});

// Validator för registrerings formen, med animation laddaren..
let regLaddare = document.getElementById("register-laddare")
function testaRegister() {
    let registerFnamn = document.getElementById("registerfnamn").value;
    let registerEnamn = document.getElementById("registerenamn").value;
    let registerEmail = document.getElementById("registeremail").value;
    let registerPassword1 = document.getElementById("onepassword").value;
    let registerPassword2 = document.getElementById("twopassword").value;

    if (regNamn.test(registerFnamn) == false || registerFnamn === "") {
        alert("Vänligen ange ditt förnamn (bara bokstäver)");
        return false;
    }
    else if (regNamn.test(registerEnamn) == false || registerEnamn === "") {
        alert("Vänligen ange ditt efternamn (bara bokstäver)");
        return false;
    }
    else if (regEmail.test(registerEmail) == false || registerEmail === "") {
        alert("Vänligen ange din e-post adress");
        return false;
    }
    else if (registerPassword1.length < 5) {
        alert("Ditt lösenord måste vara minst 5 tecken långt")
        return false;
    }
    else if (registerPassword1 !== registerPassword2) {
        alert("Dina lösenord är inte lika");
        return false;
    }
    if (regNamn.test(registerFnamn) && regNamn.test(registerEnamn) && regEmail.test(registerEmail) && registerPassword1 === registerPassword2) {
        let registerForm = document.getElementById("register-form");
        regLaddare.style.display = "block";
        registerForm.style.display = "none";
        setTimeout(bytaRegText, 2000);
    }
    return false;
}

function bytaRegText() {
    regLaddare.style.display = "none";
    let regHeader = document.querySelector(".reg-header");
    regHeader.innerHTML = "Tack för din ansökan, du har fått en bekräftelse på din e-post";
}

//Validering av login..utan databas med ett exempel konto.
function testaLogin() {
    let loginMail = document.getElementById("loginemail").value;
    let loginPassword = document.getElementById("loginpassword").value;
    if(regEmail.test(loginMail) == false || loginMail === "") {
        alert("Du har inget angivit en epost-adress");
        return false;
    }
    else if(loginMail != "xgym@xgym.se" || loginPassword != "xgymxgym") {
        alert("Fel användernamn/lösenord");
        return false;
    }
    if (loginMail === "xgym@xgym.se" && loginPassword === "xgymxgym"){
        let loginHeader = document.querySelector(".login-header");
        let loginForm = document.getElementById("login-form");
        loginForm.style.display = "none";
        loginHeader.innerHTML = "Välkommen tillbaka " + loginMail;
    }
    console.log("apa");
    return false;
}
//Klickar man på någon av nyheterna tas man till respektive nyhet i nyheter.html
let nyhetEtt = document.getElementById("nyhet1-knapp");
let nyhetTwo = document.getElementById("nyhet2-knapp");
if(nyhetEtt) {
nyhetEtt.addEventListener("click", function() {
    window.location.href = "nyheter.html#nyhet1";
})
}
if(nyhetTwo) {
    nyhetTwo.addEventListener("click", function() {
        window.location.href = "nyheter.html#nyhet2";
    })
}

//Klickar man på någon av knapparna tas man till medlemskaps ansöks formen i priser.html eller till kampanjer.html
let provKnapp = document.getElementById("prov-knapp");
let medlemKnapp = document.getElementById("medlemskap-knapp");
if(provKnapp) {
    provKnapp.addEventListener("click", function() {
        window.location.href = "kampanjer.html#gratistraning";
    })
}

if(medlemKnapp) {
    medlemKnapp.addEventListener("click", function() {
        window.location.href = "priser.html#medlemsskap";
    })
}

/* Scrolla ner = Meny gömmer sig 
   Scrolla upp = Menyn kommer fram
   Används bara på stora skärmar.
*/
let scrolPos = window.pageYOffset;
window.onscroll = function() {
  let curScrolPos = window.pageYOffset;
  if (scrolPos > curScrolPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-50px";
  }
  scrolPos = curScrolPos;
};
