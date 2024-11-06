/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


  window.onload = function() {
    let pronoun = ["the", "our"];
    let adj = ["great", "big"];
    let noun = ["jogger", "racoon"];
  
    let domains = pronoun
      .map(p => adj.map(a => noun.map(n => p + a + n + ".com")))
      .flat(2);
  
    console.log(domains);
  };
  
};
