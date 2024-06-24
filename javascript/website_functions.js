document.addEventListener('DOMContentLoaded', () => {
    const targetTime = new Date('June 17, 2024 18:00').getTime();

    const updateTime = () => {
        const currentTime = new Date().getTime(); //gets current time
        const difference = currentTime - targetTime; //caculate time in miliseconds
        const secondsConversion = Math.floor(difference / 1000); //converst time to sconds
        document.getElementById('timeSinceSeconds').innerText = `${secondsConversion}`;
    };
    setInterval(updateTime, 1000); //resets every seconds
    updateTime();

    changeColorButton.addEventListener('click', () => {
        document.body.style.backgroundColor = 'bisque';
    });
});