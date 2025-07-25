return _["static.css"] + `
img[src^="data:image/svg+xml;inert;"] {
 overflow: hidden;
 animation: loading-gradient 1.7s infinite linear;
 background: linear-gradient(to right, var(--bg-dark) 0%, var(--bg-light) 50%, var(--bg-dark) 100%), var(--bg-dark);
 background-size: 100% 100%;
 background-repeat: no-repeat;
 background-attachment: fixed;
}

@keyframes loading-gradient {
 0% {
  background-position: -100vw 0;
 }
 100% {
  background-position: 100vw 0;
 }
}`