


// DATES AND TIMES HANDLERS
// GET THE NEXT SIX DATES

const DatesController = (function(){
    let todayDate = new Date()
    let dates = []

    return{
        getNextSixDates: date => {
            for(let i = 0; i < 7; i++){
                let newDate = new Date()
                newDate.setDate(date.getDate() + i)
                dates.push(newDate)
            }
        },
        dates,
        todayDate,
        changeDateFormat: date => {
            return date.toDateString().substr(0, 10)
        }

    }
})()

const FilmsCtr = (function(){
    // FILMS INFORMATION 
    DatesController.getNextSixDates(DatesController.todayDate)
    DatesController.dates = DatesController.dates.map(DatesController.changeDateFormat)
    const datesForFilms = []

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
            information: "Kern County Deputy Sheriff Joe Deacon is sent to Los Angeles for what should have been a quick evidence-gathering assignment. Instead, he becomes embroiled in the search for a serial killer who is terrorizing the city."
        },

        {
            id: "film-2",
            name: "The Mauritanian",
            datesAndTimes: datesForFilms[1],
            poster: "./img/top-film-2.jpg",
            information: "Kern County Deputy Sheriff Joe Deacon is sent to Los Angeles for what should have been a quick evidence-gathering assignment. Instead, he becomes embroiled in the search for a serial killer who is terrorizing the city."
        },

        {
            id: "film-3",
            name: "Saint Maud",
            datesAndTimes: datesForFilms[2],
            poster: "./img/top-film-3.jpg",
            information: "Kern County Deputy Sheriff Joe Deacon is sent to Los Angeles for what should have been a quick evidence-gathering assignment. Instead, he becomes embroiled in the search for a serial killer who is terrorizing the city."
        },

        {
            id: "film-4",
            name: "Malcolm & Marie",
            datesAndTimes: datesForFilms[3],
            poster: "./img/top-film-4.jpg",
            information: "Kern County Deputy Sheriff Joe Deacon is sent to Los Angeles for what should have been a quick evidence-gathering assignment. Instead, he becomes embroiled in the search for a serial killer who is terrorizing the city."
        },

        {
            id: "film-5",
            name: "Jungleland",
            datesAndTimes: datesForFilms[4],
            poster: "./img/top-film-5.jpg",
            information: "Kern County Deputy Sheriff Joe Deacon is sent to Los Angeles for what should have been a quick evidence-gathering assignment. Instead, he becomes embroiled in the search for a serial killer who is terrorizing the city."
        },

        {
            id: "film-6",
            name: "I'm thinking of ending things",
            datesAndTimes: datesForFilms[5],
            poster: "./img/top-film-6.jpg",
            information: "Kern County Deputy Sheriff Joe Deacon is sent to Los Angeles for what should have been a quick evidence-gathering assignment. Instead, he becomes embroiled in the search for a serial killer who is terrorizing the city."
        },

        {
            id: "film-7",
            name: "Capone",
            datesAndTimes: datesForFilms[6],
            poster: "./img/top-film-7.jpg",
            information: "Kern County Deputy Sheriff Joe Deacon is sent to Los Angeles for what should have been a quick evidence-gathering assignment. Instead, he becomes embroiled in the search for a serial killer who is terrorizing the city."
        },

        {
            id: "film-8",
            name: "Sea Fever",
            datesAndTimes: datesForFilms[7],
            poster: "./img/top-film-8.jpg",
            information: "Kern County Deputy Sheriff Joe Deacon is sent to Los Angeles for what should have been a quick evidence-gathering assignment. Instead, he becomes embroiled in the search for a serial killer who is terrorizing the city."
        },

        {
            id: "film-9",
            name: "Supernova",
            datesAndTimes: datesForFilms[8],
            poster: "./img/film-9.jpg",
            information: "Kern County Deputy Sheriff Joe Deacon is sent to Los Angeles for what should have been a quick evidence-gathering assignment. Instead, he becomes embroiled in the search for a serial killer who is terrorizing the city."
        },

        {
            id: "film-10",
            name: "Radioactive",
            datesAndTimes: datesForFilms[9],
            poster: "./img/film-10.jpg",
            information: "Kern County Deputy Sheriff Joe Deacon is sent to Los Angeles for what should have been a quick evidence-gathering assignment. Instead, he becomes embroiled in the search for a serial killer who is terrorizing the city."
        },

        {
            id: "film-11",
            name: "AVA",
            datesAndTimes: datesForFilms[10],
            poster: "./img/film-11.jpg",
            information: "Kern County Deputy Sheriff Joe Deacon is sent to Los Angeles for what should have been a quick evidence-gathering assignment. Instead, he becomes embroiled in the search for a serial killer who is terrorizing the city."
        },

        {
            id: "film-12",
            name: "Shirley",
            datesAndTimes: datesForFilms[11],
            poster: "./img/film-12.jpg",
            information: "Kern County Deputy Sheriff Joe Deacon is sent to Los Angeles for what should have been a quick evidence-gathering assignment. Instead, he becomes embroiled in the search for a serial killer who is terrorizing the city."
        }
    ]

    return{
        filmInformation
    }
})()


