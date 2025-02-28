function search(query) {
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
  var input = document.getElementById("searchBox");
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
