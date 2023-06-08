let cardCar = document.getElementById("card-car");
var cityName;
let allData = {
    toyota: {
        car: {
            toyotaCarolla: {
                img: "public/toyota-corolla.png ",
                name: "Toyta Corolla",
                model: 2023,
                color: "white",
                cityName: "Karachi",
                price: "PKR 3,00,000,0",
            },
            toyotaCamry: {
                img: " public/toyota-camry.png ",
                name: "Toyota Camry",
                model: 2021,
                color: "black",
                cityName: "karachi",
                price: "PKR 2,80,000,0",

            },
            toyotaHighLander: {
                img: "public/toyota-high-lander.png",
                name: "Toyota High Lander",
                model: 2021,
                color: "black",
                cityName: "karachi",
                price: "PKR 4,00,000,0",
            },
            toyotaRav4: {
                img: "public/toyota-rav4.png ",
                name: "Toyota RAV4",
                model: 2021,
                color: "black",
                cityName: "karachi",
                price: "PKR 2,50,000,0",
            },
            toyotaYaris: {
                img: "public/toyota-yaris.png",
                name: "Toyota Yaris",
                model: 2021,
                color: "black",
                cityName: "karachi",
                price: "PKR 2,50,000,0",
            },
            toyotaLandCruiser: {
                img: "public/toyota-land-cruiser.png",
                name: "Toyota Land Cruiser",
                model: 2021,
                color: "black",
                cityName: "karachi",
                price: "PKR 2,40,000,0",
            },
            toyotaHilux: {
                img: "public/toyota-hilux.png",
                name: "Toyota Hilux",
                model: 2021,
                color: "black",
                cityName: "karachi",
                price: "PKR 2,40,000,0",
            },
            toyotaFortuner: {
                img: "public/toyota-fortuner.png",
                name: "Toyota Hilux",
                model: 2021,
                color: "black",
                cityName: "karachi",
                price: "PKR 2,10,000,0",
            },
            toyotaCorollaCross: {
                img: "public/toyota-corolla-cross.png",
                name: "Toyota Corolla Cross",
                model: 2021,
                color: "black",
                cityName: "karachi",
                price: "PKR 2,40,000,0",
            },
            toyotaPrius: {
                img: "public/toyota-pruis.png",
                name: "Toyota Pruis",
                model: 2021,
                color: "black",
                cityName: "karachi",
                price: "PKR 5,00,000,0",
            },
            toyota4Runer: {
                img: "public/toyota-4-runner.png",
                name: "Toyota 4Runner",
                model: 2021,
                color: "black",
                cityName: "karachi",
                price: "PKR 7,00,000,0",
            },
            toyotaSupra: {
                img: "public/toyota-supra.png",
                name: "Toyota Supra",
                model: 2021,
                color: "black",
                cityName: "karachi",
                price: "PKR 2,30,000,0",
            },
            toyota_C_HR: {
                img: "public/toyota-chr.png",
                name: "Toyota CH-R",
                model: 2021,
                color: "black",
                cityName: "karachi",
                price: "PKR 2,10,000,0",
            },
            // toyotaTundera: {
            //     img: "public/toyota-tundra.png",
            //     name: "Toyota Tundra",
            //     model: 2021,
            //     color: "black",
            //     cityName: "karachi"
            // },
        }
    },
    hyundai: {
        car: {
            hyundai_Elantra: {
                img: "public/hyundai-elantra.png ",
                name: "Hyundai Elantra",
                model: 2021,
                color: "black",
                cityName: "Lahore",
                price: "PKR 2,00,000,0",
            },
            hyundai_Tucson: {
                img: "public/hyundai-tucson.png",
                name: "Hyundai Tucson",
                model: 2021,
                color: "black",
                cityName: "Lahore",
                price: "PKR 3,00,000,0",
            },
            hyundai_Kona: {
                img: "public/hyundai-kona.png",
                name: "Hyundai Kona",
                model: 2021,
                color: "black",
                cityName: "Lahore",
                price: "PKR 4,00,000,0",
            },
            hyundai_Venue: {
                img: "public/hyundai-venue.png",
                name: "Hyundai Venue",
                model: 2021,
                color: "black",
                cityName: "Lahore",
                price: "PKR 3,50,000,0",
            },
            hyundai_Accent: {
                img: "public/hyundai-accent.png",
                name: "Hyundai Accent",
                model: 2021,
                color: "black",
                cityName: "Lahore",
                price: "PKR 2,60,000,0",
            },
            hyundai_Santa_Fe: {
                img: "public/hyundai-santa-fe.png",
                name: "Hyundai Santa Fe",
                model: 2021,
                color: "black",
                cityName: "Lahore",
                price: "PKR 2,99,99,9",
            },
            hyundai_Grandi_10: {
                img: "public/hyundai-grandi.png",
                name: "Hyundai Grandi 10",
                model: 2021,
                color: "black",
                cityName: "Lahore",
                price: "PKR 3,40,000,9",
            },
            hyundai_Verna: {
                img: "public/hyundai-verna.png",
                name: "Hyundai Venra",
                model: 2021,
                color: "black",
                cityName: "Lahore",
                price: "PKR 6,00,005,0",
            },
            hyundai_Creta: {
                img: "public/hyundai-creta.png",
                name: "Hyundai Creta",
                model: 2021,
                color: "black",
                cityName: "Lahore",
                price: "PKR 8,00,000,0",
            },
            hyundai_EON: {
                img: "public/hyundai-eon.png",
                name: "Hyundai EON",
                model: 2021,
                color: "black",
                cityName: "Lahore",
                price: "PKR 5,00,000,0",
            },
            hyundai_Avante: {
                img: "public/hyundai-avante.png",
                name: "Hyundai Avante",
                model: 2021,
                color: "black",
                cityName: "Lahore",
                price: "PKR 2,50,000,0",
            },
        }
    },
    suzuki: {
        car: {
            suzuki_Mehran: {
                img: "public/suzuki-mehran.png",
                name: "Suzuki Mehran",
                model: 2021,
                color: "black",
                cityName: "Bahawal pur",
                price: "PKR 2,80,000,0",
            },
            suzuki_cultus: {
                img: "public/suzuki-cultus.png ",
                name: "Suzuki Cultus",
                model: 2021,
                color: "black",
                cityName: "Bahawal pur",
                price: "PKR 2,30,000,0",
            },
            suzuki_Wagon_R: {
                img: "public/suzuki-wagon-r.png ",
                name: "Suzuki Wagon R",
                model: 2021,
                color: "black",
                cityName: "Bahawal pur",
                price: "PKR 5,40,000,0",
            },
            Suzuki_Swift: {
                img: "public/suzuki-swift.png ",
                name: "Suzuki Swift",
                model: 2021,
                color: "black",
                cityName: "Bahawal pur",
                price: "PKR 4,00,000,0",
            },
            Suzuki_Baleno: {
                img: "public/suzuki-baleno.png",
                name: "Suzuki Baleno",
                model: 2021,
                color: "black",
                cityName: "Bahawal pur",
                price: "PKR 2,50,000,0",
            },
            Suzuki_liana: {
                img: "public/suzuki-liana.png",
                name: "Suzuki liana",
                model: 2021,
                color: "black",
                cityName: "Bahawal pur",
                price: "PKR 2,60,000,0",
            },
            Suzuki_jimmy: {
                img: "public/suzuki-jimny.png",
                name: "Suzuki Jimny",
                model: 2021,
                color: "black",
                cityName: "Bahawal pur",
                price: "PKR 4,50,000,0",
            },

            Suzuki_caiz: {
                img: "public/suzuki-ciaz.png",
                name: "Suzuki Caiz",
                model: 2021,
                color: "black",
                cityName: "Bahawal pur",
                price: "PKR 2,40,000,0",
            },
            Suzuki_cross: {
                img: "public/suzuki-cross.png",
                name: "Suzuki Cross",
                model: 2021,
                color: "black",
                cityName: "Bahawal pur",
                price: "PKR 3,30,000,0",
            },
            Suzuki_Spresso: {
                img: "public/suzuki-spresso.png",
                name: "Suzuki Spresso",
                model: 2021,
                color: "black",
                cityName: "Bahawal pur",
                price: "PKR 2,30,000,0",
            },
            Suzuki_ignis: {
                img: "public/suzuki-ignis.png",
                name: "Suzuki Ignis",
                model: 2021,
                color: "black",
                cityName: "Bahawal pur",
                price: "PKR 9,00,000,0",
            },
        }

    }

}
var logos = document.getElementById("logos");
function allCar() {
    cardCar.innerHTML = "";
    logos.innerHTML = `<div class="logos-company"><img src="public/nav-logo.png"></div>`;
    for (var key in allData) {
        console.log(allData[key])
        for (var key1 in allData[key]) {
            console.log(allData[key][key1])
            for (var key2 in allData[key][key1]) {
                console.log(allData[key][key1][key2].img)
                
                cardCar.innerHTML +=`
     <div class="card-div-main">
      <div class="image-div">
         <img class="image" src="${allData[key][key1][key2].img}">
      </div> 
        <div class="car-name">
           ${allData[key][key1][key2].name}
      </div>

   <div class="price">
      ${allData[key][key1][key2].price}
   </div>

      <div class="city-name">
         ${allData[key][key1][key2].cityName}
      </div>
   
    </div>
   `}
        }

    }
}
allCar()

