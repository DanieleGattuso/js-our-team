
// Creiamo l'array
const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "./img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "./img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "./img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "./img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "./img/female3.png"
  }
];

// Selezioniamo l'elemento di output
const divTeamMember = document.querySelector(".main_container")


// Creo una variabile con tutti gli oggetti
let attribute = "";

// Creo un ciclo per estrarre tutti gli elementi dall'array
for (let i = 0; i<teamMembers.length; i++){

  // Prelevo i dati dell'array
  teamMembersIesimo = teamMembers[i];
  
  
  
  // Creo una variabile che richiama tutti gli elementi iesimi degli oggetti
  const {name, role, email, img} = teamMembersIesimo;
  
  // Agiungo ad ogni ciclata attributi tramite la funzione creata prima
  attribute +=generaCardTeamMember(teamMembersIesimo)
  
}


// Stampo L'output nel div desiderato
divTeamMember.innerHTML = attribute;




// Creo una funziona che ogni volta richiamata genera tutta la parte html con il relativo css
function generaCardTeamMember(key) {

  // Creo una variabile che richiama tutti gli elementi degli oggetti
  const { name, role, email, img } = key;

  // Creo una variabile che stampa l'html richiamando gli oggetti con template literal
  let oggetto = `    
  <div class="cards_container">
          <img src="${img}" alt="${name}" />    
          <h3>${name}</h3>
          <p>${role}</p>
          <a href="#">${email}</a>
  </div>
  `
  // Stampo
  return oggetto


}
