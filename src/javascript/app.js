document.getElementById("baixarCV").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "src/doc/CV - Hélio Carlitos António.pdf";
  link.download = "CV - Hélio Carlitos António.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
