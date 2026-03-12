const movieListElement = document.getElementById("movielist");
const addmovie = document.getElementById("addmovie");
if (addmovie) {
    addmovie.addEventListener("click", function (event) {
        event.preventDefault();

        const title = document.getElementById("moviename").value;
        const year = document.getElementById("movieyear").value;
        const genre = document.getElementById("moviegenre").value;

        // Removed unnecessary individual sessionStorage items

        if (title.trim() !== "" && year.trim() !== "" && genre.trim() !== "" && genre !== "--Select Genre--") {
            // Get selected rating and display as stars
            let ratingInput = document.querySelector('input[name="rating"]:checked');
            let rating = ratingInput ? parseInt(ratingInput.value) : 0;
            let newMovie = { title, year, genre, rating };
            let movielist = JSON.parse(sessionStorage.getItem("movielist")) || [];
            let i = movielist.findIndex(function(movie) {
                return movie.title === title.toLowerCase();
            });
            if (i !== -1) {
                movielist[i] = newMovie;
            } else {
                movielist.push(newMovie);
            }
            sessionStorage.setItem("movielist", JSON.stringify(movielist));

            // Rebuild the displayed list
            movieListElement.innerHTML = "";
            movielist.forEach(function(movie) {
                let stars = movie.rating > 0 ? '★'.repeat(movie.rating) : 'No rating';
                const movieItem = document.createElement("div");
                movieItem.className = "movie-box";
                movieItem.innerHTML = `${movie.title} (${movie.year}) - ${movie.genre} | <span class="rating-overall">${stars}</span>`;
                const deleteButton = document.createElement("button");
                deleteButton.type = "button";
                deleteButton.innerHTML = 'x';
                deleteButton.className = "delete";
                deleteButton.addEventListener("click", function () {
                    let confirmCancel = confirm(`Are you sure you want to delete "${movie.title}"?`);
                    if (confirmCancel) {
        
                    movieListElement.removeChild(movieItem);
        
                    let movielist = JSON.parse(sessionStorage.getItem("movielist")) || [];
                    movielist = movielist.filter(m => m.title !== movie.title);
                    sessionStorage.setItem("movielist", JSON.stringify(movielist));
    }
});
                movieItem.appendChild(deleteButton);
                movieListElement.appendChild(movieItem);
            });

            document.getElementById("moviename").value = "";
            document.getElementById("movieyear").value = "";
            document.getElementById("moviegenre").value = "--Select Genre--";
        }
    });
    }
