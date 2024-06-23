const inputHTML = document.getElementById("inputHTML");
const inputCSS = document.getElementById("inputCSS");
const preview = document.getElementById("preview");

const renderHTML = () => {
    preview.srcdoc = inputHTML.value;
    addCSS();
};

const addCSS = () => {
    preview.srcdoc = inputHTML.value + "<style>" + inputCSS.value + "</style>";
};

renderHTML();

inputHTML.addEventListener("input", renderHTML);
inputCSS.addEventListener("input", addCSS);
