function unroll(squareArray, arr=[]) {
    for(let i =0; i<squareArray.length; i++) [
        arr.push(squareArray[0][i])
    ]
    squareArray.shift();
    for(let h=0; h<squareArray.length;h++) {
        arr.push(squareArray[h][squareArray.length])
        squareArray[h].pop();
    }
    for(let j=squareArray.length-1;j>=0;j--) {
        arr.push(squareArray[squareArray.length-1][j])
    }
    squareArray.pop();

    for (let l=squareArray.length-1;l>=0;l--){
        arr.push(squareArray[l][0])
        squareArray[l].shift()
    }

    if (squareArray.length>0) {
        return unroll(squareArray, arr)
    }
    return arr
}

module.exports = unroll;
