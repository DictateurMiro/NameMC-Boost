// Function to download history of skin to make an skin art png image (01/03/2024)
// By DictateurMiro

function combineCanvasImages() {
    var div = document.querySelector('div[style="width: 324px; margin: auto; text-align: center;"]');
    var canvases = div.getElementsByTagName('canvas');

    var combinedCanvas = document.createElement('canvas');
    var combinedContext = combinedCanvas.getContext('2d');

    var canvasPerRow = 9; // lines number of history skin
    var rowHeight = 32; // pixel height line
    var totalWidth = canvasPerRow * 32; // width total
    var rows = Math.ceil(canvases.length / canvasPerRow); // number lines
    var totalHeight = rows * rowHeight; // height max

    combinedCanvas.width = totalWidth;
    combinedCanvas.height = totalHeight;

    var currentX = 0;
    var currentY = 0;
    for (let i = 0; i < canvases.length; i++) {
        if (i > 0 && i % canvasPerRow === 0) {
            currentY += rowHeight;
            currentX = 0;
        }
        combinedContext.drawImage(canvases[i], currentX, currentY);
        currentX += canvases[i].width;
    }

    var downloadLink = document.createElement('a');
    downloadLink.href = combinedCanvas.toDataURL();
    downloadLink.download = 'skin_art.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}
