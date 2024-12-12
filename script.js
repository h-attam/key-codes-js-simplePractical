const container = document.getElementById("keyContainer");

container.innerHTML = generateHTML("_","_","_");

window.addEventListener("keydown", (e) => {
  container.innerHTML = generateHTML(e.key, e.code, e.key.charAt(0));
});

function generateHTML(key,code,keyCode) {
  return `
    <div class="key-container" >
    
    <div class="key-content"> ${key === " " ? "Space" : key}
    </div>
    </div>

    <div class="key-container" >
   
    <div class="key-content"> ${code}
    </div>
    </div>

    <div class="key-container" >
   
    <div class="key-content"> ${keyCode}
    </div>
    </div>
    `;
}
