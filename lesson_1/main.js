function countDown(num) {
    if(num > 0) {
        return num * countDown(num -1)
    }
    return 0.5
}

console.log(countDown(4));