async function fetchData() {
    try {                        // Random API from the internet.
        const response = await fetch("https://dummyjson.com/products/2");
        console.log(response);
                                // Converting to JSON format.
        const data = await response.json();
        console.log(data);

        //loadData function will be created on next JavaScript example.
        loadData(data);

    } catch (err) {
        console.log(err)
    }
}

fetchData(); // Output: A big object filled with many data's.


function loadData(data) {
    const title = document.getElementById("title");
    const img = document.getElementById("img")
    title.innerHTML = data.brand
    img.src = data.thumbnail
}
