//Pseudocode

//1. Page Loads - Fetch data from SpaceX API
//2. Store resulting data in a list (Array) so we can loop over and create the UI
//3. Using the data to create UI and append to the DOM

//make sure js is working
//alert("js is loaded");
//make sure we have access to jquery in this file
//console.log($);

/*----- constants -----*/
const BASE_URL = 'https://api.spacexdata.com/v3/launches';
/*----- app's state (variables) -----*/
let launches;

/*----- cached element references -----*/
const $main = $('main');
/*----- event listeners -----*/


/*----- functions -----*/

getAppData();

function getAppData () {
    $.ajax(`${BASE_URL}?limit=9&sort`)
.then(function(data){
    launches = (data)
    render();
});

function render() {
    //console.log(launches);
    
        const html = launches.map(function(launch) {
            return `

               <article>
                   <h2>${launch.mission_name}</h2>
                   <p>${launch.launch_year}</p>
               </article>
            `;
        });
        //pulls data from html and api to website
        $('main').html(html); 
}
}
