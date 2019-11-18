/* DOM */
const row = document.querySelector('div.row');
const colImage = document.getElementById('image');
const ul = document.querySelector('ul');
const powerstats = document.querySelectorAll('li h6');
/* ID url GET */ 
const id = window.location.search.substr(4);
/* AJAX */
const xhr = new XMLHttpRequest();


xhr.onreadystatechange = function()
{
    console.log(this);
    if (this.readyState == 4)
    {
        /* Response */
        const urlJson = this.response.image.url;
        const nameJson = this.response.name;
        const powerstatsJson = this.response.powerstats;
        const appearanceJson = this.response.appearance;
        console.log(appearanceJson.eyecolor);
        
        /* Create & setAttribute */
        //--> Image 
        const img = document.createElement('img');
        img.setAttribute('src', urlJson);
        img.setAttribute('width', '100%');
        //--> Name
        const p = document.createElement('p');
        p.setAttribute('class', 'name');
        p.textContent = nameJson;
        //--> Powerstats
        const intelligence = document.createElement('span');
        intelligence.textContent = powerstatsJson.intelligence;
        powerstats[0].appendChild(intelligence);
        const strength = document.createElement('span');
        strength.textContent = powerstatsJson.strength;
        powerstats[1].appendChild(strength);
        const speed = document.createElement('span');
        speed.textContent = powerstatsJson.speed;
        powerstats[2].appendChild(speed);
        const durability = document.createElement('span');
        durability.textContent = powerstatsJson.durability;
        powerstats[3].appendChild(durability);
        const power = document.createElement('span');
        power.textContent = powerstatsJson.power;
        powerstats[4].appendChild(power);
        const combat = document.createElement('span');
        combat.textContent = powerstatsJson.combat;
        powerstats[5].appendChild(combat);
        //--> Sexe
        const gender = document.createElement('span');
        gender.textContent = appearanceJson.gender;
        powerstats[6].appendChild(gender);
        //--> Height
        const height = document.createElement('span');
        height.textContent = appearanceJson.height[1];
        powerstats[7].appendChild(height);
        //--> Weight
        const weight = document.createElement('span');
        weight.textContent = appearanceJson.weight[1];
        powerstats[8].appendChild(weight);
        /* AppendChild */
        //--> Left Col
        colImage.appendChild(img);
        colImage.appendChild(p);        
    }
}
/* AJAX */
xhr.open('GET', 'https://www.superheroapi.com/api.php/2629008647181489/'+id, true);
xhr.responseType = 'json';
xhr.send();








