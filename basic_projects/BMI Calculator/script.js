const form = document.querySelector('form')

form.addEventListener('submit', function(event){
    event.preventDefault();
    const h = parseFloat(document.querySelector('#height').value)
    const w = parseFloat(document.querySelector('#weight').value)
    const result = document.querySelector('.result')

    if(h === '' || h<0 || isNaN(h)){
        result.innerHTML = 'Enter a valid height'
    }
    else if(w === '' || w<0 || isNaN(w)){
        result.innerHTML = 'Enter a valid weight'
    }
    else{
        const bmi = (w/(h*h)).toFixed(2)

        if(bmi<=18.60){
            result.innerHTML = `Your BMI is ${bmi}. You better start eating or you might die of malnourishment.`
        }
        else if(bmi>18.60 && bmi<=25.00){
            result.innerHTML = `Your BMI is ${bmi}. You are in good shape but keep exercising or you'll be body shamed.`
        }
        else{
            result.innerHTML = `Your BMI is ${bmi}. You are a fat pig. Stop eating immediately.`
        }

        
    }

})
