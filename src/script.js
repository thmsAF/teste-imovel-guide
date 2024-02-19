document.addEventListener('DOMContentLoaded', function () {
    var cpfInput = document.getElementById('cpf');
    var phoneInput = document.getElementById('phone');

    cpfInput.addEventListener('input', function (e) {
        var target = e.target;
        var input = target.value.replace(/\D/g, '').substring(0, 11);
        var length = input.length;

        if (length > 9) {
            target.value = input.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
        } else if (length > 6) {
            target.value = input.replace(/^(\d{3})(\d{3})(\d{3})$/, '$1.$2.$3');
        } else if (length > 3) {
            target.value = input.replace(/^(\d{3})(\d{3})$/, '$1.$2');
        } else {
            target.value = input;
        }
    });

    phoneInput.addEventListener('input', function (e) {
        var target = e.target;
        var input = target.value.replace(/\D/g, '').substring(0, 11);
        var length = input.length;

        if (length > 10) {
            target.value = input.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
        } else if (length > 5) {
            target.value = input.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
        } else if (length > 2) {
            target.value = input.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
        } else {
            target.value = input;
        }
    });

});

function calcularRegraDeTres() {
    var campo1 = parseFloat(document.getElementById('campo1').value);
    var campo2 = parseFloat(document.getElementById('campo2').value);
    var campo3 = parseFloat(document.getElementById('campo3').value);

    // Verificar se os campos não são vazios e campo2 não é 0 para evitar divisão por zero
    if (!isNaN(campo1) && !isNaN(campo2) && !isNaN(campo3) && campo2 !== 0) {
        var resultado = (campo3 * campo2) / campo1;
        document.getElementById('resultado').value = resultado;
    } else {
        alert("Por favor, preencha todos os campos corretamente e certifique-se de que o campo 2 não seja 0.");
    }
}

document.getElementById("downloadButton").addEventListener("click", function() {
    html2canvas(document.getElementById("card5")).then(function(canvas) {
        // Crie um link para baixar a imagem
        var link = document.createElement("a");
        document.body.appendChild(link);
        link.download = "imagem.png";
        link.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        link.click();
        document.body.removeChild(link);
    });
});