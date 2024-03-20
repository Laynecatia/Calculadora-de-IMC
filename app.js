const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;

    const bmi = (peso / (altura * altura)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    value.classList.add('attention');

    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5) {
        description = 'Atencao! Voce esta abaixo do peso!'
    } else if (bmi >= 18.5 && bmi <= 25) {
        description = 'Voce esta no peso ideal!';
        value.classList.remove('attention');
        value.classList.add('normal');
    } else if (bmi > 25 && bmi <=30) {
        description = 'Cuidado! Voce esta com sobrepeso!';
    } else if (bmi > 30 && bmi <= 35) {
        description = 'Cuidado! Voce esta com obesidade moderada!';
    } else if (bmi > 35 && bmi <= 40) {
        description = 'Atencao! Voce esta com obesidade severa!';
    } else {
        description = 'Atencao! Voce esta com obesidade morbida!';
    }

    value.textContent = bmi.replace('.',',');
    document.getElementById('description').textContent = description;
});
















