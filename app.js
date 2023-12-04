console.log("Let's get this party started!");

const $gifs = $("#gifs");
const apiKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
const $remove = $("#remove");

async function getGiphy(term) {
    try {
        const res = await axios.get("https://api.giphy.com/v1/gifs/random", 
        {params: {
            tag: term,
            api_key: apiKey
        }});
        const imgUrl = (res.data.data.images.original.url);
        const img = document.querySelector("#gifresult");
        let resGif = $('<img>').attr({
            src: imgUrl,
            width: 200,
            class: "new-gifs"
        });
        $gifs.append( resGif );
    } catch(e) {
        console.log("ERROR");
    }
}

const form = document.querySelector('#searchgifs');
form.addEventListener("submit", function(e) {
  const input = document.querySelector('#search');
  e.preventDefault();
  getGiphy(input.value);
  input.value = '';
});

$("#remove").on("click", function() {
    $('img').remove();
})