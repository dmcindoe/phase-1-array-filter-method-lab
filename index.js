function findMatching(array, string){
    const newArray = array.filter(name => name.toLowerCase() === string.toLowerCase())
return newArray
}

function fuzzyMatch(array, letter){
    const fuzzyArray = array.filter(name => {
        return name.charAt(0) === letter.charAt(0)
    })
    return fuzzyArray
}
    

function matchName (drivers, name){
    const roadCrew = drivers.filter(drivers => drivers.name === name)
    return roadCrew
}
