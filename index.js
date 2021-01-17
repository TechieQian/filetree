// Import stylesheets
import "./style.css";

// Write Javascript code!
let labels = document.getElementsByClassName("label");

for (let label of labels) {
  label.addEventListener("click", function(e) {
    let parent = this.parentElement;
    let subdirs = parent.getElementsByClassName("subdir");
    for (let subdir of subdirs) {
      subdir.classList.toggle("show");
    }
  });
}
