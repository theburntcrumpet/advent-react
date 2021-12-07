let adventDays = [
    {
      "url": "https://www.youtube.com/embed/bjQzJAKxTrE",
      "fact": "Christmas wasn't always on December 25!"
    },
    {
      "url": "https://www.youtube.com/embed/Xbdyg51MVbg",
      "fact": "Gifts have both Christian and Pagan origins.Christians may have grown up learning that we give gifts at Christmas to mimic the presents the Three Wise Men brought the baby Jesus. But like so many other traditions, that also has its roots in Saturnalia. The pagans originally gave offerings to the gods, too."
    },
    {
      "url": "https://www.youtube.com/embed/V3EYjVPRClU",
      "fact": "Evergreens are an ancient tradition! The tradition of christmas trees goes all the way back to ancient Egyptians and Romans."
    },
    {
      "url": "https://www.youtube.com/embed/rZCEBibnRM8",
      "fact": "You can thank Prince Albert for your Christmas tree! Brew a cup of tea when trimming your tree this year to pay homage to its origins. Prince Albert got Queen Vicky into it."
    },
    {
      "url": "https://www.youtube.com/embed/VCvz7uflMIU",
      "fact": "The idea to leave cookies and milk came from the Dutch."
    },
    {
      "url": "https://www.youtube.com/embed/94Ye-3C1FC8",
      "fact": "Coca-Cola played a part in Santa's image."
    },
    {
      "url": "https://www.youtube.com/embed/qw2TD91Nytg",
      "fact": "Rudolph was a marketing play started by a copywriter."
    },
    {
      "url": "https://www.youtube.com/embed/2HkJHApgKqw",
      "fact": "Astronauts broadcast Jingle Bells from space. Astronauts aboard the Gemini 6 told Mission Control that they saw an unidentified flying object about to enter the earth's atmosphere travelling in polar orbit North to South. The broadcast was interrupted by a rendition of Jingle Bells on harmonica."
    },
    {
      "url": "https://www.youtube.com/embed/lrVg1toMzuo",
      "fact": "The Jamestown settlers created the first ever batch of eggnog."
    },
    {
      "url": "https://www.youtube.com/embed/E8gmARGvPlI",
      "fact": "Candy canes originated in Germany. Red and white candies were given to children to keep them quiet during church services."
    },
    {
      "url": "https://www.youtube.com/embed/j9jbdgZidu8",
      "fact": "Kirsty MacColl Died in a speed boating accident!"
    },
    {
      "url": "https://www.youtube.com/embed/J3c18V3ChIs",
      "fact": ""
    },
    {
      "url": "https://www.youtube.com/embed/yfY4b1NszpY",
      "fact": ""
    },
    {
      "url": "https://www.youtube.com/embed/CjWQZBmJf6M",
      "fact": ""
    },
    {
      "url": "https://www.youtube.com/embed/SnA52s7qceM",
      "fact": ""
    },
    {
      "url": "https://www.youtube.com/embed/N-PyWfVkjZc",
      "fact": ""
    },
    {
      "url": "https://www.youtube.com/embed/BpfHSqLXePI",
      "fact": ""
    },
    {
      "url": "https://www.youtube.com/embed/n9kfdEyV3RQ",
      "fact": ""
    },
    {
      "url": "https://www.youtube.com/embed/AEyGZlBdkaA",
      "fact": ""
    },
    {
      "url": "https://www.youtube.com/embed/yXQViqx6GMY",
      "fact": ""
    },
    {
      "url": "https://www.youtube.com/embed/-wNhdjoF-6M",
      "fact": ""
    },
    {
      "url": "https://www.youtube.com/embed/WtdRv6GT9Zg",
      "fact": ""
    },
    {
      "url": "https://www.youtube.com/embed/hdnaPAJgAQI",
      "fact": ""
    },
    {
      "url": "https://www.youtube.com/embed/DDt3u2Ev1cI",
      "fact": ""
    },
    {
      "url": "",
      "fact": "https://www.youtube.com/embed/0UVUW11FENs"
    }
  ];

  export function getAdventDay(day){
    if (day > adventDays.length)
      return null;
    return adventDays[day-1];
  }

  export function getAdventDaysUntil(day){
    console.log(adventDays.slice(0,day));
    return adventDays.slice(0,day);
  }