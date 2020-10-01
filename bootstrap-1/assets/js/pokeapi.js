function onSubmit() {
    const pokemonName = $("[name=pokemonName]").val();
    $("#submitButton").removeClass("btn-primary").addClass("btn-warning");
    alert(`You entered: ${pokemonName}`);
    return false;
}