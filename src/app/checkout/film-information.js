import {DatesController} from "./dates.js"

// HARD CODED FILM INFORMATION

export const FilmsCtr = (function(){
    
    DatesController.getNextSixDates(DatesController.todayDate)
    DatesController.dates = DatesController.dates.map(DatesController.changeDateFormat)
    const datesForFilms = []


    // FILMS INFORMATION 
    for(let i = 0; i < 13; i++){
        datesForFilms.push(new Map([[DatesController.dates[0], ["12:45", "16:40", "20:20"]],
        [DatesController.dates[1], ["19:20"]], [DatesController.dates[2], ["13:00", "16:30"]], [DatesController.dates[3], ["15:30", "20:30"]],
        [DatesController.dates[4], ["11:15", "14:25", "16:35", "21:20"]], [DatesController.dates[5], ["11:15", "14:25", "16:35", "21:20"]],
        [DatesController.dates[6], ["13:20", "15:15"]]]))
    }

    const filmInformation = [
        {
            id: "film-1",
            name: "The Little Things",
            datesAndTimes: datesForFilms[0],
            poster: "./img/top-film-1.jpg",
        },

        {
            id: "film-2",
            name: "The Mauritanian",
            datesAndTimes: datesForFilms[1],
            poster: "./img/top-film-2.jpg",
        },

        {
            id: "film-3",
            name: "Saint Maud",
            datesAndTimes: datesForFilms[2],
            poster: "./img/top-film-3.jpg",
        },

        {
            id: "film-4",
            name: "Malcolm & Marie",
            datesAndTimes: datesForFilms[3],
            poster: "./img/top-film-4.jpg",
        },

        {
            id: "film-5",
            name: "Jungleland",
            datesAndTimes: datesForFilms[4],
            poster: "./img/top-film-5.jpg",
        },

        {
            id: "film-6",
            name: "I'm thinking of ending things",
            datesAndTimes: datesForFilms[5],
            poster: "./img/top-film-6.jpg",
        },

        {
            id: "film-7",
            name: "Capone",
            datesAndTimes: datesForFilms[6],
            poster: "./img/top-film-7.jpg",
        },

        {
            id: "film-8",
            name: "Sea Fever",
            datesAndTimes: datesForFilms[7],
            poster: "./img/top-film-8.jpg",
        },

        {
            id: "film-9",
            name: "Supernova",
            datesAndTimes: datesForFilms[8],
            poster: "./img/film-9.jpg",
        },

        {
            id: "film-10",
            name: "Radioactive",
            datesAndTimes: datesForFilms[9],
            poster: "./img/film-10.jpg",
        },

        {
            id: "film-11",
            name: "AVA",
            datesAndTimes: datesForFilms[10],
            poster: "./img/film-11.jpg",
        },

        {
            id: "film-12",
            name: "Shirley",
            datesAndTimes: datesForFilms[11],
            poster: "./img/film-12.jpg",
        }
    ]

    return{
        filmInformation
    }
})()