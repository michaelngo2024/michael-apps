function convertToSVG() {
  const file = document.getElementById('imageInput').files[0];
  if (!file) {
    alert('Please select a PNG file.');
    return;
  }

  const reader = new FileReader();
  reader.onload = function (event) {
    const img = new Image();
    img.onload = function () {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      ImageTracer.imageToSVG(canvas, function (svgString) {
        const output = document.getElementById('output');
        output.innerHTML = svgString;

        // Add download link
        const blob = new Blob([svgString], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'converted.svg';
        link.textContent = 'Download SVG';
        link.style.display = 'block';
        link.style.marginTop = '1em';
        output.appendChild(link);
      });
    };
    img.src = event.target.result;
  };
  reader.readAsDataURL(file);
}
