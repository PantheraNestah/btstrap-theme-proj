import $ from 'jquery'
import "../scss/style.scss"
import "bootstrap"


var projNamesArray = [
    "Other Projects' clients",
    "Urban Oasis Realty", 
    "Haven Homes", "Villagreen Homes", 
    "Downtown Eden", "Cityscape Properties", 
    "Oakwood Real Estate", "Maplewood Realty",
    "Harmony Homes", "Mountain View Realty",
    "Parkside Properties"
]
var projSelectObj = {
    selectElem: document.getElementById("projectsList"),
    projNames: projNamesArray,
    optionsFunc: function(){
        this.projNames.forEach((item)=>{
            var opt = document.createElement("option")
            opt.innerText = item
            this.selectElem.appendChild(opt)
        })
    }
}
document.addEventListener('DOMContentLoaded', function() {
    projSelectObj.optionsFunc()
})
