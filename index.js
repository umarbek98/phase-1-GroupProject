
const leftSide = document.querySelector("#left-list")
const rightSide = document.querySelector("#right-list")
const islandInfo = document.querySelector("#island-info")
const infoLanguage = document.querySelector("#info-language")
const infoStatus = document.querySelector("#info-status")
const infoCurrency = document.querySelector("#info-currency")
const infoCapital = document.querySelector("#info-capital")
const infoPopulation = document.querySelector("#info-population")
const locations = document.querySelector("#location")
const attraction = document.querySelector("#attractions")
const flag = document.querySelector("#flag")
const comments = document.querySelector('#comments')



fetch ("http://localhost:3000/island-list-left")
.then (response => response.json())
.then (data => {
    data.forEach(island => {
        const img = document.createElement("img")
        img.src = island.image
        img.id = "left-flag"
        leftSide.append(img)
        img.addEventListener("click", () => {
            comments.innerHTML = ''
            attraction.innerHTML = ''
            const attractionH1 = document.createElement('h2')
            attractionH1.textContent = "Attractions"
            attraction.append(attractionH1)
         islandDetails(island)
        })

    }) 
    islandDetails(data[0])
})
function islandDetails(island) {
        comments.textContent = `Reviews:`
        infoLanguage.textContent = island.language
         infoStatus.textContent = island.status
         infoCurrency.textContent = island.currency
         infoCapital.textContent = island.capital
         flag.src = island.image
         infoPopulation.textContent = island.population
         locations.textContent = island.name

         island.reviews.forEach(reviews => {

            const commentLI = document.createElement('li')
            commentLI.textContent = reviews
            comments.append(commentLI)
         })
         
        island.attractions.forEach(attractions => {
            const attractionLI = document.createElement('li')
            attractionLI.textContent = attractions
            attraction.appendChild(attractionLI)
        })

}


fetch ("http://localhost:3000/island-list-right")
.then (response => response.json())
.then (data => {
    data.forEach( island => {
        const img = document.createElement("img")
        img.src = island.image
        img.id = "right-flag"
        rightSide.append(img)
        img.addEventListener("click", () => {
            comments.innerHTML = ''
            attraction.innerHTML = ''
            const attractionH1 = document.createElement('h2')
            attractionH1.textContent = "Attractions"
            attraction.append(attractionH1)
            islandDetails(island)

            // infoLanguage.textContent = island.language
            // infoStatus.textContent = island.status
            // infoCurrency.textContent = island.currency
            // infoCapital.textContent = island.capital
            // infoPopulation.textContent = island.population
            // attraction.textContent = island.attractions


        })
    })
})

const commentForm = document.querySelector('#comment-form')
commentForm.addEventListener('submit', (event) => {
    event.preventDefault();

   
    const newComment = document.querySelector('#comment-input').value
    const commentLI = document.createElement('li')
    commentLI.textContent = newComment
    comments.append(commentLI)

    commentForm.reset()
})