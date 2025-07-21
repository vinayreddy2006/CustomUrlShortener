const express= require("express");
const { connectToMongoDB }= require("./connect");
const cookieParser= require("cookie-parser");
const path=require("path");
const { checkForAuthentication, restrictTo, }= require("./middlewares/auth");

const URL=require("./models/url");

const app=express();
const port=8000;

const urlRoute=require("./routes/url");
const staticRoute= require("./routes/staticRouter");
const userRoute=require("./routes/user");

connectToMongoDB("mongodb://127.0.0.1:27017/short-url")
.then(()=> console.log("Connect to mongo DB successfully"));

app.set("view engine","ejs");
app.set("views" , path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended:false }));
app.use(cookieParser());
app.use(checkForAuthentication);

app.get("/test", async (req,res) => {
  const allUrls= await URL.find({});
  return res.render("home", {
    urls: allUrls,
  });
});

app.use("/url",restrictTo(["NORMAL","ADMIN"]),urlRoute);
app.use("/user",userRoute);
app.use("/", staticRoute);

app.get("/url/:shortId", async (req,res) => {
    const shortId=req.params.shortId;
    const entry= await URL.findOneAndUpdate(
       {
        shortId,
       },
       {
        $push: {
          visitHistory: {
            timestamp: Date.now(),
          },
        },
       }
    );
    res.redirect(entry.redirectURL);
  }
);
app.listen(port, () => console.log(`Server started at PORT:${port}`));