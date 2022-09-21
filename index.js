const input = document.getElementById("poke-input")
const img = document.getElementById("imagen")
const nombre = document.getElementById("nombre")
const peso = document.getElementById("peso")
const altura = document.getElementById("altura")
const btn = document.getElementById("button")

img.style.display = "none"

const buscarPokemon = async (pokemon) =>{
    await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then( res => res.json())
    .then( p => {
        img.style.display = "flex"
        img.src = p.sprites.front_default
        nombre.textContent = p.name
        peso.textContent = `Peso: ${p.weight / 10} Kilos`
        altura.textContent = `Altura: ${p.height / 10} Metros`
    })
    .catch( err => console.log(err))
}

btn.addEventListener("click", (e) =>{

    e.preventDefault()

    if (input.value > 906) {
        alert("Solo tenemos 905 pokemones, lo sentimos")
    } else{
        buscarPokemon(input.value)
    }

    if (input.value == "0") {
        alert("Por favor ingresa un valor valido")
    }
})