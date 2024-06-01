export function display(data){
    console.log(data)
    maindiv.innerText=""
    data.forEach((ele,ind) => {
        // console.log(ele)
        let card = document.createElement("div")
        card.setAttribute("class","card")
        let imgdiv = document.createElement("div")
        let datadiv = document.createElement("div")

        let image = document.createElement("img")
        image.setAttribute("src",ele.image1)

        let title = document.createElement("h3")
        title.innerText = ele.name

        let allcat = document.createElement("div")
        allcat.setAttribute("class","allcat")

        let price = document.createElement("h2")
        price.innerText = `RS -> ${ele.price}`

        

        let maincat = document.createElement("h3")
        maincat.innerText = ele.maincat

        let subcat = document.createElement("h3")
        subcat.innerText = ele.subcat

        let des = document.createElement("p")
        des.innerText = ele.description

        let btn = document.createElement("div")
        btn.setAttribute("class","allcat")

        let btn1 = document.createElement("button")

        btn1.innerText = "View Details"
        btn1.addEventListener("click",()=>{
            localStorage.setItem("singleproduct",JSON.stringify(ele))
            window.location.href="./Singleproduct.html"
        })
        let btn2 = document.createElement("button")
        btn2.innerText = "Add to Cart"



        
        btn.append(btn1,btn2)
        allcat.append(maincat,subcat)
        datadiv.append(title,des,allcat,price,btn)
        imgdiv.append(image)
        card.append(imgdiv,datadiv)
        maindiv.append(card)
    });


}