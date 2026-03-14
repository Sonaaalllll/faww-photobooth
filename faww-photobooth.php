<!DOCTYPE html>
<html>

<head>

<meta charset="UTF-8">

<title>FAWW</title>

<link rel="stylesheet" href="faww-style.css">

</head>

<body>

<div class="container">

<h1 class="title">FAWW</h1>

<p class="madeby">Made by Sonal</p>

<p class="info">
A small experiment using the JavaScript Webcam API and Canvas
to generate a vintage-style photostrip directly in the browser.
</p>

<div class="camera-box">

<video id="video" autoplay></video>

<div id="countdown"></div>

</div>

<p id="photoCount">Photos Taken: 0 / 4</p>

<div class="filters">

<label>Select Filter</label>

<br>

<select id="filterSelect">

<option value="none">Normal</option>

<option value="sepia(70%) contrast(120%)">Vintage</option>

<option value="grayscale(100%)">Black & White</option>

<option value="contrast(150%) brightness(120%)">Cool</option>

</select>

</div>

<button id="start">Start Photo Strip</button>

<canvas id="canvas" width="400" height="300"></canvas>

<h2>Your Photo Strip</h2>

<canvas id="stripCanvas" width="300" height="900"></canvas>

<button id="download">Download Strip</button>

<footer class="footer">

FAWW Photostrip Generator • 2026

</footer>

</div>

<script src="faww-booth.js"></script>

</body>

</html>