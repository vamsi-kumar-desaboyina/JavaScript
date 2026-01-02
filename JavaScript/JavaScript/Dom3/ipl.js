var but = document.querySelector("button");

var find = Number(document.querySelector("#year").innerHTML);
console.log(find, typeof find);
iplteams = [
  {
    teamName: "Royal Challengers Bangalore",
    captains: ["Rajat Patidar"],
    year: [2025],
    imagesOfCaptions: ["images/rajat.jpg"],
  },
  {
    teamName: "Kolkata Knight Riders",
    captains: ["Shreyas Iyer", "Gautam Gambhir", "Gautam Gambhir"],
    year: [2024, 2014, 2012],
    imagesOfCaptions: ["images/iyer.jpg", "images/gau.jpg", "images/gau.jpg"],
  },
  {
    teamName: "Chennai Super Kings",
    captains: ["MS Dhoni", "MS Dhoni", "MS Dhoni", "MS Dhoni", "MS Dhoni"],
    year: [2023, 2021, 2018, 2011, 2010],
    imagesOfCaptions: [
      "images/dhoni.jpg",
      "images/dhoni.jpg",
      "images/dhoni.jpg",
      "images/dhoni.jpg",
      "images/dhoni.jpg",
    ],
  },
  {
    teamName: "Gujarat Titans",
    captains: ["Hardik Pandya"],
    year: [2022],
    imagesOfCaptions: ["images/hardik.jpg"],
  },
  {
    teamName: "Mumbai Indians",
    captains: [
      "Rohit Sharma",
      "Rohit Sharma",
      "Rohit Sharma",
      "Rohit Sharma",
      "Rohit Sharma",
    ],
    year: [2020, 2019, 2017, 2015, 2013],
    imagesOfCaptions: [
      "images/rohit.jpg",
      "images/rohit.jpg",
      "images/rohit.jpg",
      "images/rohit.jpg",
      "images/rohit.jpg",
    ],
  },
  {
    teamName: "Sunrisers Hyderabad",
    captains: ["David Warner", "Adam Gilchrist"],
    year: [2016, 2009],
    imagesOfCaptions: ["images/david.jpg", "images/adam.jpg"],
  },
  {
    teamName: "Rajasthan Royals",
    captains: ["Shane Warne"],
    year: [2008],
    imagesOfCaptions: ["images/shane.jpg"],
  },
  {
    teamName: "Delhi Captails",
    captains: [],
    year: [],
  },
  {
    teamName: "KXIP",
    captains: [],
    year: [],
  },
  {
    teamName: "LSG",
    captains: [],
    year: [],
  },
];
// console.log(iplteams);
// console.log(iplteams[0]);
var indexofyearinyear;
var indexofyear;
but.addEventListener("click", function () {
  if (find < 2008 || find > 2025) {
    document.querySelector("h1").innerHTML =
      "Enter the year to see the winning team of the ipl between 2008 to 2025";
  } else {
    for (let i = 0; i < iplteams.length; i++) {
      li = iplteams[i];
      liyear = li.year;
      console.log(li);
      console.log(liyear);
      b = false;
      for (let j = 0; j < liyear.length; j++) {
        if (find === liyear[j]) {
          indexofyearinyear = j;
          b = true;
          break;
        }
      }
      if (b) {
        indexofyear = i;
        let team = iplteams[indexofyear];
        let captain = team.captains[indexofyearinyear];
        let ima = team.imagesOfCaptions[indexofyearinyear];
        console.log(captain);
        document.querySelector(
          "h1"
        ).innerHTML = `${team.teamName} won the ipl trophy in ${find}`;
        document.querySelector("h2").innerHTML = `captain : ${captain}`;
        document.querySelector("img").src = ima;
        but.style.display = "none";
        break;
      }
    }
  }
});