const UICtr3 = (function(){
    // GRABBING ELEMENTS
    const datesContainer = document.querySelector(".dates"), dateElements = document.querySelectorAll(".date"),
    timesContainer = document.querySelector(".times"), filmPoster = document.querySelector(".film-url"),
    filmName = document.querySelector(".film-name"), chooseSeatsBtn = document.querySelector(".choose-seats-btn"),
    filmDateAndTime = document.querySelector(".date-and-time"), singleTicket = document.getElementById("single-ticket"),
    studentTicket = document.getElementById("student-ticket"), familyTicket = document.getElementById("family-ticket"),
    seatsContainer = document.querySelector(".seats-wrapper"), activeSeats = document.querySelector(".seats-chosen")

    let letters = ["a", "b", "c", "d", "e", "f", "g"]
    let numberOfStudentTickets, numberOfSingleTickets, numberOfFamilyTickets
    return{
        chooseSeatsBtn,
        datesContainer,
        timesContainer,
        seatsContainer,
        setDate: (e) => {
            timesContainer.style.display = "flex"
            let target = e.target
            dateElements.forEach(element => {
                if(element.className == target.className){
                    element.classList.add("active")
                }else{
                    element.classList.remove("active")
                }
            })
        
            // SETTING ACTIVE DATE TAB AND SHOWING TIMES FOR THAT DATE
            DatesController.dates.forEach(date => {
                if(date === target.textContent){
                    FilmsCtr.filmInformation.forEach(film => {
                        if(film.id == App3.id){
                            console.log(film.datesAndTimes)
                            let times = film.datesAndTimes.get(date)
                            let outputTimes = ''
                            times.forEach(time => {
                                outputTimes += `<div class="time time-${times.indexOf(time)}">${time}</div>`
                            })
                            document.querySelector(".times").innerHTML = outputTimes
                        }
                    })
                }
            })
        },

        setTime: (e) => {
            const timeElements = document.querySelectorAll(".time")
            let target = e.target
            timeElements.forEach(element => {
                if(element.className == target.className){
                    element.classList.add("active")
                }else{
                    element.classList.remove("active")
                }
            })
        },
        insertDates: () => {for(let i = 0; i < 7; i++){
            document.querySelector(`.date-${i}`).textContent = DatesController.dates[i]
        }},

        insertSeats: () => {
            // INSERT SEATS ON THE LEFT
            let output = ''
            letters.forEach(letter => {
                output += `<div class="row row-${letter}"></div>`
            })
        
            document.querySelector(".seats-left").innerHTML = output
        
            let rowsLeft = document.querySelectorAll(".row")
            
            rowsLeft.forEach(row => {
                let output2 = ''
                letters.forEach(letter => {
                    if(row.className == `row row-${letter}`)
                    output2 = `<div class="seat" id="${letter}1"><i class="fas fa-chair"></i></div>
                    <div class="seat" id="${letter}2"><i class="fas fa-chair"></i></div>
                    <div class="seat" id="${letter}3"><i class="fas fa-chair"></i></div>
                    <div class="seat" id="${letter}4"><i class="fas fa-chair"></i></div>
                    <div class="seat" id="${letter}5"><i class="fas fa-chair"></i></div>`
                })
                row.innerHTML = output2
            })
        
            // INSERT ROW LETTERS
            let output3 = ''
            letters.forEach(letter => {
                output3 += `<div class="letter">${letter}</div>`
            })
            document.querySelector(".letter-indicator").innerHTML = output3
        
            //INSERT SEATS ON THE RIGHT
            let output4 = ''
            letters.forEach(letter => {
                output4 += `<div class="row row-${letter}"></div>`
            })
            document.querySelector(".seats-right").innerHTML = output4
        
            let rowsRight = document.querySelectorAll(".row")
            
            rowsRight.forEach(row => {
                let output5 = ''
                letters.forEach(letter => {
                    if(row.className == `row row-${letter}`)
                    output5 = `<div class="seat" id="${letter}6"><i class="fas fa-chair"></i></div>
                    <div class="seat" id="${letter}7"><i class="fas fa-chair"></i></div>
                    <div class="seat" id="${letter}8"><i class="fas fa-chair"></i></div>
                    <div class="seat" id="${letter}9"><i class="fas fa-chair"></i></div>
                    <div class="seat" id="${letter}10"><i class="fas fa-chair"></i></div>`
                })
                row.innerHTML = output5
            })
        },

        
        insertFilmInformation: () => {
            FilmsCtr.filmInformation.forEach(film => {
                if(App3.id == film.id){
                    filmPoster.src = film.poster
                    filmName.textContent = film.name
                }
            })
        },

        setFilmDateAndTime: () => {
            let filmDate = ''
            let filmTime = ''

            dateElements.forEach(date => {
                if(date.classList.contains("active")){
                    filmDate = date.textContent
                }
            })
            const timeElements = document.querySelectorAll(".time")
            timeElements.forEach(time => {
                if(time.classList.contains("active")){
                    filmTime = time.textContent
                }
            })
            filmDateAndTime.textContent = `${filmDate} at ${filmTime}`
        },
        // CHECKING THAT INPUTS ARE 
        checkForInput: () => {
            let activeDates = false
            let activeTimes = false

            dateElements.forEach(date => {
                if(date.classList.contains("active")){
                    activeDates = true
                }
            })
            const timeElements = document.querySelectorAll(".time")
            timeElements.forEach(time => {
                if(time.classList.contains("active")){
                    activeTimes = true
                }
            })

            if(activeDates == true || activeTimes == true){
                if(singleTicket.value == '' && studentTicket.value == '' &&
                familyTicket.value == ''){
                    if(!document.querySelector(".warning").classList.contains("show-warning")){
                        document.querySelector(".warning").classList.add("show-warning")
                        setTimeout(() => {
                            document.querySelector(".warning").classList.remove("show-warning")
                        }, 4000)
                    }
                }else{
                    document.querySelector(".container-1").style.display = "none"
                    document.querySelector(".container-2").style.display = "flex"
    
                    // SET NUMBER OF TICKETS
                    numberOfSingleTickets = parseInt(singleTicket.value)
                    numberOfStudentTickets = parseInt(studentTicket.value)
                    numberOfFamilyTickets = parseInt(familyTicket.value)
                    App3.calculateTicketPriceAndSeatNumber(numberOfSingleTickets, numberOfStudentTickets, numberOfFamilyTickets)
                }
            }else{
                if(!document.querySelector(".warning").classList.contains("show-warning")){
                    document.querySelector(".warning").classList.add("show-warning")
                    setTimeout(() => {
                        document.querySelector(".warning").classList.remove("show-warning")
                    }, 4000)
                }s
            }
        },
        // DISPLAYING TOTAL PRICE OF TICKETS
        setTotalPrice: price => {
            document.querySelector(".total-price").textContent = `Total Price: ${price}$`
        },

        // MAKING SEAT COLOR GREEN WHEN ACTIVE AND ADDING IT TO THE CHOSEN SEATS LIST
        // ENSURING THE CHOSEN SEAT NUMBER DOESN'T EXCEED THE NUMBER OF TICKETS
        makeSeatActive: (e, numberOfSeats) => {
            let target = e.target
            if(target.classList.contains("fa-chair")){
                if(target.parentElement.classList.contains("active")){
                    const activeSeat = document.querySelectorAll(".seat-chosen")
                    target.parentElement.classList.remove("active")
                    activeSeat.forEach(seat => {
                        console.log(seat)
                        if(target.parentElement.id == seat.textContent){
                            seat.parentElement.removeChild(seat)
                        }
                    })
                }else{
                    const activeSeat = document.querySelectorAll(".seat-chosen")
                    if(activeSeat.length < numberOfSeats){
                        target.parentElement.classList.add("active")
                        let newActiveSeat = document.createElement("div")
                        newActiveSeat.setAttribute("class", "seat-chosen")
                        newActiveSeat.textContent = target.parentElement.id
                        activeSeats.appendChild(newActiveSeat)
                    }
                }
            }
        }
    }
})()


