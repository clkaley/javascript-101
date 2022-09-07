let sonuc;
let gorevListesi = ["görev 1,", "görev2"];
ul = document.getElementById("task-list");
// let count=ul.children.length
for (let index in gorevListesi) {
  let li = `  <li class="task">
<div class="form-check">
    <input type="checkbox" id="${index + 1}"
    class="form-check-input">
    <label for="${index + 1}">Hello ${gorevListesi[index]}</label>
</div>
</li>`;
ul.insertAdjacentHTML("beforeEnd", li);
}

//document.querySelector("#task-list").remove()
document.querySelector("#task-list").children[0].remove()







