const base64area = document.getElementById("base64textarea");

document
  .getElementById("uploadedFile")
  .addEventListener("change", handleFileSelect, false);

function handleFileSelect(evt) {
  var f = evt.target.files[0];
  var reader = new FileReader();

  reader.onload = (function () {
    return function (e) {
      var binaryData = e.target.result;

      var base64String = window.btoa(binaryData);

      base64area.value = base64String;
    };
  })(f);
  reader.readAsBinaryString(f);
}

document.getElementById("copybase64").addEventListener("click", copyBase64);

function copyBase64() {
  var alert = document.getElementById("alert");
  alert.innerHTML = `<span class="alert alert-success">Copied!</span>`;
  base64area.select();
  base64area.setSelectionRange(0, base64area.value.length);
  document.execCommand("copy");
}
