let amigos = [];
let amigosSorteados = [];
let lista = document.getElementById("listaAmigos");

function adicionarAmigo() {
    let input = document.querySelector("input");
    let amigo = input.value.trim();

    if (amigo !== "") {
        amigos.push(amigo);
        lista.innerHTML = "";
        amigos.forEach(amigo => {
            lista.innerHTML += "<li>" + amigo;
        });
        input.value = "";
    } 
    else {
        alert("Por favor, insira um nome!");
    }

    console.log(amigos);
}

function sortearAmigo() {
    if(amigos.length==0) {
        alert("Não há nenhum amigo para sortear, insira amigos!");
    }
    else {
        let indexAmigoSorteado = parseInt(Math.random() * amigos.length);
        amigosSorteados = amigosSorteados.filter(amigo => !amigos.includes(amigo));
        if(amigosSorteados.includes(amigos[indexAmigoSorteado])) {
            sortearAmigo();
        }
        else {
            amigosSorteados.push(amigos[indexAmigoSorteado]);
            lista.innerHTML = "<p style='color: rgb(47, 255, 47);'><b>O amigo secreto sorteado é: " + amigos[indexAmigoSorteado] + "</b></p>";
            amigos.splice(indexAmigoSorteado, 1);
            console.log(amigos);
            console.log(amigosSorteados);
        }
    }
}
