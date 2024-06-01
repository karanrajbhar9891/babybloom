import { display } from "./display"
let maindiv = document.getElementById("items")
let filtervalue = document.getElementById("filter")
let searchval = document.getElementById("search1")
let submitbtn = document.getElementById("submit")
let sortvalue = document.getElementById("sort")
let sortbyprice = document.getElementById("sortbyprice")
let loginpage = document.getElementById("login")
let home = document.getElementById("home")

let alldata
const url="https://babybloom.onrender.com/product"


fetch(url)
.then((res)=>{
    return res.json()
})
.then((data)=>{
    alldata=data.products
    display(data.products)
})
.catch((err)=>{
    console.log(err)
})

     loginpage.addEventListener("click",()=>{
     window.location.href="./login.html"
  })

sortbyprice.addEventListener("change",()=>{

    if(sortbyprice.value =="high"){

        let assending = alldata.sort((a,b)=>{return a.price - b.price })
        display(assending)
        // console.log(assending)
    }else if(sortbyprice.value =="low"){
        let decending = alldata.sort((a,b)=>{return b.price - a.price })
        display(decending)
        // console.log(decending)
    }else{
        display(alldata)
    }
})

sortvalue.addEventListener("change",()=>{
    let sortarr=[]
    console.log(sortvalue.value)
    alldata.filter((ele,ind)=>{
        if(ele.color == sortvalue.value){
            sortarr.push(ele)
            
        }
    })
    if(sortarr.length==0){
        display(alldata) 
    }else if(sortarr.length>0){
       display(sortarr)
    }
})


filtervalue.addEventListener("change",()=>{
    let filteredarr =[]
    console.log(filtervalue.value)
    alldata.filter((ele,ind)=>{
        if(ele.maincat == filtervalue.value){
            filteredarr.push(ele)
        }
    })
    if(filteredarr.length==3){
        display(alldata) 
    }else if(filteredarr.length>0){
       display(filteredarr)
    }
})

submitbtn.addEventListener("click",()=>{
    let searcharr =[]
    alldata.filter((ele,ind)=>{
        if(ele.subcat.toLowerCase()==searchval.value.toLowerCase() || ele.maincat.toLowerCase()==searchval.value.toLowerCase()
        ||ele.color.toLowerCase()==searchval.value.toLowerCase() ){
            searcharr.push(ele)
        }
    })
    if(searcharr.length>0){
        display(searcharr)
    }
    console.log("searchval",searchval.value)
})
home.addEventListener("click",()=>{
    display(alldata)
})




