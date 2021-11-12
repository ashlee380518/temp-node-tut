const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/') {
        res.end('Welcome to our home page')
    }
    else if(req.url === '/about') {
        res.end('Here is our short history')
    }
    // res.end('Oops')//you can keep refreshing this section, but then you can't go to home.
    else {
        res.end(`
    <!doctype html>
    <html>
    <body>
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    </body></html>
    `)
    }//and also the HTML doesn't work here. But why does it work in the video? //trying res.send
    //I went on his Github and used else ifs and else to remove the "local host not found" error,
    //and everything seems to work except for the fact that the HTML doesn't show up. //manually do the HTML for now. 
    //It is odd that there is a problem like this, and I shouldn't spend too much time on it, but oh well.
    //manually (doctype, html, body...) doing it works. I guess the tutorial person has a different setup of some sort.
})

server.listen(5000)