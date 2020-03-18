import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import { DinoService } from "./../src/dino-service.js";

$(document).ready(function() {
  $("#weatherLocation").click(function() {
    const paragraphs = $("#paragraph").val();
    $("#paragraph").val("");
    const words = $("#words").val();
    $("#words").val("");

    (async () => {
      let dinoService = new DinoService();
      const response = await dinoService.getDinoIpsum(paragraphs, words);
      getElements(response);
    })();

    function getElements(response) {
      if (response) {
        //debugger;
        $(".output").empty();
        for (let i = 0; i < response.length; i++) {
          let result = `<p>${response[i].join(" ")}</p>`;
          $(".output").append(result);
        }
      } else {
        $(".output").text(`There was an error handling your request.`);
        //$(".showTemp").text(`Please check your inputs and try again!`);
      }
    }
  });
});

//const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;
