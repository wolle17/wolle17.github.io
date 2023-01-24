<html>
<head>
	<title>Seitentitel</title>
  <link rel="stylesheet" href="mystyle.css">
  <script>
    prompt("Bitte Ihren Namen eingeben")
window.prompt("Bitte Ihren Namen eingeben")
window.confirm("Stimmen Sie meiner Meinung zu?")
window.addEventListener("load", function() {
    let schaltflaeche1 = document.getElementById("btn1");
    schaltflaeche1.addEventListener("click", function() {
        alert("angeklickt")
    }, false);
} );
</script>
</head>
<body>
    <h1 class="wichtig">Überschrift 1</h1>
    <p class="wichtig">Erster Absatz mit Text</p>
    <p>Zweiter Absatz mit Text</p>	
    <a href="https://www.javascript-kurs.de/">Text des Links</a>
    <p><button id="btn1">bitte klicken</button>
<footer>
    <p>Fußbereich</p>
</footer>
</body>
</html>