suggestionsTimer = new Date().getTime();

function updateSuggestions() {
  if (input.value.length === 0) {
    return;
  }
  if (new Date().getTime() - suggestionsTimer < 250) {
    return;
  }
  suggestionsTimer = new Date().getTime();
  getGoogleSuggestions(input.value).then((suggestions) => {
    let suggestionList = document.getElementById("suggestionList");
    suggestionList.innerHTML = "";
    suggestions.forEach((suggestion) => {
      let suggestionElement = document.createElement("li");
      suggestionElement.textContent = suggestion;
      suggestionElement.addEventListener("click", function() {
        input.value = suggestion;
        search(suggestion);
      });
      suggestionList.appendChild(suggestionElement);
    });
  });
}

async function getGoogleSuggestions(query) {
  const url = `https://corsproxy.io/?https://suggestqueries.google.com/complete/search?output=firefox&q=${encodeURIComponent(query)}`;
  
  try {
      const response = await fetch(url, {
          headers: { 'Accept': 'application/json' }
      });

      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data[1]; // Extracting only the suggestions array
  } catch (error) {
      console.error("Error fetching autocomplete suggestions:", error);
      return [];
  }
}

function search(query) {
  var input = document.getElementById("searchBox");
  const engines = {
    "g": "https://www.google.com/search?q=",
    "w": "https://en.wikipedia.org/w/index.php?search=",
    "y": "https://www.yandex.com/search/?text=",
    "yt": "https://www.youtube.com/results?search_query=",
    "b": "https://www.bing.com/search?q=",
    "d": "https://duckduckgo.com/?q=",
    "l": "https://duckduckgo.com/?q=!ducky&20",
  };

  // Check for bang syntax (!w) or space syntax (w)
  let engineUsed = false;
  for (let engine in engines) {
    if (query.endsWith(" !" + engine) || query.endsWith("!" + engine)) {
      query = query.replace(" !" + engine, "").replace("!" + engine, "");
      window.location.href = engines[engine] + encodeURIComponent(query);
      engineUsed = true;
      break;
    } else if (query.endsWith(" " + engine)) {
      query = query.replace(" " + engine, "");
      window.location.href = engines[engine] + encodeURIComponent(query);
      engineUsed = true;
      break;
    }
  }

  // If no specific engine was used, default to Google
  if (!engineUsed) {
      window.location.href = engines["g"] + encodeURIComponent(query);
  }
}

var arguments = window.location.search
var q = new URLSearchParams(arguments).get("q")
if (q) { search(q) }
var input = document.getElementById("searchBox");
input.value = "";

window.addEventListener("pageshow", function(event) {
  input.value = "";
  input.focus();
});

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    let query = input.value;
    if (query.length === 0) {
      return;
    }
    search(query);
  }
});

var body = document.querySelector("body");
body.addEventListener("keydown", function(event) {
  if (event.ctrlKey && event.key === "a") {
    input.select();
  }
});

window.addEventListener("click", function() {
  console.log("clicked");
  input.focus();
});