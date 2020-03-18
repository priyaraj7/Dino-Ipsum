export class DinoService {
  async getDinoIpsum(paragraphs, words) {
    try {
      let response = await fetch(
        //`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`
        // `http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=${paragraphs}&words=${words}`
        `https://dinoipsum.herokuapp.com/api/?format=json&paragraphs=${paragraphs}&words=${words}`
      );
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch (e) {
      return false;
    }
  }
}
