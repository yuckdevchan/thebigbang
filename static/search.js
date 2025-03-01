var engines = {
  "g": ["https://www.google.com/search?q=", '<svg xmlns="http://www.w3.org/2000/svg" width="256" height="262" viewBox="0 0 256 262"><path fill="#4285f4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"/><path fill="#34a853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"/><path fill="#fbbc05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"/><path fill="#eb4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"/></svg>'],
  "w": ["https://en.wikipedia.org/w/index.php?search=", '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="#cfd8dc" d="M6 10a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4z"/><path fill="#37474f" d="M39 17.271a.34.34 0 0 1-.334.349h-1.799l-8.164 18.179c-.052.12-.17.2-.297.202h-.004a.33.33 0 0 1-.298-.193l-3.874-8.039l-4.18 8.049a.33.33 0 0 1-.303.184a.34.34 0 0 1-.292-.199l-8.252-18.182h-1.87a.345.345 0 0 1-.333-.35v-.921a.34.34 0 0 1 .333-.35h6.657a.34.34 0 0 1 .333.35v.921a.34.34 0 0 1-.333.349h-1.433l5.696 13.748l2.964-5.793l-3.757-7.953h-.904a.34.34 0 0 1-.333-.35v-.922c0-.191.149-.348.333-.348h4.924a.34.34 0 0 1 .333.348v.922c0 .192-.149.35-.333.35h-.867l2.162 4.948l2.572-4.948H25.77a.34.34 0 0 1-.334-.35v-.922a.34.34 0 0 1 .334-.348h4.784c.187 0 .333.156.333.348v.922a.34.34 0 0 1-.333.35h-1.05l-3.757 7.141l3.063 6.584l5.905-13.725h-1.872a.343.343 0 0 1-.334-.35v-.922c0-.191.15-.348.334-.348h5.822a.34.34 0 0 1 .334.348z"/></svg>'],
  "y": ["https://www.yandex.com/search/?text=", '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#d61e3b" d="M21.88 2h-4c-4 0-8.07 3-8.07 9.62a8.33 8.33 0 0 0 4.14 7.66L9 28.13a1.25 1.25 0 0 0 0 1.27a1.21 1.21 0 0 0 1 .6h2.49a1.24 1.24 0 0 0 1.2-.75l4.59-9h.34v8.62a1.14 1.14 0 0 0 1.2 1.13H22a1.12 1.12 0 0 0 1.16-1.06V3.22A1.19 1.19 0 0 0 22 2ZM18.7 16.28h-.59c-2.3 0-3.66-1.87-3.66-5c0-3.9 1.73-5.29 3.34-5.29h.94Z"/></svg>'],
  "yt": ["https://www.youtube.com/results?search_query=", '<svg xmlns="http://www.w3.org/2000/svg" width="256" height="180" viewBox="0 0 256 180"><path fill="#f00" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"/><path fill="#fff" d="m102.421 128.06l66.328-38.418l-66.328-38.418z"/></svg>'],
  "b": ["https://www.bing.com/search?q=", '<svg xmlns="http://www.w3.org/2000/svg" width="256" height="388" viewBox="0 0 256 388"><defs><radialGradient id="logosBing0" cx="93.717%" cy="77.818%" r="143.121%" fx="93.717%" fy="77.818%" gradientTransform="scale(-1 -.71954)rotate(49.091 2.036 -2.204)"><stop offset="0%" stop-color="#00cacc"/><stop offset="100%" stop-color="#048fce"/></radialGradient><radialGradient id="logosBing1" cx="13.893%" cy="71.448%" r="150.086%" fx="13.893%" fy="71.448%" gradientTransform="matrix(.55155 -.39387 .23634 .91917 -.107 .112)"><stop offset="0%" stop-color="#00bbec"/><stop offset="100%" stop-color="#2756a9"/></radialGradient><linearGradient id="logosBing2" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#00bbec"/><stop offset="100%" stop-color="#2756a9"/></linearGradient></defs><path fill="url(#logosBing0)" d="M129.424 122.047c-7.133.829-12.573 6.622-13.079 13.928c-.218 3.147-.15 3.36 6.986 21.722c16.233 41.774 20.166 51.828 20.827 53.243c1.603 3.427 3.856 6.65 6.672 9.544c2.16 2.22 3.585 3.414 5.994 5.024c4.236 2.829 6.337 3.61 22.818 8.49c16.053 4.754 24.824 7.913 32.381 11.664c9.791 4.86 16.623 10.387 20.944 16.946c3.1 4.706 5.846 13.145 7.04 21.64c.468 3.321.47 10.661.006 13.663c-1.008 6.516-3.021 11.976-6.101 16.545c-1.638 2.43-1.068 2.023 1.313-.939c6.74-8.379 13.605-22.7 17.108-35.687c4.24-15.718 4.817-32.596 1.66-48.57c-6.147-31.108-25.786-57.955-53.444-73.06c-1.738-.95-8.357-4.42-17.331-9.085a1633 1633 0 0 1-4.127-2.154c-.907-.477-2.764-1.447-4.126-2.154c-1.362-.708-5.282-2.75-8.711-4.539l-8.528-4.446a6021 6021 0 0 1-8.344-4.357c-8.893-4.655-12.657-6.537-13.73-6.863c-1.125-.343-3.984-.782-4.701-.723c-.152.012-.838.088-1.527.168"/><path fill="url(#logosBing1)" d="M148.81 277.994c-.493.292-1.184.714-1.537.938c-.354.225-1.137.712-1.743 1.083a8315 8315 0 0 0-13.204 8.137a2848 2848 0 0 0-8.07 4.997a388 388 0 0 1-3.576 2.198c-.454.271-2.393 1.465-4.31 2.654a2652 2652 0 0 1-7.427 4.586a3958 3958 0 0 0-8.62 5.316a3011 3011 0 0 1-7.518 4.637c-1.564.959-3.008 1.885-3.21 2.058c-.3.257-14.205 8.87-21.182 13.121c-5.3 3.228-11.43 5.387-17.705 6.235c-2.921.395-8.45.396-11.363.003c-7.9-1.067-15.176-4.013-21.409-8.666c-2.444-1.826-7.047-6.425-8.806-8.8c-4.147-5.598-6.829-11.602-8.218-18.396c-.32-1.564-.622-2.884-.672-2.935c-.13-.13.105 2.231.528 5.319c.44 3.211 1.377 7.856 2.387 11.829c7.814 30.743 30.05 55.749 60.15 67.646c8.668 3.424 17.415 5.582 26.932 6.64c3.576.4 13.699.56 17.43.276c17.117-1.296 32.02-6.334 47.308-15.996c1.362-.86 3.92-2.474 5.685-3.585a877 877 0 0 0 4.952-3.14c.958-.615 2.114-1.341 2.567-1.614a91 91 0 0 0 2.018-1.268c.656-.424 3.461-2.2 6.235-3.944l11.092-7.006l3.809-2.406l.137-.086l.42-.265l.199-.126l2.804-1.771l9.69-6.121c12.348-7.759 16.03-10.483 21.766-16.102c2.392-2.342 5.997-6.34 6.176-6.848c.037-.104.678-1.092 1.424-2.197c3.036-4.492 5.06-9.995 6.064-16.484c.465-3.002.462-10.342-.005-13.663c-.903-6.42-2.955-13.702-5.167-18.339c-3.627-7.603-11.353-14.512-22.453-20.076c-3.065-1.537-6.23-2.943-6.583-2.924c-.168.009-10.497 6.322-22.954 14.03c-12.457 7.71-23.268 14.4-24.025 14.87s-2.056 1.263-2.888 1.764z"/><path fill="url(#logosBing2)" d="m.053 241.013l.054 53.689l.695 3.118c2.172 9.747 5.937 16.775 12.482 23.302c3.078 3.07 5.432 4.922 8.768 6.896c7.06 4.177 14.657 6.238 22.978 6.235c8.716-.005 16.256-2.179 24.025-6.928c1.311-.801 6.449-3.964 11.416-7.029l9.032-5.572v-127.4l-.002-58.273c-.002-37.177-.07-59.256-.188-60.988c-.74-10.885-5.293-20.892-12.948-28.461c-2.349-2.323-4.356-3.875-10.336-7.99a25160 25160 0 0 1-12.104-8.336L28.617 5.835C22.838 1.85 22.386 1.574 20.639.949C18.367.136 15.959-.163 13.67.084C6.998.804 1.657 5.622.269 12.171C.053 13.191.013 26.751.01 100.35l-.003 86.975H0z"/></svg>'],
  "d": ["https://duckduckgo.com/?q=", '<svg xmlns="http://www.w3.org/2000/svg" width="256" height="255" viewBox="0 0 256 255"><defs><linearGradient id="logosDuckduckgo0" x1="71.005%" x2="0%" y1="100%" y2="100%"><stop offset="0%" stop-color="#394a9f"/><stop offset="100%" stop-color="#6176b9"/></linearGradient></defs><path fill="#de5833" d="M128.145 18.841c60.002 0 108.643 48.641 108.643 108.643c0 60.001-48.641 108.642-108.643 108.642c-60.001 0-108.642-48.641-108.642-108.642c0-60.002 48.641-108.643 108.642-108.643"/><path fill="#de5833" d="M128.143 254.922c70.383 0 127.44-57.057 127.44-127.44S198.526.042 128.143.042S.703 57.099.703 127.482s57.057 127.44 127.44 127.44m0-10.62c-64.518 0-116.82-52.302-116.82-116.82s52.302-116.82 116.82-116.82s116.82 52.302 116.82 116.82s-52.302 116.82-116.82 116.82"/><path fill="#d5d7d8" d="M75.219 54.13c-.021-1.827 1.306-2.85 3.069-3.567c-.807.132-1.58.334-2.276.646c-1.838.833-3.212 3.987-3.199 5.48c8.923-.902 22.118-.278 31.767 2.602c.712-.1 1.424-.2 2.147-.283c-9.624-4.273-21.066-5.923-31.508-4.878m1.829-10.98c.201-.036.405-.061.607-.095c-1.925.239-2.94.927-4.385 1.164c1.569.139 7.514 2.914 11.25 4.44c.524-.199.996-.42 1.381-.681c-1.937-.286-6.75-4.636-8.853-4.828m9.278 21.606c-.535.206-1.043.421-1.483.652c-14.545 7.663-20.97 25.562-17.141 47.01c3.495 19.518 17.82 86.205 24.379 117.571c1.915.673 3.853 1.298 5.815 1.865c-5.841-28.24-21.784-102.24-25.504-123.023c-3.771-21.143-.102-36.314 13.934-44.075"/><path fill="#fff" d="M145.184 218.618c-.24.16-.526.31-.831.456c-.226.876-.571 1.54-1.074 1.874c-3.004 1.993-11.489 2.997-15.969 1.993c-.771-.171-1.355-.454-1.811-.843c-7.649 4.247-18.649 9.901-20.883 8.627c-3.49-2.001-3.996-28.451-3.49-34.942c.369-4.9 17.581 3.037 25.954 7.2c1.851-1.729 6.386-2.886 10.4-3.279c-6.065-14.761-10.538-31.645-7.796-43.618c-3.79-2.641-8.813-8.766-7.767-15.159c.806-4.866 13.38-14.072 22.283-14.628c8.923-.563 11.704-.436 19.138-2.216l1.209-.29c4.576-16.087-6.399-44.074-18.641-56.321c-3.991-3.991-10.127-6.503-17.041-7.829c-2.659-3.649-6.948-7.138-13.02-10.369c-11.275-5.986-25.209-8.423-38.19-6.219c-.202.034-.406.059-.607.095c2.103.192 6.916 4.542 8.853 4.828c-.385.261-.857.482-1.381.681c-1.818.692-4.289 1.112-6.232 1.904c-1.763.717-3.09 1.74-3.069 3.567c10.442-1.045 21.884.605 31.508 4.878c-.723.083-1.435.183-2.147.283c-6.825.96-13.098 2.728-17.63 5.119c-.213.111-.415.231-.624.346c-14.036 7.761-17.705 22.932-13.934 44.075C76.112 129.614 92.159 204.76 98 233c9.603 2.779 18.582 5 29.08 5c8.912 0 19.631-1.975 27.92-4c-2.911-5.613-6.656-11.82-8.964-16.271c-.308.367-.551.688-.852.889m5.873-106.561c-3.804 0-6.907-3.094-6.907-6.92c0-3.808 3.103-6.903 6.907-6.903c3.825 0 6.916 3.095 6.916 6.903a6.91 6.91 0 0 1-6.916 6.92m4.161-26.008s-4.357-2.489-7.738-2.447c-6.948.091-8.84 3.161-8.84 3.161s1.166-7.318 10.051-5.85c4.817.801 6.527 5.136 6.527 5.136m-73.255 8.997s-3.129-6.973 5.21-10.39c8.348-3.418 12.413 1.945 12.413 1.945s-6.062-2.742-11.956.962c-5.884 3.7-5.667 7.483-5.667 7.483m7.29 14.862a8.04 8.04 0 0 1 8.047-8.044a8.04 8.04 0 0 1 8.04 8.044c0 4.447-3.6 8.041-8.04 8.041a8.034 8.034 0 0 1-8.047-8.041"/><path fill="#2d4f8e" d="M105.34 109.908a8.04 8.04 0 0 0-8.04-8.044a8.04 8.04 0 0 0-8.047 8.044a8.034 8.034 0 0 0 8.047 8.041c4.44 0 8.04-3.594 8.04-8.041m-4.478-.591a2.09 2.09 0 0 1-2.081-2.09a2.085 2.085 0 1 1 4.171 0a2.09 2.09 0 0 1-2.09 2.09"/><path fill="#fff" d="M100.862 105.139a2.085 2.085 0 0 0-2.081 2.088c0 1.154.939 2.093 2.081 2.09a2.09 2.09 0 0 0 2.09-2.09a2.087 2.087 0 0 0-2.09-2.088"/><path fill="#2d4f8e" d="M151.057 98.234c-3.804 0-6.907 3.095-6.907 6.903c0 3.826 3.103 6.92 6.907 6.92a6.91 6.91 0 0 0 6.916-6.92c0-3.808-3.091-6.903-6.916-6.903m3.067 6.394c-.975 0-1.78-.793-1.78-1.789c0-.983.805-1.79 1.78-1.79c1.017 0 1.797.807 1.797 1.79c0 .996-.78 1.789-1.797 1.789"/><path fill="#fff" d="M154.124 101.049c-.975 0-1.78.807-1.78 1.79c0 .996.805 1.789 1.78 1.789a1.773 1.773 0 0 0 1.797-1.789c0-.983-.78-1.79-1.797-1.79"/><path fill="url(#logosDuckduckgo0)" d="M33.586 44.601s-4.065-5.363-12.413-1.945c-8.339 3.417-5.21 10.39-5.21 10.39s-.217-3.783 5.667-7.483c5.894-3.704 11.956-.962 11.956-.962m49.105-5.688c-8.885-1.468-10.051 5.85-10.051 5.85s1.892-3.07 8.84-3.161c3.381-.042 7.738 2.447 7.738 2.447s-1.71-4.335-6.527-5.136" transform="translate(66 42)"/><path fill="#fdd209" d="M144.2 126.299c-8.903.556-21.477 9.762-22.283 14.628c-1.046 6.393 3.977 12.518 7.767 15.159l.031.023c3.789 2.636 29.018 11.147 41.535 10.911c12.531-.244 33.111-7.918 30.851-14.067c-2.25-6.151-22.689 5.427-44.007 3.451c-15.788-1.467-18.575-8.54-15.079-13.706c4.397-6.493 12.406 1.232 25.616-2.721c13.23-3.942 31.732-10.998 38.597-14.84c15.873-8.849-6.642-12.519-11.96-10.064c-5.041 2.329-22.587 6.757-30.721 8.72l-1.209.29c-7.434 1.78-10.215 1.653-19.138 2.216"/><path fill="#65bc46" d="M124.316 206.97c0-.921.741-1.736 1.917-2.431c.033-.559.337-1.079.847-1.556c-8.373-4.163-25.585-12.1-25.954-7.2c-.506 6.491 0 32.941 3.49 34.942c2.234 1.274 13.234-4.38 20.883-8.627c-2.207-1.881-1.183-6.447-1.183-15.128m21.609 10.716l.111.043c6.854 2.645 20.498 7.624 23.461 6.537c3.995-1.527 2.995-33.453-1.489-34.47c-3.592-.797-17.343 8.892-22.753 12.839c.957 4.041 2.115 12.045.67 15.051"/><path fill="#43a244" d="M129.214 220.611c-4.495-.996-2.993-5.493-2.993-15.971c0-.034.01-.067.012-.101c-1.176.695-1.917 1.51-1.917 2.431c0 8.681-1.024 13.247 1.183 15.128c.456.389 1.04.672 1.811.843c4.48 1.004 12.965 0 15.969-1.993c.503-.334.848-.998 1.074-1.874c-3.516 1.684-11.024 2.473-15.139 1.537"/><path fill="#65bc46" d="M127.08 202.983c-.51.477-.814.997-.847 1.556c-.002.034-.012.067-.012.101c0 10.478-1.502 14.975 2.993 15.971c4.115.936 11.623.147 15.139-1.537c.305-.146.591-.296.831-.456c.301-.201.544-.522.741-.932c1.445-3.006.287-11.01-.67-15.051c-.211-.889-.411-1.589-.572-1.999c-.413-1.022-3.594-1.285-7.203-.932c-4.014.393-8.549 1.55-10.4 3.279"/></svg>'],
  "l": ["https://duckduckgo.com/?q=!ducky ", '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M7.398 12.809a1.04 1.04 0 0 0 1.204-.003c.178-.13.313-.31.387-.518l.447-1.373a2.34 2.34 0 0 1 1.477-1.479l1.391-.45a1.045 1.045 0 0 0-.044-1.98l-1.375-.448a2.34 2.34 0 0 1-1.48-1.477l-.452-1.388a1.044 1.044 0 0 0-1.973.017l-.457 1.4a2.34 2.34 0 0 1-1.44 1.45l-1.39.447a1.045 1.045 0 0 0 .016 1.974l1.374.445a2.33 2.33 0 0 1 1.481 1.488l.452 1.391c.072.204.206.38.382.504m6.137 4.042a.806.806 0 0 0 1.226-.398l.248-.762a1.1 1.1 0 0 1 .26-.42c.118-.12.262-.208.42-.26l.772-.252a.8.8 0 0 0-.023-1.52l-.764-.25a1.08 1.08 0 0 1-.68-.678l-.252-.773a.8.8 0 0 0-1.518.01l-.247.762a1.07 1.07 0 0 1-.665.679l-.773.252a.8.8 0 0 0 .008 1.518l.763.247c.16.054.304.143.422.261c.119.119.207.263.258.422l.253.774a.8.8 0 0 0 .292.388"/></svg>'],
};

function search(query) {
  var input = document.getElementById("searchBox");

  // Check for bang syntax (!w) or space syntax (w)
  let engineUsed = false;
  for (let engine in engines) {
    if (query.endsWith(" !" + engine) || query.endsWith("!" + engine)) {
      query = query.replace(" !" + engine, "").replace("!" + engine, "");
      window.location.href = engines[engine][0] + encodeURIComponent(query);
      engineUsed = true;
      break;
    }
  }

  // If no specific engine was used, default to Google
  if (!engineUsed) {
      window.location.href = engines["g"][0] + encodeURIComponent(query);
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
  var searchEngineIcon = document.getElementById("searchEngineIcon");
  searchEngineIcon.innerHTML = engines["g"][1];
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

input.addEventListener("input", function(event) {
  var text = input.value;
  var usedEngine = null;
  for (let engine in engines) {
    if (text.endsWith(" !" + engine) || text.endsWith("!" + engine)) {
      usedEngine = engine;
      break;
    }
  }
  var searchEngineIcon = document.getElementById("searchEngineIcon");
  if (usedEngine) {
    searchEngineIcon.innerHTML = engines[usedEngine][1];
  } else {
    searchEngineIcon.innerHTML = engines["g"][1];
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