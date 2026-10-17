
const listadepresença = (nome) => {
    if (nome.length < 7) {
        return "minimo 7 caracteres!";
    }else if (nome. length >= 7) {
        return "seu nome esta lista!";
    }else {
        return"nome invalido";
    }
}
 console.log(listadepresença("geovana"))
