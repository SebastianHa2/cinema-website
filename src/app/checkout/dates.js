
// DATES AND TIMES HANDLERS
// GET THE NEXT SIX DATES
export const DatesController = (function(){
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