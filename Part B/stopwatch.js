let timer;
        let seconds = 0;
        let isRunning = false;

        const timeDisplay = document.getElementById('timeDisplay');
        const startBtn = document.getElementById('startBtn');
        const stopBtn = document.getElementById('stopBtn');
        const resetBtn = document.getElementById('resetBtn');
        const datePicker = document.getElementById('datePicker');

        
        const formatTime = (sec) => {
            const hours = String(Math.floor(sec / 3600)).padStart(2, '0');
            const minutes = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
            const seconds = String(sec % 60).padStart(2, '0');
            return `${hours}:${minutes}:${seconds}`;
        };

       
        const fetchTimeSetting = async () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(10);
                }, 1000);
            });
        };

        
        const startTimerWithFetch = async () => {
            if (!isRunning) {
                seconds = await fetchTimeSetting(); 
                timeDisplay.innerText = formatTime(seconds);
                isRunning = true;

                timer = setInterval(() => {
                    seconds++;
                    timeDisplay.innerText = formatTime(seconds);
                }, 1000);
            }
        };

        
        const stopTimer = () => {
            isRunning = false;
            clearInterval(timer);
        };

        
        const resetTimer = () => {
            stopTimer();
            seconds = 0;
            timeDisplay.innerText = formatTime(seconds);
        };

        
        startBtn.addEventListener('click', startTimerWithFetch);
        stopBtn.addEventListener('click', stopTimer);
        resetBtn.addEventListener('click', resetTimer);

        
        const setCurrentDate = () => {
            const today = new Date().toISOString().split('T')[0];
            datePicker.value = today;
        };

        
        setCurrentDate();