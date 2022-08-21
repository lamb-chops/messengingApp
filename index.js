document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault()

    document.querySelector('#message-form').classList.add("hide")
    document.querySelector('#link-form').classList.remove("hide")

    const input = document.querySelector('#message-input')
        //btoa built in method to go from string to base 64, atob converts it back
    const encrypted = btoa(input.value)

    const inputLink = document.querySelector('#link-input')
    inputLink.value = `${window.location}#${encrypted}`
        //selects input and text inside, for copying
    inputLink.select()
})