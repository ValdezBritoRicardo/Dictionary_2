
const URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/<word>'
const Container = document.querySelector(".Container"),
SearchInput = Container.querySelector(".input"),
infoText = Container.querySelector(".info_text"),
Synonyms = Container.querySelector(".synonyms .list"),
remove = Container.querySelector(".serch span");

function data(result, word) {
  if(result.title) {
    infoText.innerHTML = `No se encontro el significado de ${word}`;
  }else{
    Container.classList.add("active");
    let definitions = result[0].meanings[0].document[0];
    document.querySelector(".word p").innerText = result[0].word;
    document.querySelector(".meaning span").innerText = definitions.definition;
    document.querySelector(".example span").innerText = definitions.example;

    if(definitions.Synonyms[0] == undefined) {
      Synonyms.parentElement.style.display = "none";
    }else{
      Synonyms.parentElement.style.display = "block";
      Synonyms.innerHTML = "";
      for (let i = 0; i < 5; i++) {
        Synonyms.insertAdjacentHTML("beforeend",tag);
      }
    }
  }
}

function fetchapi(word) {
  fetchapi(word);
  SearchInput.value = word;
}

function fetchapi(word) {
  Container.classList.remove("active");
  infoText.innerHTML = `Searching the meaning of ${word}`;
  let url `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  fetch(url).then(response => response.json()).then(result => data(result, word)).catch(() => {
    infoText.innerHTML = `Can't find the meaning of ${word}`;
  });
}

SearchInput.addEventListener("keyup", e => {
  let word = e.target.value.replace(/\s+/g, ' ');
  if(e.key == "Enter" && word) {
    fetchapi(word);
  }
});

remove.addEventListener("click", () => {
  SearchInput.value = "";
  SearchInput.focus();
  Container.SclassList.remove("active");
  infoText.innerHTML = "type any existing word and press enter to get meaning";
})


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



