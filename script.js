
let myBatuManImg = document.getElementById("batuMan-img")
let myKertasManImg = document.getElementById("kertasMan-img")
let myGuntingManImg = document.getElementById("guntingMan-img")

let myBatuManColor = document.getElementById("batuMan-color")
let myKertasManColor = document.getElementById("kertasMan-color")
let myGuntingManColor = document.getElementById("guntingMan-color")

let myBatuComColor = document.getElementById("batuCom-color")
let myKertasComColor = document.getElementById("kertasCom-color")
let myGuntingComColor = document.getElementById("guntingCom-color")

let myResult = document.getElementById("result")
let myRefresh = document.getElementById("refresh")
let myGeneratedNum = document.getElementById("quanity-percobaan")

let myName = prompt("siapa nama anda ?")
let h1Name = document.getElementById("player")
h1Name.innerText = myName.toUpperCase()

let number
let random
let attempt = 0

// eventListener mouse in/out

const eventListener = (img, color,) =>{
    img.addEventListener("mouseenter", () => {
        img.style.cursor = "pointer"
        color.style.backgroundColor = "magenta"
    })
    
    img.addEventListener("mouseout", () => {
        img.style.cursor = "pointer"
        color.style.backgroundColor = "transparent"
    })
}

let myEvent1 = eventListener(myBatuManImg, myBatuManColor)
let myEvent2 = eventListener(myKertasManImg, myKertasManColor)
let myEvent3 = eventListener(myGuntingManImg, myGuntingManColor)


// change result display 
const manWin = () => {
    myResult.classList.remove("vs")
    myResult.classList.remove("final-result-com-win")
    myResult.classList.remove("final-result-draw")
    myResult.classList.add("final-result-man-win")
}

const comWin = () => {
    myResult.classList.remove("vs")
    myResult.classList.remove("final-result-man-win")
    myResult.classList.remove("final-result-draw")
    myResult.classList.add("final-result-com-win")
}

const draw = () => {
    myResult.classList.remove("vs")
    myResult.classList.remove("final-result-man-win")
    myResult.classList.remove("final-result-com-win")
    myResult.classList.add("final-result-draw")
}

// on click to play game
const clickBatuMan = () => {
    myBatuManColor.style.backgroundColor = "grey"    
    number = 0
    let randNum = Math.floor(Math.random() * 3)
    random = randNum
    console.log(random)
    if (number === random) {
        myResult.innerText = "DRAW"
        draw()  
    } 
    else if ( random === 1) {
        myResult.innerText = "COM WIN"
        comWin()
    }
    else {
        myResult.innerText = `${myName.toUpperCase()} WIN`
        manWin()
    }

    if (randNum === 0) {
        console.log("batu com")
        myBatuComColor.style.backgroundColor = "grey"
        myKertasComColor.style.backgroundColor = "transparent"
        myGuntingComColor.style.backgroundColor = "transparent"
    }
    else if (randNum === 1) {
        console.log("kertas com")
        myBatuComColor.style.backgroundColor = "transparent"
        myKertasComColor.style.backgroundColor = "grey"
        myGuntingComColor.style.backgroundColor = "transparent"
    }
    else {
        console.log("gunting com")
        myBatuComColor.style.backgroundColor = "transparent"
        myKertasComColor.style.backgroundColor = "transparent"
        myGuntingComColor.style.backgroundColor = "grey"
    }

}


const clickKertasMan = () => {
    myKertasManColor.style.backgroundColor = "grey"    
    number = 1
    let randNum = Math.floor(Math.random() * 3)
    random = randNum
    console.log(random)
    if (number === random) {
        myResult.innerText = "DRAW"
        draw()
    } 
    else if ( random === 0) {
        myResult.innerText = `${myName.toUpperCase()} WIN`
        manWin()
    }
    else {
        myResult.innerText = "COM WIN"
        comWin()
    }

    if (randNum === 0) {
        console.log("batu com")
        myBatuComColor.style.backgroundColor = "grey"
        myKertasComColor.style.backgroundColor = "transparent"
        myGuntingComColor.style.backgroundColor = "transparent"
    }
    else if (randNum === 1) {
        console.log("kertas com")
        myBatuComColor.style.backgroundColor = "transparent"
        myKertasComColor.style.backgroundColor = "grey"
        myGuntingComColor.style.backgroundColor = "transparent"
    }
    else {
        console.log("gunting com")
        myBatuComColor.style.backgroundColor = "transparent"
        myKertasComColor.style.backgroundColor = "transparent"
        myGuntingComColor.style.backgroundColor = "grey"
    }

}

const clickGuntingMan = () => {
    myGuntingManColor.style.backgroundColor = "grey"    
    number = 2
    let randNum = Math.floor(Math.random() * 3)
    random = randNum
    console.log(random)
    if (number === random) {
        myResult.innerText = "DRAW"
        draw()
    } 
    else if ( random === 1) {
        myResult.innerText = `${myName.toUpperCase()} WIN`
        manWin()
    }
    else {
        myResult.innerText = "COM WIN"
        comWin()
    }

    if (randNum === 0) {
        console.log("batu com")
        myBatuComColor.style.backgroundColor = "grey"
        myKertasComColor.style.backgroundColor = "transparent"
        myGuntingComColor.style.backgroundColor = "transparent"
    }
    else if (randNum === 1) {
        console.log("kertas com")
        myBatuComColor.style.backgroundColor = "transparent"
        myKertasComColor.style.backgroundColor = "grey"
        myGuntingComColor.style.backgroundColor = "transparent"
    }
    else {
        console.log("gunting com")
        myBatuComColor.style.backgroundColor = "transparent"
        myKertasComColor.style.backgroundColor = "transparent"
        myGuntingComColor.style.backgroundColor = "grey"
    }

}

    myRefresh.addEventListener("mouseenter", () => {
        myRefresh.style.cursor = "pointer"
        myRefresh.classList.add("animated")
    })
    
    myRefresh.addEventListener("mouseout", () => {
        myRefresh.style.cursor = "pointer"
        myRefresh.classList.remove("animated")
    })

    myRefresh.addEventListener("click", () => {
        let reload = confirm ("yakin mau mengulang game ?")
        if (reload) {
        location.reload()
    } 
    })

    

    








