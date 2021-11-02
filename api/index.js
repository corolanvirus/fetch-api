// vas récupérer des citations au pif.
const quote = document.getElementById('quote')
const author = document.getElementById('author')
const getQuote = () => {
    fetch('https://api.quotable.io/random')
        .then((res) => res.json())
        .then(data => {
            quote.innerHTML = data.content
            author.innerHTML = data.author
        })
    fetch('https://picsum.photos/1600/1000')
        .then((res) => {
            document.getElementById('pic').innerHTML =
                `<img src=${res.url}/>`
        })
}
quote.addEventListener('click', () => getQuote())


