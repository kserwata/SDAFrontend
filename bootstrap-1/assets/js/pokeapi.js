function onSubmit() {
    showLoader(() => {
        $(".pokemon-info").slideUp(500, () => {
            const pokemonName = $("[name=pokemonName]").val();
            $.ajax({
                url: `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
                success: (data) => {
                    $("#name").html(data.name);
                    $("#stats").html("");
                    for(let stat of data.stats) {
                        $("#stats").append(`<span>${stat.stat.name}: ${stat.base_stat}</span><br/>`);
                    }
                    $(".pokemon-info").slideDown();
                    hideLoader();
                }
            }); 
        });
    })
    return false;
}

function showLoader(callback) {
    $(".preloader").fadeIn(500, () => {
        callback();
    })
}

function hideLoader() {
    $(".preloader").fadeOut();
}