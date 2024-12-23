const app = require("express")();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.model");

const port = 3010;

//ejs templating
app.set("views", path.join(__dirname, "views"));
app.set("view-engine", "ejs");

// Database Connection
main()
  .then(() => {
    console.log("Connection Build...");
  })
  .catch((err) => {
    console.log("Error : ", err);
  });

async function main() {
  await mongoose.connect("mongodb://localhost:27017/whatsapp");
}

//routes
app.get("/", (req, res) => {
  res.render("new.ejs");
});

//user1schema
const user1 = new Chat({
  from: "Suraj",
  to: "Krishna",
  message: "Send Exam Notes.",
  createdAt: new Date(),
});

user1
  .save()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

app.get("/user",async(req,res)=>{
    const user = await Chat.find();
    res.render("show.ejs",{user});
})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
