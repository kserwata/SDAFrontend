function onSubmit() {
    const pokemonName = document.getElementsByName("pokemonName")[0].value;
    alert(`You entered: ${pokemonName}`);
    return false;
}