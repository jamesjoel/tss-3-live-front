import express from 'express'
import PATH from 'path';
const app = express();

const root = PATH.join(PATH.resolve()+"/dist");
app.use(express.static(root));

app.get('/{*splat}', (req, res)=>{
    res.sendFile("index.html", {root})
    // res.send()
})

app.listen(3000, ()=>console.log("server running with in 3000"))