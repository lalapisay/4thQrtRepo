const movielist = document.getElementById("movielist");
const addmovie = document.getElementById("addmovie");
if (addmovie) {
    addmovie.addEventListener("click", function (event) {
        event.preventDefault();

        const title = document.getElementById("moviename").value;
        const year = document.getElementById("movieyear").value;
        const genre = document.getElementById("moviegenre").value;

        if (title.trim() !== "" && year.trim() !== "" && genre.trim() !== "" && genre !== "--Select Genre--") {

            // Get selected rating and display as stars
            let ratingInput = document.querySelector('input[name="rating"]:checked');
            let rating = ratingInput ? parseInt(ratingInput.value) : 0;
            let stars = rating > 0 ? '★'.repeat(rating) : 'No rating';

            const movieItem = document.createElement("div");
            movieItem.className = "movie-box";
            movieItem.innerHTML = `${title} (${year}) - ${genre} | <span class="rating-overall">${stars}</span>`;

            // Create a new delete button for this movie entry
            const deleteButton = document.createElement("button");
            deleteButton.innerHTML = 'x';
            deleteButton.className = "delete";
            deleteButton.addEventListener("click", function () {
                movielist.removeChild(movieItem);
            });
            movieItem.appendChild(deleteButton);

            movielist.appendChild(movieItem);

            document.getElementById("moviename").value = "";
            document.getElementById("movieyear").value = "";
            document.getElementById("moviegenre").value = "--Select Genre--";
        }
    });
}