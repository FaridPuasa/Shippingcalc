function shipCalculator(){
    //static value
    let handling = 40
    let division = 100 * 100 * 100
    let duty
    let shipping
    //let shippingCost = actualCbm * 230
    //console.log("B$" + shippingCost.toFixed(2))
    //dom Elements
    let country = document.getElementById("origin").value
    let price = document.getElementById("itemPrice").value //7500
    let type = document.getElementById("nature").value
    let length = document.getElementById("length").value //200
    let width = document.getElementById("width").value //200
    let height = document.getElementById("height").value //200
    
    //dom elements return value
    let priceVal = document.getElementById("priceValue")
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
    
    if(country == "China"){
      shipping = 230
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
    
    if(type == "Electrical"){
      duty = 0.05
    }
    else if(type == "Tyres(New)"){
      duty = 0.05
    }
    else if(type == "Tyres(Used)"){
      duty = 0.05
    }
    else if(type == "Home Appliances"){
      duty = 0.05
    }
    else if(type = "Hair Products"){
      duty = 0.05
    }
    else if(type == "Textile Products"){
      duty = 0.05
    }
    else if(type == "Furniture"){
      duty = 0.05
    }
    else if(type == "Cosmetics Products"){
      duty = 0.05
    }
    else if(type == "Fireworks"){
      duty = 0.3
    }
    else if(type == "Watches / Wathes Parts / Watches Acessories"){
      duty = 0.1
    }
    else if(type == "Jewelleries / Precious Metals"){
      duty = 0.15
    }
    else if(type == "Consoles / Video Games"){
      duty = 0.2
    }
    else if(type == "Sports Equipments"){
      duty = 0.1
    }
    else if(type == "Vehicle Spare Parts"){
      duty = 0.05
    }
    else if(type == "Industrial Machinaries"){
      duty = 0.025
    }
    else if(type == "Plastic products"){
      duty = 0.03
    }
    else if(type == "Headgear"){
      duty = 0.1
    }
    else if(type == "Mobile Device / Phone / Camera"){
      duty = 0.1
    }
    else if(type == "Rubber Products"){
      duty = 0.05
    }
    else if(type == "Leather Bags / Shoes / Luggage / Jackets"){
      duty = 1
    }
    else if(type == "Sensitive Items"){
      duty = 1
    }
    else{
      duty = "Not Eligible"
    }
    
    let percent = (duty*100)+"%"
    percentageVal.innerHTML = "(" + percent + ")" //return percentage
    console.log("Commodities: " + type)
    console.log("Tax Duty: " + percent)
    console.log("Item Price: " + price)
    
    
    priceVal.innerHTML = "B$" + price
    console.log(price)
    if (price == 0 || actualCbm == 0){
      let prelimCost = actualCbm * handling
      let handlingCost = prelimCost
      console.log("B$" + handlingCost.toFixed(2))
    }
    else if (price >= 1 && actualCbm >= 1){
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
      
      let total = handlingCost + priceDuty + shippingCost
      totalVal.innerHTML = "B$" + total.toFixed(2)
      console.log("Total Shipment Cost: " + "B$" + total.toFixed(2))
    }
    else{
      console.log("ERROR")
    }
  }
  
  
  
  