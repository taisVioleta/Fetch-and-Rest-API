const BASE_URL= "https://pokeapi.co/api/v2/";
//*FETCH 
fetch(BASE_URL + "pokemon/" +1) 
.then((res)=> res.json())
.then((data)=> console.log(data));


//*FETCH ASYNCRONA
//*obtener los datos 
//*Parse= analizar estructura framatical para obtener su lógica

const fetchPokemon = async (pokemon) => {
    try{
        const response = await fetch (`${BASE_URL}pokemon/${pokemon}`); /*line11=line3*/
        console.log(response);
        const parseData = await response.json();
        console.log (parseData);
        return parseData;
       }
    catch (err) {
        console.error(err);
    }
    };


    document.getElementById("btn-get").addEventListener 
    ('click', async () => {
    const text=document.getElementById("pokemon-name").value.toLowerCase();
    const pokemon = await fetchPokemon (text);

localStorage.setItem("currentPokemonID", pokemon.id);

    console.log(pokemon.name)
    });
    
    document.getElementById("btn-prev").addEventListener 
    ("click", async () => {
        const currentPokemonID = parseInt(localStorage.getItem ("currentPokemonID"));
        const newId = Math.max (1, currentPokemonID -1);
        const pokemon = await fetchPokemon (newID);
        console.log (pokemon.name);
    });





//*POST
fetch("https://jsonplaceholder.typicode.com/post",{
method:'POST',
headers: {
"Content-type": 'application/json; charset=UTF-8',
},
body:  JSON.stringify({
   tittle: "Fetch - Try Post " ,
   body: "Try to post fetch",
   userId: 1,
}),

})
.then (res => res.json())
.then ((data) => console.log(data));



