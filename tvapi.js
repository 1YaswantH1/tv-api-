let submit_btn = document.querySelector(".Submit");
let results = document.querySelector(".results");
let search = document.querySelector("#search");

submit_btn.addEventListener("click", function (event) {
    event.preventDefault();
    results.innerHTML=""
    input_val = search.value;
    console.log(input_val);
    axios.get(`https://api.tvmaze.com/search/shows?q=${input_val}`).then(function (res) {
        console.log(res.data)
        
        for (i of res.data) {

            let show_container = document.createElement("div");


            let img = document.createElement("img")
            img.src = `${i.show.image.medium}`

            let lab1 = document.createElement("label")
            lab1.setAttribute("for","collection")

            let p = document.createElement("p")
            p.className="show_title"

            p.setAttribute("name","collection")
            p.innerHTML=`${i.show.name}`
            img.className = "show_img"
            show_container.append(img,p)
            results.append(show_container)


        }
    })
})
