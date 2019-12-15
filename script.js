function ageInDays() {
  var birthYear = prompt("what year were you born.......my good friend ?");
  var ageInDayss = (2019 - birthYear) * 365;
  var h1 = document.createElement("h1");
  var textAnswer = document.createTextNode(
    "You are " + ageInDayss + " days old."
  );
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  document.getElementById("result").appendChild(h1);
}

function reset() {
  document.getElementById("ageInDays").remove();
}
