import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import { DinoService } from "./../src/dino-service.js";

$(document).ready(function() {
  $("#weatherLocation").click(function() {
    const paragraphs = $("#paragraph").val();
    $("#paragraph").val(""); // for clearing the number
    const words = $("#words").val();
    $("#words").val("");

    (async () => {
      let dinoService = new DinoService();
      const response = await dinoService.getDinoIpsum(paragraphs, words);
      getElements(response);
    })();

    function getElements(response) {
      if (response) {
        $(".output").empty();

        response.forEach(res => {
          let result = `<p>${res.join(" ")}</p>`;
          $(".output").append(result);
        });
      } else {
        $(".output").text(`There was an error handling your request.`);
      }
    }
  });
});
//......using for loop
// for (let i = 0; i < response.length; i++) {
// let result = `<p>${response[i].join(" ")}</p>`;
// $(".output").append(result);
