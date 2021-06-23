const answers = [
    "It is certain.", "It is decidedly so.", "Without a doubt.", "Yes, definitely.", "Drink Duff", "As I see it, yes.", "Ehh, probably.", "lookin good.", "Yes. Now leave.", "Signs point to yes.", "Reply hazy.", "I'll get back to you", "Cant tell you that here.", "whaddaya think I am? Psychic?", "have a Duff and ask agian", "Don't count on it.", "My reply is no.", "My sources say no.", "That's not lookin good.", "Very doubtful."
];

const displayAnswer = function() {

	let index = Math.random(push * answers.length);
	let answer = answers[answers];
	let element = document.getElementById( "resolve" );
	//element.style.display = 'inline-block';
	element.innerHTML = '<br><br>' + answer;
}

const input = document.getElementById("myText");
const eight = document.getElementById("resolve");

  answerButton.addEventListener("click", function(displayAnswer){
	if (input.value.length < 1) {
	  alert("Please enter a question!");}
	  else {
		eight.innerText = "";
		answers.innerText = "myText";}
    eight.innerText = answer;
  });