function karachi(brand) {
cardCar.innerHTML = "";

 if(brand === "toyota"){
    logos.innerHTML = `<div class="logos-company"><img src="public/toyota-logo.png"></div>`;
 }
 if(brand === "hyundai"){
    logos.innerHTML = "";
    logos.innerHTML = `<div class="logos-company"><img src="public/hyundai-logo.png"></div>`;
 }
 if(brand === "suzuki"){
    logos.innerHTML = `<div class="logos-company"><img src="public/suzuki-logo.png"></div>`;
 }

    
    for (var key3 in allData[brand]) {
        for (var key4 in allData[brand][key3]) {
            console.log(allData[brand][key3][key4])
           
            cardCar.innerHTML += `
                <div class="card-div-main">
                     <div class="image-div">
                    <img class="image" src="${allData[brand][key3][key4].img}">
                 </div>
                
                 <div class="car-name">
                      ${allData[brand][key3][key4].name}
                 </div>
                 <div class="price">
                 ${allData[brand][key3][key4].price}
              </div>
                  <div class="city-name">
                    ${allData[brand][key3][key4].cityName}
                 </div>
               </div>
                `
        }

    }
}

var input = document.getElementById("input");
function searchData() {

    for (var key5 in allData) {
        for (var key6 in allData[key5]) {
            for (var key7 in allData[key5][key6]) {
                var data = JSON.stringify(allData[key5][key6][key7].name)
                console.log(allData[key5][key6][key7].img)
                if (data.includes(input.value)) {
                    cardCar.innerHTML = "";
                    cardCar.innerHTML += `
                <div class="card-div-main">
                     <div class="image-div">
                    <img class="image" src="${allData[key5][key6][key7].img}">
                 </div >
                 
                    <div class="car-name">
                 ${allData[key5][key6][key7].name}
                 </div >
                 <div class="price">
                 ${allData[key5][key6][key7].price}
              </div>
                 <div class="city-name">
              ${allData[key5][key6][key7].cityName}
              
               </div>
                `
                }
                console.log(data)

            }
        }
    }
}