const App3 = (function(){
    let numberOfSeats, totalPrice = ''
    // GETTING THE ID OF THE FILM CHOSEN
    let id = localStorage.getItem("filmID")
    UICtr3.datesContainer.addEventListener("click", (e) => {
        UICtr3.setDate(e)
        })
    
    UICtr3.timesContainer.addEventListener("click", (e) => {
        UICtr3.setTime(e)
    })

    UICtr3.chooseSeatsBtn.addEventListener("click", () => {
        UICtr3.setFilmDateAndTime()
        UICtr3.checkForInput()
        UICtr3.setTotalPrice(totalPrice)
    })

    UICtr3.seatsContainer.addEventListener("click", (e) => {
        UICtr3.makeSeatActive(e, numberOfSeats)
    })

    return{
        init: function(){
            UICtr3.insertDates()
            UICtr3.insertSeats()
            UICtr3.insertFilmInformation()
        },
        id,
        calculateTicketPriceAndSeatNumber: (singleTickets, studentTickets, familyTickets) => {
            parseInt(numberOfSeats)
            isNaN(singleTickets) ? singleTickets = 0 : parseInt(singleTickets)
            isNaN(studentTickets) ? studentTickets = 0 : parseInt(studentTickets)
            isNaN(familyTickets) ? familyTickets = 0 : parseInt(familyTickets*4)

            totalPrice = singleTickets*15 + studentTickets*10 + familyTickets*35
            numberOfSeats = singleTickets + studentTickets + familyTickets*4

            return numberOfSeats
        }
    }
})()
 App3.init()










