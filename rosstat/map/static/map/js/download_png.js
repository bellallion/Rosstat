document.addEventListener('DOMContentLoaded', function() {
    const downloadButtons = document.querySelectorAll('.download-chart-btn');

    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            const canvasId = this.getAttribute('data-target');
            const canvas = document.getElementById(canvasId);

            if (canvas) {
                const link = document.createElement('a');
                
                link.href = canvas.toDataURL('image/png');

                link.download = `${canvasId}.png`;
                
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } else {
                console.error(`График не найден.`);
            }
        });
    });
});