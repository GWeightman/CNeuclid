const euclid = (a, b) => {
    if(b == 0){
        console.log(a)
    }
    else{
        step2(a, b)
    }
}

const step2 = (a, b) => {
    if(a > b){
        a = a - b
        euclid(a, b)
    }
    else{
        b = b - a
        euclid(a, b)
    }
}

euclid(25, 50)