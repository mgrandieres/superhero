const heroJson = 'hero.json';
const heros = [];
const row = document.getElementById("row");

/** Search data with input */
function search() 
{
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    col = row.getElementsByTagName("div");
    for (i = 0; i < col.length; i++) {
        a = col[i].getElementsByTagName("p")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            col[i].style.display = "";
        } else {
            col[i].style.display = "none";
        }
    }
}

/** Import JSON */
function import_hero()
{
    fetch(heroJson)
            .then(response => {
                return response.json()
            })
            .then(data => {
                // Work with JSON data here
                heros.push(...data);
                heros.forEach(hero => {
                    const id = hero.id;
                    const a = document.createElement('a');
                    a.setAttribute('href', 'single.html?id='+id+'');
                    const img = document.createElement('img');
                    img.setAttribute("src", hero.url);
                    img.setAttribute("width", '100%');
                    img.setAttribute("height", '400px');
                    img.style.objectFit = "cover";
                    const col = document.createElement('div');
                    col.setAttribute("class", "col-md-4");
                    const name = document.createElement('p');
                    name.setAttribute('class', 'name');
                    name.innerHTML = hero.name;
                    
                    /** Appenchild */
                    row.appendChild(col);
                    col.appendChild(img);
                    col.appendChild(a);
                    a.appendChild(name);
                    
                });
            })
}
import_hero();


