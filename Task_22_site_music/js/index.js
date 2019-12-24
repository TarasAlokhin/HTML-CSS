function addItem() {
  let inputVal = document.getElementById("input").value;
  fetch("http://localhost:5000/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify({
      record: inputVal
    })
  }).then(location.reload());
}

fetch("http://localhost:5000/api")
  .then(response => response.json())
  .then(res =>
    res.forEach(element => {
      addItemToList(element);
    })
  );

function deleteItem(idItem) {
  idItem = idItem.slice(4);
  fetch("http://localhost:5000/api", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify({
      id: idItem
    })
  }).then(res => {
    document.getElementById(`li-${idItem}`).style.display = "none";
  });
}

function addItemToList(data) {
  let list = document.getElementById("list");
  let li = document.createElement("li");
  li.setAttribute("id", `li-${data.id}`);
  li.innerHTML = `<span>${data.record}</span><button onclick="deleteItem(this.id)" id='del-${data.id}'>x</button>`;
  list.appendChild(li);
}
