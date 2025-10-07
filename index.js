// Code your solution here
function findMatching(driversNames, str){
    
    let driversSelected = driversNames.filter(driverName => driverName.toUpperCase() === str.toUpperCase())
    return driversSelected
}

function fuzzyMatch(driverNames,str) {
    let driversSelected = driverNames.filter(driverName => driverName.substring(0,str.length)===str)
    return driversSelected

}

function matchName(drivers, name) {
    let driversSelected = drivers.filter(driver => driver.name === name)
    return driversSelected
}