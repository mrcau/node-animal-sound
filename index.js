const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())

app.get('/', function (req, res) {
  res.json({'name':'Hello World'})
})

app.get('/sound/:name', function (req, res) {
    const {name} = req.params;
    var result = '';
    if(name=='dog'){
        console.log('멍멍');
        result = '멍멍';
    }else if(name=='cat'){
        console.log('야옹야옹')
        result = '야옹야옹';
    }else if(name=='pig'){
        console.log('꿀꿀꿀')
        result = '꿀꿀꿀';
    }else{
        console.log('알수없음')
        result = '알수없음';
    }
    console.log(name)
  res.json({sound:result});
})


app.listen(3000)