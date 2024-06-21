var popupoverlay = document.querySelector(".popup-overlay")
var popupbook = document.querySelector(".popup-box")


function addbook(){
    popupoverlay.style.display="block"
    popupbook.style.display="block"

}
 var cancel = document.getElementById("close")

 cancel.addEventListener('click',function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbook.style.display="none"

 })

 var container = document.querySelector(".container")
 var insertbooks = document.getElementById("insertbook")
 var booktitle = document.getElementById("book-title")
 var bookauthor = document.getElementById("book-author")
 var bookdescription = document.getElementById("book-description")

 insertbooks.addEventListener('click',function(event){
    event.preventDefault()
 var div=document.createElement("div")
 div.setAttribute("class","book")
 div.innerHTML = `<h2>${booktitle.value}</h2>
 <h4>${bookauthor.value}</h4>
<p>${bookdescription.value}</p>
<button onclick="remove(event)">Delete</button>`
container.append(div)
popupoverlay.style.display="none"
popupbook.style.display="none"
})

function remove(event){
    event.target.parentElement.remove()

}



