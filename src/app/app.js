const UICtr = (function(){
    const indicator = document.querySelector(".indicator"), filter = document.querySelector(".filter"),
    slides = document.querySelectorAll(".top-film"), filmList = document.querySelectorAll(".film"),
    allTab = document.getElementById("all"), comingSoonTab = document.getElementById("coming-soon"),
    filterByTab = document.getElementById("filter-by")

    let tabs = [allTab, comingSoonTab, filterByTab]

    return{
        tabs,
        // CHANGIN SLIDES USING SWITCH
         moveRight: () => {
            slides.forEach(slide => {
                switch(slide.id){
                    case "slide-1":
                        slide.id = "slide-2"
                        break
                    case "slide-2":
                        slide.id = "slide-3"
                        break
                    case "slide-3":
                        slide.id = "slide-4"
                        break
                    case "slide-4":
                        slide.id = "slide-5"
                        break
                    case "slide-5":
                        slide.id = "slide-6"
                        break
                    case "slide-6":
                        slide.id = "slide-7"
                        break
                    case "slide-7":
                        slide.id = "slide-8"
                        break
                    case "slide-8":
                        slide.id = "slide-1"
                        break
                }
            })
        },

        moveLeft: () => {
            slides.forEach(slide => {
                switch(slide.id){
                    case "slide-1":
                        slide.id = "slide-8"
                        break
                    case "slide-2":
                        slide.id = "slide-1"
                        break
                    case "slide-3":
                        slide.id = "slide-2"
                        break
                    case "slide-4":
                        slide.id = "slide-3"
                        break
                    case "slide-5":
                        slide.id = "slide-4"
                        break
                    case "slide-6":
                        slide.id = "slide-5"
                        break
                    case "slide-7":
                        slide.id = "slide-6"
                        break
                    case "slide-8":
                        slide.id = "slide-7"
                        break
                }
            })
        },

        // BOTTOM INDICATOR INDICATE TAB WHEN HOVER
        indicateTab: (e) => {
            let target = e.target
            let className = target.id
            indicator.classList.add(className)
            tabs.forEach(tab => {
                if(tab.id !== className){
                    tab.classList.add("non-active")
                }else{
                    tab.classList.add("active")
                }
            })
        },

        // STOP INDICATING TAB AND GO BACK TO INDICATING ACTIVE TAB
        stopIndicateTab: (e) => {
            let target = e.target
            let className = target.id
            indicator.classList.remove(className)
            tabs.forEach(tab => {
                if(tab.id !== className){
                    tab.classList.remove("non-active")
                }else{
                    tab.classList.remove("active")
                }
            })
        },

        // MAKING TAB ACTIVE ON CLICK AND SHOWING THE FILMS AVAILABLE IN THAT TAB OR SHOWING
        // FILTER OPTIONS
        makeActiveTab: (e) => {
            let target = e.target
            let className = target.id
            indicator.className = `indicator ${className}-active`
            tabs.forEach(tab => {
                if(tab.id !== className){
                    tab.classList.remove("active-tab")
                }else{
                    tab.classList.add("active-tab")
                }
            })
        
            filter.classList.remove("show")
        
            switch(className){
                case "all":     
                    filmList.forEach(film => {
                    film.style.display = "block"
                })
                break
                case "coming-soon":     
                    filmList.forEach(film => {
                    if(!film.classList.contains("coming-soon-film")){
                        film.style.display = "none"
                    }
                })
                break
                case "filter-by": 
                filter.classList.add("show")
                break
        
            }
        }
    }
})()

const App = (function(){

    // ADDING TAB LISTENERS
    UICtr.tabs.forEach(tab =>{
        tab.addEventListener("mouseover", e =>{ 
            UICtr.indicateTab(e)
        })
        tab.addEventListener("mouseout", e => {
            UICtr.stopIndicateTab(e)
        })
        tab.addEventListener("click", e => {
            UICtr.makeActiveTab(e)
        })
    
    const leftArrow = document.querySelector(".left-arrow"), rightArrow = document.querySelector(".right-arrow")
    leftArrow.addEventListener("click", UICtr.moveRight)
    rightArrow.addEventListener("click", UICtr.moveLeft)

})
})()
