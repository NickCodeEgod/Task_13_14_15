const navBurger = document.querySelector(".burger");
const navTexts = document.querySelector(".nav-texts");

function navTextToggle () {
    navTexts.classList.toggle("active-nav-texts")
}

navBurger.addEventListener("click", navTextToggle);

var modal = document.getElementById("myModal");
		var btn = document.getElementById("myBtn");
		var span = document.getElementsByClassName("close")[0];
		btn.onclick = function() {
			modal.style.display = "block";
		}
		span.onclick = function() {
			modal.style.display = "none";
		}
		window.onclick = function(event) {
			if (event.target == modal) {
				modal.style.display = "none";
			}
		}