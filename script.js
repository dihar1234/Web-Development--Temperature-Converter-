function convertTemperature(inputType) {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
  
    if (inputType === 'celsius') {
      const celsiusValue = celsiusInput.value;
      if (celsiusValue === '') {
        fahrenheitInput.value = '';
      } else {
        const fahrenheitValue = (celsiusValue * 9) / 5 + 32;
        fahrenheitInput.value = fahrenheitValue.toFixed(2);
      }
    } else if (inputType === 'fahrenheit') {
      const fahrenheitValue = fahrenheitInput.value;
      if (fahrenheitValue === '') {
        celsiusInput.value = '';
      } else {
        const celsiusValue = ((fahrenheitValue - 32) * 5) / 9;
        celsiusInput.value = celsiusValue.toFixed(2);
      }
    }
  }
  