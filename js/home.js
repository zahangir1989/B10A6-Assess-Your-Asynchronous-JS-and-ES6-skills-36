

// show categories
const loadCategories = () => {
    // console.log("create category")
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then ((data) =>displayCategories(data.categories))
    .catch ((error) => console.log(error))
}

// const demo = {
    
//     "petId": 11,
//     "breed": "French Bulldog",
//     "category": "Dog",
//     "date_of_birth": "2023-07-20",
//     "price": 2500,
//     "image": "https://i.ibb.co.com/47Sxf3X/pet-11.jpg",
//     "gender": "Male",
//     "pet_details": "This adorable male French Bulldog, born on July 20, 2023, is known for his playful and affectionate nature. Fully vaccinated and priced at $2500, he makes a perfect companion for apartment living.",
//     "vaccinated_status": "Fully",
//     "pet_name": "Ollie"

// }

const loadPets = () => {
fetch("https://openapi.programming-hero.com/api/peddy/pets")
.then((res) =>res.json())
.then((data) =>displayPets(data.pets))
.catch((error) =>console.log(error))
}
const displayPets = (pets) => {
// console.log(pets)
const petContainaer = document.getElementById("pets");
pets.forEach(pet => {
console.log(pet)
const card = document.createElement("div");
card.classList="card card-compact";
card.innerHTML=`
 <figure class="h-[200px]">
    <img class="h-full w-full object-cover"
      src=${pet.image}
      alt="Shoes" />
  </figure>
  <div class="px-0 py-2 ">
    <div>
    <h1 class="font-bold">${pet.pet_name}</h1>
    <P>Breed :${pet.breed}</p>
    <P>Birth :${pet.date_of_birth}</p>
    <P>Gender :${pet.gender}</p>
    <P>Price :${pet.price}</p>
    </div>
    <div class="">
    <button ${onclick(console.log("click"))} id="pet-img" class="btn btn-primary">Adopt</button>
    <button class="btn btn-primary">Details</button>
    </div>
  </div>
`;
  petContainaer.append(card);
})
}



const displayCategories = (categories) =>{
    const categoriesContainer = document.getElementById('categories');
// console.log(data)
       categories.forEach((item) => {
        console.log(item);
        // create button
        const button = document.createElement('button');
        button.classList= "btn";
        button.innerText=item.category;
        // add button
        categoriesContainer.append(button);
 })
}



loadCategories();
loadPets();

//  

//     const displayCategories = (categories) => {
//     const categoryContainer = document.getElementById("categories");
    // categories.forEach((item) => {
    //     console.log(item);

//         // create button
//         const buttonContainer = document.createElement("div");
//         buttonContainer.innerHTML = `
//         <button id="btn-${item.category_id}" onclick="loadCategoryVideos(${item.category_id})" class="btn category-btn">
//         ${item.category}
//         </button>
//         `
//         // button.classList="btn";
//         // button.innerText = item.category;
//         // button.onclick = () => {   ababeo kora jai
//         //     alert('hello')
//         // } 

//         // add button to category container
//         categoryContainer.append(buttonContainer);
//     });
// };