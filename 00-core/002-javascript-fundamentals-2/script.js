
function calculateAge(birthYear, currentYear) {
    return currentYear - birthYear;
}

function yearsUntilRetirement(birthYear, name) {
    const currentAge = calculateAge(birthYear, 2025);
    const retirement = 65 - currentAge;

    if (retirement > 0) {
        console.log(`${name} has ${retirement} years until retirement!`);
    } else {
        console.log(`${name} can retire!`);
    }
}

console.log(yearsUntilRetirement(1950, 'Tyler'));
