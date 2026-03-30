import express from 'express'
import PATH from 'path';
const app = express();

const root = PATH.join(PATH.resolve()+"/dist");
app.use(express.static(root));

app.get('/{*splat}', (req, res)=>{
    res.sendFile("index.html", {root})
    // res.send()
})


let port = process.env.PORT || 3000
app.listen(port, ()=>console.log("server running with in ", port))