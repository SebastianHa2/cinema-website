import {UICtr3} from "./app/checkout/checkout.js"
import "./buy-tickets-styles.css"

const App3 = (function(){
    let numberOfSeats, totalPrice = ''
    // GETTING THE ID OF THE FILM CHOSEN
    let id = localStorage.getItem("filmID")
    UICtr3.datesContainer.addEventListener("click", (e) => {
        UICtr3.setDate(e, id)
        })
    
    UICtr3.timesContainer.addEventListener("click", (e) => {
        UICtr3.setTime(e)
    })

    const calculateTicketPriceAndSeatNumber = (singleTickets, studentTickets, familyTickets) => {
        parseInt(numberOfSeats)
        isNaN(singleTickets) ? singleTickets = 0 : parseInt(singleTickets)
        isNaN(studentTickets) ? studentTickets = 0 : parseInt(studentTickets)
        isNaN(familyTickets) ? familyTickets = 0 : parseInt(familyTickets*4)

        totalPrice = singleTickets*15 + studentTickets*10 + familyTickets*35
        numberOfSeats = singleTickets + studentTickets + familyTickets*4

        return numberOfSeats
    }

    UICtr3.chooseSeatsBtn.addEventListener("click", () => {
        UICtr3.setFilmDateAndTime()
        UICtr3.checkForInput(calculateTicketPriceAndSeatNumber)
        UICtr3.setTotalPrice(totalPrice)
    })

    UICtr3.seatsContainer.addEventListener("click", (e) => {
        UICtr3.makeSeatActive(e, numberOfSeats)
    })

    return{
        init: function(){
            UICtr3.insertDates()
            UICtr3.insertSeats()
            UICtr3.insertFilmInformation(id)
        },
        id,
    }
})()

 App3.init()