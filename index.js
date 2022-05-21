// Code your solution in this file!
const drivers = ["Antonia", "Nuru", "Amari", "Mo"]

const returnFirstTwoDrivers = function() {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function() {
    return drivers.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (multiplier) {
    return function fareMultiplier (fare) {
        return multiplier * fare 
    }
}

function fareDoubler(fare) {
    const double = createFareMultiplier(2)(fare)
    return double
}

function fareTripler(fare) {
    const tripler = createFareMultiplier(3)(fare)
    return tripler
}

function selectDifferentDrivers(drivers, firstOrLast){
    return firstOrLast(drivers)
}