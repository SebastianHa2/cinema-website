
const UIctr2 = (function(){
    const filmList = document.querySelectorAll(".film"), filterOptionsList = document.querySelectorAll(".genre-selection"),
    filter = document.querySelector(".filter"),  allTab = document.querySelector(".all"), indicator = document.querySelector(".indicator"),
    filterByTab = document.querySelector(".filter-by")

    return{
        // FUNCTION FOR FILTERING THE FILMS FOR THE GENRES SELECTED
        filterFilms: (e) => {
            let ids = []
            filmList.forEach(film => {
                film.style.display = "none"
            })
            filterOptionsList.forEach(option => {
               if(option.classList.contains("selected")){
                    ids.push(option.id)
                    return ids
               }
            })
            if(ids == ''){
                filmList.forEach(film => {
                    film.style.display = "block"
                })
            }else{
                ids.forEach(id => {
                    filmList.forEach(film =>{
                        if(film.classList.contains(id)){
                            film.style.display = "block"
                        }
                    })
                })
            }
            filter.classList.remove("show")
            e.preventDefault()
        },
        // FUNCTION FOR MARKING SELECTED GENRES
        selectFilterOption: (e) => {
            let target = e.target
            if(target.classList.contains("genre-selection")){
                target.classList.toggle("selected")
            }
        },

        // CLOSE FILTER OPTIONS
        exitFilterOptions: () => {
            filter.classList.remove("show")
            allTab.classList.add("active-tab")
            indicator.className = "indicator all-active"
            filterByTab.classList.remove("active-tab")
            filmList.forEach(film => {
                film.style.display = "block"
            })
        }
    }
})()

const App2 = (function(){
    // LISTENERS FOR SLECTING GENRES AND THE FILTER BUTTON
    const filterBtn = document.querySelector(".filter-btn"), filterOptions = document.querySelector(".filter-options")
    filterOptions.addEventListener("click", (e) => {
        UIctr2.selectFilterOption(e)
    })
    filterBtn.addEventListener("click", (e) => {
        UIctr2.filterFilms(e)
    })

    // LISTENER FOR EXITING THE FILTER OPTIONS
    const exitFilter = document.querySelector(".exit-filter")
    exitFilter.addEventListener("click", () => {
        UIctr2.exitFilterOptions()
    })
    // FUNCTION FOR GETTING THE FILM ID FOR BUYING TICKETS
    let filmID 
    const ticketsForFilm = document.querySelector(".film-list")
    function choosingFilmForTickets(e){
        let target = e.target
        if(target.classList.contains("fa-ticket-alt")){
            filmID = target.parentElement.parentElement.parentElement.id
            // Saving it in local storage
            localStorage.setItem("filmID", filmID)
        }
    } 
    // LISTENER FOR GETTING THE FILM ID WHEN CLICKING ON THE TICKET ICON
    ticketsForFilm.addEventListener("click", choosingFilmForTickets)
})()














