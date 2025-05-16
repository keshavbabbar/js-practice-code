console.log("This is promises")

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a > 0.5){
        reject("This is invalid random number")
    }
    else{

        setTimeout(() =>  {
            console.log("Yes I am done")
            resolve("keshav")
        },3000);
    }
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a > 0.5){
        reject("This is invalid random number 2")
    }
    else{

        setTimeout(() =>  {
            console.log("Yes I am done 2")
            resolve("keshav 2")
        },1000);
    }
})

let prom3 = Promise.allSettled([prom1, prom2])
prom3.then((a) => {
     console.log(a)
}).catch(err => {
    console.log(err) 
})