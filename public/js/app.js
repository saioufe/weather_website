
console.log("client side javascript")

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message1')
const messageTwo = document.querySelector('#message2')




weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value

    if (search.value != '') {
        fetch("https://api.weatherstack.com/current?access_key=4e1175ac83b99c87d8e0b5930d758514&query=" + location + "  ").then((response) => {
            response.json().then((data) => {
                console.log(data.current.temperature)
                messageOne.textContent = "Temp : " + data.current.temperature + " "
                messageTwo.textContent = ""
            })
        })

    } else {

        messageTwo.textContent = "error : please provide a location"
        console.log({
            error: "please provide a location"
        })
    }


})