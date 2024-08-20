
        function generateRandomNumber() {
            // Get values from input fields
            const minValue = parseInt(document.getElementById('minValue').value, 10);
            const maxValue = parseInt(document.getElementById('maxValue').value, 10);

            // Validate inputs
            if (isNaN(minValue) || isNaN(maxValue) || minValue > maxValue) {
                document.getElementById('result').textContent = 'Please enter valid minimum and maximum values where minimum is less than or equal to maximum.';
                return;
            }

            // Generate random number
            const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

            // Display result
            document.getElementById('result').textContent = `Random number: ${randomNumber}`;
        }
   