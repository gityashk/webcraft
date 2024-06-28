const container = document.getElementById("root");
const styles = document.createElement("style");
const script = document.createElement("script");

container.innerHTML = localStorage.getItem("srcHTML");
styles.innerText = localStorage.getItem("srcCSS");
script.innerText = localStorage.getItem("srcJS");
container.after(styles);
styles.after(script);

window.addEventListener("storage", () => location.reload());
