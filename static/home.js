
const filterexpand = document.getElementById('filterexpand')
const filterbar = document.getElementById('filterbar');
filterexpand.addEventListener("click" , () => {
    filterbar.classList.toggle("showfilters");
})

const pop = document.getElementsByClassName('pop');
const rock = document.getElementsByClassName('rock');
const soul = document.getElementsByClassName('soul');
const indie = document.getElementsByClassName('indie');
const alternative = document.getElementsByClassName('alternative');
const soundtrack = document.getElementsByClassName('soundtrack');

function setVisibility(genre, display) {
    for(var i = 0; i < (genre.length); i++) {
        genre[i].style.display = display;
    }
    }

function filterGenre(genre) {
    setVisibility(pop, "none") ;
    setVisibility(rock, "none") ;
    setVisibility(soul, "none") ;
    setVisibility(indie, "none") ;
    setVisibility(alternative, "none") ;
    setVisibility(soundtrack, "none") ;
    setVisibility(genre, "block") ;
}

function resetFilter() {
    setVisibility(pop, "block") ; 
    setVisibility(rock, "block") ;
    setVisibility(soul, "block") ;
    setVisibility(indie, "block") ;
    setVisibility(alternative, "block") ;
    setVisibility(soundtrack, "block") ;
}
