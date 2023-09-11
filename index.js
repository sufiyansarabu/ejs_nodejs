import express from "express";
const  app = express();
let port = 8000;

app.get("/", (req, res) => {

    const today = new Date("september 18, 1983 01:15:00");
    const day = today.getDay();

   let type = " a weekday";
   let adv = "it is the weekday workhard"
if(day===0 || day===6){
    type = "a weekend ",
    adv =  "its time to fun";
}
      res.render("index.ejs",{
         dayType: type,
         advice: adv,
  });
});

app.listen(port, () => {
  console.log(`port is running on the 3000 server ${port}.`);
});
  