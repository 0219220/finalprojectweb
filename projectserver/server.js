//const ct = require('countries-and-timezones');
const express = require("express");//this calls on the express package
const app = express();
//this calls on the superhero package

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));





const Flightsdb = [
    {
        destination: "Berlin, Germany",
        departure: "11:00",
        date: '01/01/2022',
        imgurl: "https://cdn.pixabay.com/photo/2019/02/16/23/47/berlin-4001319_960_720.jpg",//the tower from Berlin 
        duration: "9:00 hours"
    },
    {
        destination: "London, England",
        departure: "12:00",
        date: '07/01/2022',
        imgurl: "https://cdn.pixabay.com/photo/2014/11/13/23/34/palace-530055_960_720.jpg",
        duration: "7:00 hours",
    },

    {
        destination: "Paris, France",
        departure: "13:00 ",
        date: '07/01/2022',
        imgurl: "https://cdn.pixabay.com/photo/2018/04/25/09/26/eiffel-tower-3349075_960_720.jpg",// 
        duration: "7:30 hours",
    },

    {
        destination: "Rome, Italy",
        departure: "14:00 ",
        date: '02/01/2022',
        imgurl: "https://cdn.pixabay.com/photo/2017/04/27/07/02/rome-2264660_960_720.jpg",// 
        duration: "8:30 hours",
    },


    {
        destination: "Brussels, Belgium",
        departure: "15:00 ",
        date: '11/01/2022',
        imgurl: "https://cdn.pixabay.com/photo/2016/07/27/20/58/brussels-1546290_960_720.jpg",// 
        duration: "11:30 hours",
    },


    {
        destination: "Moscow, Russia",
        departure: "20:00 ",
        date: '19/01/2022',
        imgurl: "https://cdn.pixabay.com/photo/2018/12/26/05/13/moscow-3895333_960_720.jpg",// 
        duration: "13:30 hours",
    },


    {
        destination: "Reykjavik, Iceland",
        departure: "10:00 ",
        date: '19/01/2022',
        imgurl: "https://cdn.pixabay.com/photo/2018/11/07/18/29/iceland-3800913_960_720.jpg",// 
        duration: "15:30 hours",
    }

    
]


app.get('/', (req, res) => {
    res.sendFile("index.html");//this is how we call on our webpage to become a live server
});



app.get('/signin1', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.json(Flightsdb);
});



app.get('/flight/:destination', (req, res) => {


    res.json(Flightsdb[req.params.destination]);
});

app.listen(5000, () => {
    console.log("this is running at port 5000")
});


