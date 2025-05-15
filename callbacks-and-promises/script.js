console.log("keshav is the hacker ")
console.log("khushman is the hecker ")

setTimeout(() => {
         console.log("i am iside the timeout ")
},300)

setTimeout(() => {
         console.log("i am iside the timeout 2 ")
},200)

console.log("The end")

const fn = () => { 
     console.log("nothing")
}

const callBack = (arg,fn) => {
    console.log(arg)
    fn()
}

const loadScript = (src, callBack) => {
    let sc = document.createElement("script")
    sc.src = src;
    sc.onload = callBack("Keshav", fn);
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js", callBack)