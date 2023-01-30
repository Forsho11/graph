/* BackGround Plugin */

const image = new Image();
//  image.src = 'bg2.jpg';

const plugin = {
    id: 'BackgroundImage',
    beforeDraw: (chart) => {
        if (image.complete) {
            const ctx = chart.ctx;
            const { top, left, width, height } = chart.chartArea;
            const x = left + width - image.width;   
            const y = top + height - image.height;
            ctx.drawImage(image, x, y);
        } else {
            image.onload = () => chart.draw();
        }
    }
};
