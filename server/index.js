const http = require('http')
const fs = require('fs')
const querystring = require('querystring')


http.createServer((req, res) => {
  const query = querystring.parse(req.url.split('?')[1])
  if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.write(JSON.stringify(['Ion', 'Vasile', 'Nicoleta', 'Darius', 'Victor', 'Raluca']))
  } else if (req.url === '/cart' && req.method === 'GET') {
    const file = fs.readFileSync('cart.json', 'utf8')
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.write(file)
  } else if (req.url.includes('/cart/add')) {
    const cart = JSON.parse(fs.readFileSync('cart.json', 'utf8'))
    console.log(query.item, query)
    cart.push(query.item)
    fs.writeFileSync('cart.json', JSON.stringify(cart))
    res.write('All good')
  } else {
    res.write('<h1>Hello students!</h1>')
  }
  return res.end()
}).listen(3001)
