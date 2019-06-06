// BEHAVIOR

// Fetch stuff
const getStuff = 'https://gist.githubusercontent.com/Emilou7397/e7e8eb9e8cde7752c366750c0d9c547d/raw/c9ca493ea7531f36a56bf31bfdc568c835ccce8a/portfolio.json';
let image, name, tagline, summary, who, what, when, where, why, how;
let dataVar;
let i = window.location.hash.substring(1);

// Do stuff with returned data
let doStuff = function (data) {
  dataVar = data;
  assign(dataVar);
};

let assign = function(dataVar) {
  let work = dataVar.works[i];
  console.log(dataVar.works[i]);

  let midpoint = Math.floor(work.image.length / 2 + 1);
  if (i == 4) {
    midpoint++;
  }

  let template1 = `<section id="workdetail">
  <a href="index.html">
    <img
      src="https://github.com/Emilou7397/portfolio-redesign/blob/master/img/close.png?raw=true"
      alt="close"
    />
  </a>`

  let template3 = `
  <section id="info" >
  <h1>${work.name}</h1>
  <h2>${work.tagline}</h2>
  <p>
    ${work.summary}
  </p>

  <h3>Who</h3>
  <p>
    ${work.who}
  </p>

  <h3>What</h3>
  <p>
    ${work.what}
  </p>

  <h3>When</h3>
  <p>
    ${work.when}
  </p>

  <h3>Where</h3>
  <p>
    ${work.where}
  </p>

  <h3>Why</h3>
  <p>
    ${work.why}
  </p>`

  if ( i == 3 ) {
    template3 = template3 + `<div id="typetester">
    <div>
      <textarea rows="2" wrap="soft" id="black" class="font">Summer of '81 Black - 36pt</textarea>

      <div class="wrapper">
      <div class="buttons black">
        <button class="twentyfour">24pt</button>
        <button class="thirtysix">36pt</button>
        <button class="fourtyeight">48pt</button>
        <button class="seventytwo">72pt</button>
      </div>

      <button><a href="files/Retro-Black.otf" download>Download</a></button>
      </div>
  
    </div>

    <div>
      <textarea rows="3" wrap="soft" id="outlines" class="font">Summer of '81 Outlines - 36pt</textarea>

      <div class="wrapper">
      <div class="buttons outlines">
        <button class="twentyfour">24pt</button>
        <button class="thirtysix">36pt</button>
        <button class="fourtyeight">48pt</button>
        <button class="seventytwo">72pt</button>
      </div>

      <button><a href="files/Retro-Outlines.otf" download>Download</a></button>
      </div>
  
    </div>

  <div>`
  }
  
  template3 = template3 + `</section>`;

  let template2 = `<section class="detailleft">`;
  let template4 = `<section class="detailright">` + template3;

  if (i == 0) {
    template2 = template2 + `
    <div class="imgwrapper">
      <video controls>
        <source src="img/google-doodle-full.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>`;
  }
  else if (i == 5) {
    template2 = template2 + `
    <div class="imgwrapper">
      <video controls>
        <source src="img/game-recording.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="imgwrapper"><img src="${work.image[0]}" alt="header image" /></div>`;
  }
  else {
    for (i = 0 ; i < work.image.length ; i++) {
      if (i < midpoint) {
        template2 = template2 + `<div class="imgwrapper"><img src="${work.image[i]}" alt="header image" /></div>`;
      }
      else {
        template4 = template4 + `<div class="imgwrapper"><img src="${work.image[i]}" alt="header image" /></div>`;
      }
    }
  }

  template2 = template2 + '</section>';

  template4 = template4 + '</section></section>';

  $("#detail").append(template1 + template2 + template4);

  let footer = `
    <footer>
      <p>\xA9 Copyright 1997 - ${currYear}</p>
      <p>Hey, you made it to the bottom! Congrats!</p>
    </footer>
  `

  $("#detail").append(footer);
}

/************************************
     GET JSON FROM API
   ************************************/
$.getJSON(getStuff, doStuff);

// Get current year for footer

var today = new Date();
var currYear = today.getFullYear();

function Footer() {
  return (
    React.createElement("footer", null,
    React.createElement("p", { class: "detail" }, "\xA9 Copyright 1997 - ", currYear),
    React.createElement("p", null , "Hey, you made it to the bottom! Congrats!")));
};


// Behavior for typeface tester

$('#detail').on('click', 'button', function(e) {
  console.log("click");
	let size = e.currentTarget.classList[0];
	let type = e.currentTarget.parentNode.classList[1];
	let textbox = $(`textarea#${type}`);
	if (size === "twentyfour"){
		textbox.css("font-size", "24pt");
	}
	else if (size === "thirtysix"){
		textbox.css("font-size", "36pt");
	}
	else if (size === "fourtyeight"){
		textbox.css("font-size", "48pt");
	}
	else{
		textbox.css("font-size", "72pt");
	}
});
