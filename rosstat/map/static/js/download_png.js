document.addEventListener('DOMContentLoaded', function() {
    const downloadButtons = document.querySelectorAll('.action-btn.btn-png');

    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            const canvasId = this.getAttribute('data-target');
            const canvas = document.getElementById(canvasId);

            if (canvas) {
                const ctx = canvas.getContext('2d');
                
                ctx.save();
                
                ctx.globalCompositeOperation = 'destination-over';
                ctx.fillStyle = '#FFFFFF'; 
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                
                const imageURI = canvas.toDataURL('image/png');
                
                ctx.restore();
                
                const link = document.createElement('a');
                link.href = imageURI;
                link.download = `${canvasId}_chart.png`;
                
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } else {
                console.error(`Canvas с id "${canvasId}" не найден.`);
            }
        });
    });
});