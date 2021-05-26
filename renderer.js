// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

let StarboardEmbed = window.StarboardEmbed;

window.myElectronPreload.setFileListener((event, fileContents) => {
  
  const mount = document.querySelector("#mount-point");
  mount.innerHTML = '';

  const el = new StarboardEmbed({
      notebookContent: fileContents,
      src: "https://unpkg.com/starboard-notebook@0.9.4/dist/index.html"
  });
  el.style.width = "100%";
  mount.appendChild(el);
})