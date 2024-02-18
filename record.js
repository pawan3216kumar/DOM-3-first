let form = document.querySelector(".navbar")
let tbody = document.getElementById("tbody")
let data = []

// form.addEventListener("submit" , function(event){
// handleSubmit(event)
// })


function handleSubmit(event){

    event.preventDefault()
    let name = document.querySelector("#name").value
    let department = document.querySelector("#department").value
    let exp = document.querySelector("#exp").value
    let email = document.querySelector("#email").value
    let mobile = document.querySelector("#mbl").value

    
    let obj = {
        id : (Math.random()).toString(),
        EmployeeName : name,
        department: department,
        experience : exp,
        email : email,
        Mobile : mobile,
        email : email
    }

    console.log(data)
    data.push(obj)

    showData(data)
 
}

function showData(data){
    // console.log(data)
    tbody.innerHTML = ""

    data.forEach(function (ele,i){
     let tr = document.createElement('tr')

     let td1 = document.createElement('td')
     td1.innerHTML = ele.EmployeeName

     let td2 = document.createElement('td')
     td2.innerHTML = i+1

     let td3 = document.createElement('td')
     td3.innerHTML = ele.department

     let td4 = document.createElement('td')
     td4.innerHTML = ele.experience 

     let td5 = document.createElement('td')
     td5.innerHTML = ele.email
        
     let td6 = document.createElement('td')
     td6.innerHTML = ele.Mobile

    let status;
    
    ele.experience >= 5 ? status = "Senior" : ele.experience < 5 && ele.experience >=2 ? status = "Junior" : status = "Fresher"

     let td7 = document.createElement('td')
     td7.innerHTML = status

     let td8 = document.createElement('td')
     let dltBtn = document.createElement("button")
     dltBtn.innerText = "Delete"
     dltBtn.addEventListener("click", function(){
        handleDeleteData(ele.id)
     })
     td8.append(dltBtn)

     tr.append(td1 , td2 , td3 , td4 , td5 , td6 , td7 , td8)
     
     tbody.append(tr)

    });
}

form.addEventListener("submit" , function(event){
    handleSubmit(event)

    })

function handleDeleteData(id){

    data = data.filter((ele) => {
        return ele.id != id
    })

    showData(data)

}
    

