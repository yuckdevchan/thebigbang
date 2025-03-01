function search(query) {
  var input = document.getElementById("searchBox");
  const engines = {
    "g": "https://www.google.com/search?q=",
    "w": "https://en.wikipedia.org/w/index.php?search=",
    "y": "https://www.yandex.com/search/?text=",
    "yt": "https://www.youtube.com/results?search_query=",
    "b": "https://www.bing.com/search?q=",
    "d": "https://duckduckgo.com/?q=",
    "l": "https://duckduckgo.com/?q=!ducky ",
  };

  // Check for bang syntax (!w) or space syntax (w)
  let engineUsed = false;
  for (let engine in engines) {
    if (query.endsWith(" !" + engine) || query.endsWith("!" + engine)) {
      query = query.replace(" !" + engine, "").replace("!" + engine, "");
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

var sunIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4V2m0 18v2M6.414 6.414L5 5m12.728 12.728l1.414 1.414M4 12H2m18 0h2m-4.271-5.586L19.143 5M6.415 17.728L5 19.142M12 17a5 5 0 1 1 0-10a5 5 0 0 1 0 10"/></svg>';
var moonIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 6a9 9 0 0 0 9 9c.91 0 1.787-.134 2.614-.385A9 9 0 0 1 12 21A9 9 0 0 1 9.386 3.386A9 9 0 0 0 9 6"/></svg>'
var themeToggleIcon = document.getElementById("themeToggleIcon");

if (document.cookie.includes("theme=dark") || document.cookie.includes("theme=light")) {
  if (document.cookie.includes("theme=dark")) {
    document.body.classList.add('dark-mode');
    themeToggleIcon.innerHTML = sunIcon;
  } else {
    themeToggleIcon.innerHTML = moonIcon;
  }
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add('dark-mode');
  themeToggleIcon.innerHTML = sunIcon;
} else {
  themeToggleIcon.innerHTML = moonIcon;
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  if (document.cookie.includes("theme=dark")) {
    return;
  } else if (document.cookie.includes("theme=light")) {
    return;
  }
  if (e.matches) {
    document.body.classList.add('dark-mode');
    themeToggleIcon.innerHTML = sunIcon;
  } else {
    document.body.classList.remove('dark-mode');
    themeToggleIcon.innerHTML = moonIcon;
  }
});

var themeTogglebutton = document.getElementById("themeToggleButton");
themeTogglebutton.addEventListener("click", function() {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    themeToggleIcon.innerHTML = sunIcon;
    document.cookie = "theme=dark";
  } else {
    themeToggleIcon.innerHTML = moonIcon;
    document.cookie = "theme=light";
  }
});

function searchButtonPressed() {
  var input = document.getElementById("searchBox");
  let query = input.value;
  if (query.length === 0) {
    return;
  }
  search(query);
}

function luckyButtonPressed() {
  var input = document.getElementById("searchBox");
  let query = input.value;
  if (query.length === 0) {
    return;
  }
  window.location.href = "https://duckduckgo.com/?q=!ducky " + encodeURIComponent(query);
}

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