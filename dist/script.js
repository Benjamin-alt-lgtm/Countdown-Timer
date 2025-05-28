     const minutesInput = document.getElementById('minutes');
        const startButton = document.getElementById('startButton');
        const timerDisplay = document.getElementById('timer');
        let countdown;

        startButton.addEventListener('click', () => {
            const minutes = Number(minutesInput.value);
            if (!minutes || minutes <= 0) {
                alert('Please enter a valid number of minutes.');
                return;
            }

            minutesInput.disabled = true;
            startButton.disabled = true;

            let totalSeconds = minutes * 60;

    
            clearInterval(countdown);

            countdown = setInterval(() => {
                if (totalSeconds <= 0) {
                    clearInterval(countdown);
                    timerDisplay.textContent = '00:00';
                    minutesInput.disabled = false;
                    startButton.disabled = false;
                    alert('Time is up!');
                    return;
                }

              
                const mins = Math.floor(totalSeconds / 60);
                const secs = totalSeconds % 60;

              
                timerDisplay.textContent = `${mins.toString().padStart(2, '0')}:${secs
                    .toString()
                    .padStart(2, '0')}`;

                
                totalSeconds--;
            }, 1000);
        });