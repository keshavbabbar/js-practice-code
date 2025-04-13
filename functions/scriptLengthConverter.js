function convertlength(length, from, to) {
    if (from !== 'km' && from !== 'miles' && from !== 'ft') {
        return `invalid unit: ${from}`
    }
    else if (to !== 'km' && to !== 'miles' && to !== 'ft') {
        return `invalid unit: ${to}`
    }


    if (from === 'km' && to === 'miles') {
        return `${length / 1.6} miles`
    }
    else if (from === 'miles' && to === 'km') {
        return `${length * 1.6}km`
    }

    else if (from === 'miles' && to === 'ft') {
        return `${length * 5280} ft`
    }
    else if (from === 'km' && to === 'ft') {
        return `${length * 3281} ft`
    }
    else if (from === to) {
        return `${length} ${to}`
    }
}

console.log(convertlength(50, 'miles', 'km'))
console.log(convertlength(32, 'km', 'miles'))
console.log(convertlength(50, 'km', 'km'))
console.log(convertlength(5, 'miles', 'km'))
console.log(convertlength(5, 'miles', 'ft'))
console.log(convertlength(5, 'km', 'ft'))
console.log(convertlength(5, 'lbs', 'lbs'))