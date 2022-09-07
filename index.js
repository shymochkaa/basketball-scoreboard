let homeScore = 0
let homeScoreEl = document.getElementById("home-score-el")
homeScoreEl.textContent = 0 

let guestScore = 0
let guestScoreEl = document.getElementById("guest-score-el")
guestScoreEl.textContent = 0 

function plusOneHome() {
    homeScore += 1
    homeScoreEl.textContent =  homeScore
}

function plusTwoHome() {
    homeScore += 2
    homeScoreEl.textContent =  homeScore
}

function plusThreeHome() {
    homeScore += 3
    homeScoreEl.textContent =  homeScore
}

function plusOneGuest() {
    guestScore += 1
    guestScoreEl.textContent =  guestScore
}

function plusTwoGuest() {
    guestScore += 2
    guestScoreEl.textContent =  guestScore
}

function plusThreeGuest() {
    guestScore += 3
    guestScoreEl.textContent =  guestScore
}

function resetHome() {
    homeScore = 0
    homeScoreEl.textContent =  homeScore
}
function resetGuest() {
    guestScore = 0
    guestScoreEl.textContent =  homeScore
}