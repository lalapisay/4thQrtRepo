const movielist = document.getElementById("movielist");
const addmovie = document.getElementById("addmovie");
if (addmovie) {
    addmovie.addEventListener("click", function (event) {
        event.preventDefault();

        const title = document.getElementById("moviename").value;
        const year = document.getElementById("movieyear").value;
        const genre = document.getElementById("moviegenre").value;

        if (title.trim() !== "" && year.trim() !== "" && genre.trim() !== "" && genre !== "--Select Genre--") {
            const movieItem = document.createElement("div");
            movieItem.textContent = `${title} (${year}) - ${genre}`;
            movielist.appendChild(movieItem);

            document.getElementById("moviename").value = "";
            document.getElementById("movieyear").value = "";
            document.getElementById("moviegenre").value = "--Select Genre--";
        }
    });
}