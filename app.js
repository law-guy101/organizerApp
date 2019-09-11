let ourForm = document.getElementById("ourForm")
let ourField = document.getElementById("ourField")
let ourList = document.getElementById("ourList")

ourForm.addEventListener('submit', (e) => {
    e.preventDefault()
    createItem(ourField.value)
})

function createItem(x) {
let ourHTML = `<li>${x}<br><button class="btn btn-outline-secondary" onclick="deleteItem(this)" style="margin-top: 10px; height: 20px; line-height: 2px;">Delete</button></li>`
    ourList.insertAdjacentHTML("beforeend", ourHTML)
    ourField.value = ""
    ourField.focus()
}

function deleteItem(elementToDelete) {
    elementToDelete.parentElement.remove()
}

//<button type="button" class="btn btn-outline-secondary">Create Item</button>//
