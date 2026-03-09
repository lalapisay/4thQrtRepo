
const moviename=document.getElementById("moviename").value;
const movieyear=document.getElementById("movieyear").value;
const moviegenre=document.getElementById("moviegenre").value;

const movieDetails = document.getElementById("movielist");

movieDetails.innerHTML =
`<h4>Movie Details:</h4>
document.write("Movie Name: " + moviename.value + "<br>");
document.write("Movie Year: " + movieyear.value + "<br>");
document.write("Movie Genre: " + moviegenre.value + "<br>");`;

