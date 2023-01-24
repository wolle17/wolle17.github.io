<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            background-color: yellow;
        }
        #circle {
            width: 100px;
            height: 100px;
            background-color: black;
            border-radius: 50%;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
        #ball {
            width: 50px;
            height: 50px;
            background-color: red;
            border-radius: 50%;
            position: absolute;
            bottom: 0;
            right: 0;
        }
    </style>
    <script>
        var ball = document.getElementById("ball");
        var circle = document.getElementById("circle");
        var message = document.getElementById("message");

        ball.addEventListener("mousedown", function() {
            window.addEventListener("mousemove", moveBall);
        });

        ball.addEventListener("mouseup", function() {
            window.removeEventListener("mousemove", moveBall);
            checkOverlap();
        });

        function moveBall(event) {
            ball.style.left = event.clientX - ball.offsetWidth / 2 + "px";
            ball.style.top = event.clientY - ball.offsetHeight / 2 + "px";
        }

        function checkOverlap() {
            var rect1 = circle.getBoundingClientRect();
            var rect2 = ball.getBoundingClientRect();

            if (rect1.left < rect2.left + rect2.width &&
                rect1.left + rect1.width > rect2.left &&
                rect1.top < rect2.top + rect2.height &&
                rect1.height + rect1.top > rect2.top) {
                message.innerHTML = "Du hast es geschafft";
                message.style.color = "red";
                message.style.display = "block";
                // Konfetti Animation
                setTimeout(function() {
                    message.style.display = "none";
                }, 5000);
            }
        }
    </script>
</head>
<body>
    <div id="circle"></div>
    <div id="ball"></div>
    <div id="message"></div>
</body>
</html>
