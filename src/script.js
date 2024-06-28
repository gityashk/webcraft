const inputHTML = document.getElementById("inputHTML");
const inputCSS = document.getElementById("inputCSS");
const inputJS = document.getElementById("inputJS");
const preview = document.getElementById("preview");

const renderHTML = () => {
    localStorage.setItem("srcHTML", inputHTML.value);
    preview.srcdoc = localStorage.getItem("srcHTML");
    addCSS();
    addJS();
};

const addCSS = () => {
    localStorage.setItem("srcCSS", inputCSS.value);
    preview.srcdoc = localStorage.getItem("srcHTML") + "<style>" + localStorage.getItem("srcCSS") + "</style>";
};

const addJS = () => {
    localStorage.setItem("srcJS", inputJS.value);
    preview.srcdoc = localStorage.getItem("srcHTML") + "<style>" + localStorage.getItem("srcCSS") + "</style>" + "<script>" + localStorage.getItem("srcJS") + "</script>";
};

renderHTML();

inputHTML.addEventListener("input", renderHTML);
inputCSS.addEventListener("input", addCSS);
inputJS.addEventListener("input", addJS);


const download_zip = document.getElementById("download-zip");
download_zip.addEventListener("click", () => {
    const myzip = new JSZip();
    myzip.file("index.html", localStorage.getItem("srcHTML") + '\n<link rel="stylesheet" href="style.css">' + '\n<script src="script.js"></script>');
    myzip.file("style.css", localStorage.getItem("srcCSS"));
    myzip.file("script.js", localStorage.getItem("srcJS"));
    myzip.generateAsync({ type: "blob" }).then(function (blob) {
        saveAs(blob, "src.zip");
    });
});

window.addEventListener("beforeunload", () => {
    localStorage.clear();
});
