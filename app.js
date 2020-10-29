const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(express.static('public'))
var items = ["Meditation", "Exercise"]
app.use(bodyParser.urlencoded({
    extended: true
}))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {

    const options = {
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    }

    const date = new Date().toLocaleDateString('en-uk', options)

    res.render('title', {
        day: date,
        newTodos: items
    })
}
)

app.post('/', (req, res) => {
    var item = req.body.newTodo
    items.push(item)
    res.redirect('/')
})

app.listen(3000, () => {
    console.log ('server is running on port 3000 ')
})