function factorial(n){
   console.log("done")


    if(n===1){
        return 1
    }

    return n * factorial(n-1)
}


factorial(2)