function makeApiCall() {
    var image_select = document.getElementById("num_images_select");
    var image_number = image_select.options[image_select.selectedIndex].value;

    var search_text = document.getElementById("search_text").value;

    var api_key = "99115ce307b2cffb5c4d9c515bbad7e5";

    var url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&text=${search_text}&privacy_filter=1&safe_search=1&extras=url_sq&per_page=${image_number}&format=json&nojsoncallback=1`;

    var image_div = document.getElementById("images_placeholder");
    image_div.innerHTML = '';

    $(document).ready(function() {

        $.ajax({url:url, dataType:"json"}).then(function(data) {
            console.log(data); //Review all of the data returned
            console.log("Image title: " + data.photos.photo[0].title);//View Image title
            
            var card;
            var card_group = document.createElement("div");
            card_group.setAttribute('class', "card-group");
            for (var i = 0; i < data.photos.photo.length; i++) {

                card = document.createElement("div");
                card.setAttribute('class', "card");
                card.setAttribute('style', "width: 18rem;");
                card.setAttribute('display', "inline-block;");

                var image_src = data.photos.photo[i].url_sq;

                var card_header = document.createElement("img");
                card_header.setAttribute('class', "card-img-top");
                card_header.setAttribute('src', image_src);
                var card_body = document.createElement("div");
                card_body.setAttribute('class', "card-body");

                card.appendChild(card_header);
                card.appendChild(card_body);

                

                var text = document.createElement("p");
                text.setAttribute('class', "main");
                text.innerHTML = data.photos.photo[i].title;

                card_body.appendChild(text);

                card_group.appendChild(card);

                if ((i+1) % 5 == 0) {
                    image_div.appendChild(card_group);
                    card_group = document.createElement("div");
                    card_group.setAttribute('class', "card-group");

                }

            }
            image_div.appendChild(card_group);
        })
      })


    console.log(image_number);
    console.log(search_text);
    console.log(url);

    $.ajax(url);
}