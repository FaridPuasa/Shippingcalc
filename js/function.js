function shipCalculator(){
    //static value
    let handling = 40
    let division = 100 * 100 * 100
    let duty
    let shipping
    let permit
    //let shippingCost = actualCbm * 230
    //console.log("B$" + shippingCost.toFixed(2))
    //dom Elements
    let country = document.getElementById("origin").value
    let permitApplication = document.getElementsByName('optradio')
    let price = document.getElementById("itemPrice").value //7500
    let group = document.getElementById("taxGroup").value
    let length = document.getElementById("length").value //200
    let width = document.getElementById("width").value //200
    let height = document.getElementById("height").value //200
    
    //dom elements return value
    let priceVal = document.getElementById("priceValue")
    let adminVal = document.getElementById("adminValue")
    let dutyVal = document.getElementById("dutyValue")
    let percentageVal = document.getElementById("percentage")
    let handlingVal = document.getElementById("handlingValue")
    let shippingVal = document.getElementById("shippingValue")
    let volumeVal = document.getElementById("volumeValue")
    let totalVal = document.getElementById("totalValue")
    
    //initial calculation
    
    let cbm = length * width * height
    let actualCbm = cbm/division
    volumeVal.innerHTML = actualCbm + "M<sup>3</sup>"
    console.log("Size: " + actualCbm + " CBM")

    for (let i = 0; i < permitApplication.length; i++) {
      if (permitApplication[i].checked) {
        console.log(permitApplication[i].value);
        if(permitApplication[i].value == "Yes"){
          permit = 10
        }
        else if(permitApplication[i].value == "No"){
          permit = 0
        }
        else{
          console.log("Permit Application: Error")
        }
        break;
      }
    }

    adminVal.innerHTML = "B$" + permit
    console.log("Permit Application: " + permit)
    
    if(country == "China"){
      shipping = 200
    }
    else if(country == "China(Air)"){
      shipping = 23
    }
    else if(country == "Malaysia"){
      shipping = 180
    }
    else if(country == "Singapore"){
      shipping = 180
    }
    else{
      shipping = 0
    }
    
    console.log("County of Origin: " + country)
    console.log("Shipping Rate: " + shipping)
    let shippingCost = shipping * actualCbm
    shippingVal.innerHTML = "B$" + shippingCost.toFixed(2) //return shipping cost
    console.log("Shipping Cost: " + "B$" + shippingCost.toFixed(2))
    
    console.log("Tax Group: " + group)
    if(group == "G1"){
        duty = 1
    }
    else if(group == "G2"){
        duty = 0.3
    }
    else if(group == "G3"){
        duty = 0.1
    }
    else if(group == "G4"){
        duty = 0.15
    }
    else if(group == "G5"){
        duty = 0.2
    }
    else if(group == "G6"){
        duty = 0.05
    }
    else if(group == "G7"){
        duty = 0.03
    }
    else if(group == "G8"){
        duty = 0.025
    }
    else if(group == "G9"){
        duty = 0
    }
    else{
        console.log("Duty: ERROR" )
    }
    
    let percent = (duty*100)+"%"
    percentageVal.innerHTML = "(" + percent + ")" //return percentage
    console.log("Tax Duty: " + percent)
    console.log("Item Price: " + price)
    
    
    priceVal.innerHTML = "B$" + price
    console.log(price)
    if (price == 0 || actualCbm == 0){
      let prelimCost = actualCbm * handling
      let handlingCost = prelimCost
      console.log("B$" + handlingCost.toFixed(2))
    }
    else if (price >= 1 && actualCbm > 0){ 
      let priceDuty = price * duty
      let prelimCost = actualCbm * handling
      let handlingCost = prelimCost - priceDuty
      if(handlingCost <= 0){
        handlingCost = 0
      }
      
      dutyVal.innerHTML = "B$" + priceDuty.toFixed(2) //return tax duty value
      handlingVal.innerHTML = "B$" + handlingCost.toFixed(2) //return handling cost
      
      console.log("Tax Duty: " + "B$" + priceDuty.toFixed(2))
      console.log("Handling Cost: " + "B$" + handlingCost.toFixed(2))
      
      let total = handlingCost + priceDuty + shippingCost + permit
      totalVal.innerHTML = "B$" + total.toFixed(2)
      console.log("Total Shipment Cost: " + "B$" + total.toFixed(2))
    }
    else{
      console.log("Total: ERROR")
    }
  }
  
  
  
  
