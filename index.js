// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    const numBlocks = someValue - 42;
    return Math.abs(numBlocks);
}

function distanceFromHqInFeet(someValue){
    const numBlocks = distanceFromHqInBlocks(someValue);
    const distanceInFeet = numBlocks * 264;
    return distanceInFeet;
}

function distanceTravelledInFeet(start, destination){
    const numBlocks = Math.abs(start - destination);
    const distacnceInFeet = numBlocks * 264;
    return distacnceInFeet;
}

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400 ){
        return 0;
    }
    else if (distance > 400 && distance < 2000){
        const fare = (distance - 400) * 0.02;
        return fare;
    }
    else if (distance > 2000 && distance < 2500){
        return 25;
    }
    else if (distance > 2500){
        return 'cannot travel that far';
    }
}