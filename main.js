
const URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/<word>'
const result = document.getElementById("result");
const formulario = document.getElementById("serch");

formulario.addEventListener("submit", () => {
  e.preventDefault().value;
  console.log("Enviar formulario");
  const data = new URLSearchParams(new FormData(formulario));
  console.log(data.get('#SerchBox'));
  console.log(data.get('#SerchInput'));
  console.log(data.get('#Detalles'));

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6a06afaae8msh2d73cfaa3646ec0p1c7585jsn7d048ff5332d',
      'X-RapidAPI-Host': 'dictionary35.p.rapidapi.com'
    },
  };
  
  fetch(URL, options)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      const { definitions } = response.data
      const { definitionText } = definitions[0];
      console.log(definitionText);
      result.innerText = definitionText
    })
    .catch(err => console.error(err));

});






/*
[
    {
      "word": "hello",
      "phonetic": "həˈləʊ",
      "phonetics": [
        {
          "text": "həˈləʊ",
          "audio": "//ssl.gstatic.com/dictionary/static/sounds/20200429/hello--_gb_1.mp3"
        },
        {
          "text": "hɛˈləʊ"
        }
      ],
      "origin": "early 19th century: variant of earlier hollo ; related to holla.",
      "meanings": [
        {
          "partOfSpeech": "exclamation",
          "definitions": [
            {
              "definition": "used as a greeting or to begin a phone conversation.",
              "example": "hello there, Katie!",
              "synonyms": [],
              "antonyms": []
            }
          ]
        },
        {
          "partOfSpeech": "noun",
          "definitions": [
            {
              "definition": "an utterance of ‘hello’; a greeting.",
              "example": "she was getting polite nods and hellos from people",
              "synonyms": [],
              "antonyms": []
            }
          ]
        },
        {
          "partOfSpeech": "verb",
          "definitions": [
            {
              "definition": "say or shout ‘hello’.",
              "example": "I pressed the phone button and helloed",
              "synonyms": [],
              "antonyms": []
            }
          ]
        }
      ]
    }
]
*/



