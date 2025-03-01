from flask import Flask, render_template, redirect, send_from_directory, request

app = Flask(__name__)

engines = {
    "g": "https://www.google.com/search?q=",
    "w": "https://en.wikipedia.org/w/index.php?search=",
    "y": "https://www.yandex.com/search/?text=",
    "yt": "https://www.youtube.com/results?search_query=",
    "b": "https://www.bing.com/search?q=",
    "d": "https://duckduckgo.com/?q=",
    "l": "https://duckduckgo.com/?q=!ducky ",
}

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/search/search.js")
def search_js():
    return send_from_directory("search", "search.js")

@app.route("/search")
def search():
    q = request.args.get("q")
    if not q:
        return redirect("/")
    if "!" in q:
        for engine in engines:
            if q.endswith(f" !{engine}"):
                return redirect(engines[engine] + q[:-len(f" !{engine}")])
    else:
        return redirect(engines["g"] + q)

if __name__ == "__main__":
    app.run(debug=True)
