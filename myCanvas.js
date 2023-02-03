var charts = []

let header = document.querySelector('#header');

/* Combo Box */
var select = document.createElement("select");
select.setAttribute("id", "comboBox");
var years = [2021, 2022, 2023];

header.appendChild(select);

for (var i = 0; i < years.length; i++) {
    var option = document.createElement("option");
    option.setAttribute("class", "boxOption")
    option.value = years[i];
    option.innerHTML = years[i];
    select.appendChild(option);
}

let selector = document.querySelector('#comboBox');

selector.addEventListener('change', function () {
    atualizarDados(selector.value);

});

var textBox = document.createElement("input");
textBox.setAttribute("type", "text");
textBox.setAttribute("id", "userInput");
header.appendChild(textBox);

let userInput = document.querySelector('#userInput');
let comboBox = document.querySelector('#comboBox');

textBox.addEventListener('keypress', function (e) {

    if (e.keyCode == 13) {

        let codPessoa = textBox.value;

        let ano = comboBox.value;

        var param = {};
        param.codPessoa = codPessoa;
        param.optionYear = ano;
        console.log(param)

        sendRequestToController(param);
        
    }

})


atualizarDados(2021);