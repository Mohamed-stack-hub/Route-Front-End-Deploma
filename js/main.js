// ⬇️⬇HTML element inputs and butt⬇⬇️
var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");
var addSite = document.getElementById("addSite");
var tableBody = document.getElementById("tableContent");
// Locaol storage to save it and dont lose the date when relo📥
if (localStorage.getItem("bookmarks")) {
  bookmarks = JSON.parse(localStorage.getItem("bookmarks")); // <<< convert the array to string 🔤
  displayData();
}
var bookmarks = [];
addBtn.addEventListener("click", function () {
  var name = siteName.value;
  var url = siteUrl.value;
  var site = {
    name: name,
    url: url,
  };
  bookmarks.push(site);
  //Here im using the alreadt instead the pop up cuz i dont have enought to assign the task before the dead line
  if (name.length < 3) {
    alert("U must insert atleast 3 letters");
    return;
  }

  localStorage.setItem("bookmarks", JSON.stringify(bookmarks)); // <<< String the array to make it a key
  console.log(bookmarks);
  displayData();
});
// Display Function
function displayData() {
  tableBody.innerHTML = "";
  for (var i = 0; i < bookmarks.length; i++) {
    tableBody.innerHTML += `
      <tr>
        <td>${i + 1}</td>
        <td>${bookmarks[i].name}</td>
        <td>
          <a href="${
            bookmarks[i].url
          }" target="_blank" class="btn btn-success btn-sm">
            <i class="fa fa-eye"></i> Visit
          </a>
        </td>
        <td>
          <button class="btn btn-danger btn-sm" onclick="deleteRow(${i})">
            <i class="fa fa-trash"></i> Delete
          </button>
        </td>
      </tr>
    `;
  }
}
// Delete Function❌❌
function deleteRow(index) {
  bookmarks.splice(index, 1);
  displayData();
}
//🔒 There the rest of code is about the validation 🔒
siteName.addEventListener("input", function () {
  if (siteName.value.length < 3) {
    siteName.classList.add("is-invalid");
    siteName.classList.remove("is-valid");
  } else {
    siteName.classList.add("is-valid");
    siteName.classList.remove("is-invalid");
  }
});
siteUrl.addEventListener("input", function () {
  var urlPattern =
    /^(https?:\/\/)[\w\-]+(\.[\w\-]+)+([\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/;
  if (urlPattern.test(siteUrl.value)) {
    siteUrl.classList.add("is-valid");
    siteUrl.classList.remove("is-invalid");
  } else {
    siteUrl.classList.add("is-invalid");
    siteUrl.classList.remove("is-valid");
  }
});
