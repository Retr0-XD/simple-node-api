const express = require('express'),

app = express()


require('dotenv').config()

app.set('view engine', 'ejs')

app.use('/',require('./routes/monkemon'))

//app.get('/',(req,res)=> {
//  res.send('pablo pamapaampmaapmapapma')
//})

const PORT =  process.env.PORT || 3030

app.listen(PORT, ()=> {
    console.log(`Listening on port: ${PORT}`)
})