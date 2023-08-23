const calculateTemperature = () => {
    // console.log(Temperature);
    const Temperature = document.getElementById('input').value;

    // console.log(valeTemp);
    const TemperatureSelected = document.querySelector('#type');
    const valeTemp = type.options[TemperatureSelected.selectedIndex].value;

    //result
    var result = document.getElementById("output");

    // Convert temperature from Celcius to Fahrenheit
    const celTOfah = (cel) => {
        let fahrenheit = (cel * (9 / 5) + 32);
        return fahrenheit;
    }

    // Convert temperature from Fahrenheit to Celsius
    const fahTOcel = (fehr) => {
        let celsius = ((fehr - 32) * 5 / 9);
        return celsius;
    }

    //output value display
    if (valeTemp == "cel") {
        result.value = celTOfah(Temperature) + '°Fahrenheit';
    } else {
        result.value = fahTOcel(Temperature) + '°Celsius';
    }

    //window reload
    setTimeout(() => {
        window.location.reload();
    }, 10000);
}

const tempLoad = () => {
    let fa = document.getElementById('fa');
    fa.innerHTML = "&#xf2cb";
    fa.style.color = "#ffa41b";

    setTimeout(() => {
        fa.innerHTML = "&#xf2ca;";
        fa.style.color = "#ffa41b";
    }, 1000)

    setTimeout(() => {
        fa.innerHTML = "&#xf2c9;";
    }, 2000)

    setTimeout(() => {
        fa.innerHTML = "&#xf2c8;";
    }, 3000)

    setTimeout(() => {
        fa.innerHTML = "&#xf2c7;";
        fa.style.color = "#ff5151";
    }, 4000)
}

setInterval(() => {
    fa.style.color = "#ffa41b";
    tempLoad();
}, 5000);

tempLoad();