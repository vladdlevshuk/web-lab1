var addLessonBtn = document.getElementById("addLessonBtn");
var modal = document.getElementById("myModal");
var closeBtn = document.getElementsByClassName("close")[0];

addLessonBtn.onclick = function() {
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}