// TICKET OPTIONS / DATE AND TIME SELECTION / SEAT SELECTION

import {FilmsCtr} from "./film-information.js"
import {DatesController} from "./dates.js"


export const UICtr3 = (function(){
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
        setDate: (e, id) => {
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
                        if(film.id == id){
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

        
        insertFilmInformation: (id) => {
            FilmsCtr.filmInformation.forEach(film => {
                if(id == film.id){
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
        checkForInput: (calculateTicketPriceAndSeatNumber) => {
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
                    calculateTicketPriceAndSeatNumber(numberOfSingleTickets, numberOfStudentTickets, numberOfFamilyTickets)
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


