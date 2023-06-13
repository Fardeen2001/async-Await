// //promise
// console.log("person1:showsTickets")
// console.log("person2:showsTickets")
// const promiseWifeBringingTickets = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("tickets")
//     },3000)
// })

// const getPopcorn = promiseWifeBringingTickets.then((t)=>{
//     console.log("wife:i have tickets")
//     console.log("husband:we should go in")
//     console.log("wife:no i am hungry")
//     console.log("husband:i will get some popcorn")
//     return new Promise((resolve,reject)=>{
//         resolve(`${t} popcorn`)
//     })
// })
// const getButter = getPopcorn.then((t)=>{
//     console.log("husband:we should go in")
//     console.log("wife:i need butter on my popcorn")
//     return new Promise((resolve,reject)=>{
//         resolve(`${t} butter`)
//     })
// })
// const getCoolDrink = getButter.then((t)=>{
//     console.log("husband:we should go in")
//     console.log("wife:i need some cool drink")
//     return new Promise((resolve,reject)=>{
//         resolve(`${t} cooldrink`)
//     })
// })
// getCoolDrink.then((t)=>{
//     console.log(t)
// })
// console.log("person4:showsTickets")
// console.log("person5:showsTickets")

// Async Await

// console.log("person1:showsTickets")
// console.log("person2:showsTickets")
// const preMovie= async ()=>{
//     const promiseWifeBringingTickets = new Promise((resolve,reject)=>{
//         setTimeout(()=>{resolve("ticket")},3000)
//     })
// const getPopcorn=new Promise((resolve,reject)=>{
//     resolve("popcorn")
// })
// const addButter = new Promise((resolve,reject)=>{
//     resolve("butter")
// })
// const getCooldrink = new Promise((resolve,reject)=>{
//     resolve("cool drink")
// })
// let ticket=await promiseWifeBringingTickets;
// console.log(`wife: i have the ${ticket}`);
// console.log("husband: we should go in")
// console.log("wife: no i am hungry")
// let popcorn = await getPopcorn
// console.log(`husband: i will get some ${popcorn}`)
// console.log("husband: we should go in")
// console.log("wife: i need butter on my popcorn")
// let butter = await addButter;
// console.log(`husband: i got some ${butter} on popcorn`)
// console.log("husband: anything else darling")
// console.log("wife:i need some cool drink")
// let cooldrink = await getCooldrink;
// console.log(`husband: i got some ${cooldrink}`)
// console.log("husband: anything else darling")
// console.log("wife: we are getting late let's go")
// return ticket
// }
// preMovie().then((m)=>{
//     console.log(`person3:shows ${m}`)
// })

// console.log("person4:showsTickets")
// console.log("person5:showsTickets")


//promise.all
// console.log("person1:showsTickets")
// console.log("person2:showsTickets")
// const preMovie= async ()=>{
//     const promiseWifeBringingTickets = new Promise((resolve,reject)=>{
//         setTimeout(()=>{resolve("ticket")},3000)
//     })
// const getPopcorn=new Promise((resolve,reject)=>{
//     resolve("popcorn")
// })
// const getCandy = new Promise((resolve,reject)=>{
//     resolve("candy")
// })
// const getCooldrink = new Promise((resolve,reject)=>{
//     resolve("cool drink")
// })
// let ticket=await promiseWifeBringingTickets;
// let [Popcorn,Candy,Cooldrink] = await Promise.all([getPopcorn,getCandy,getCooldrink])
// console.log(`${Popcorn},${Candy},${Cooldrink}`)
// return ticket
// }
// preMovie().then((m)=>{
//     console.log(`person3:shows ${m}`)
// })

// console.log("person4:showsTickets")
// console.log("person5:showsTickets")

// try catch
console.log("person1:showsTickets")
console.log("person2:showsTickets")
const preMovie= async ()=>{
    const promiseWifeBringingTickets = new Promise((resolve,reject)=>{
        setTimeout(()=>{reject("ticket")},3000)
    })
    let ticket;
    try{
        ticket = await promiseWifeBringingTickets;
    } catch(e){
        ticket="sad face"
    }
return ticket
}
preMovie().then((m)=>{
    console.log(`person3:shows ${m}`)
})

console.log("person4:showsTickets")
console.log("person5:showsTickets")