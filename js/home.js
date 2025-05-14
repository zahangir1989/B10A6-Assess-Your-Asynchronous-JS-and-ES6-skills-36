

// show categories
const loadCategories = () => {
  // console.log("create category")
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
};

const loadPets = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res) => res.json())
    .then((data) => displayPets(data.pets))
    .catch((error) => console.log(error));
};

// const loadDetailePets = async(petId) => {
//   const url = `https://openapi.programming-hero.com/api/peddy/pet/${petId}`;
//   const res = await fetch(url);
//   const data =  await res.json();
//   console.log(data)

// }

const loadDetailePets = (petId) => {
  console.log(petId)

  fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petId}`)
    .then((res) => res.json())
    .then((data) => displayDetailes(data.petData))
    .catch((error) => console.log(error));
}

const displayDetailes = (pet) => {
  console.log(pet)
  const detaileContainer = document.getElementById("modal-content");
  detaileContainer.innerHTML=`
  <img src=${pet.image}/>
  <h1>Name :${pet.pet_name}</h1>
  <h2>Title :${pet.category}</h2>
  <h2>Price :${pet.price}</h2>
  <p>Gender :${pet.gender}</p>
  <p>Details :${pet.pet_details}</p>
  `
  // console.log(detaileContainer);
  // // 1 namber way
  // document.getElementById("showModalData").click();

  // // 2 namber way
  document.getElementById("costomModal").showModal();
}



const loadCategoruPets = (id) =>{
   const allButtons = document.querySelectorAll('.category-btn');
  allButtons.forEach((btn) => btn.classList.remove('active'));

 
  const activeBtn = document.getElementById(`btn-${id}`);
  if (activeBtn) {
    activeBtn.classList.add("active");
  }
  
   fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`)
    .then((res) => res.json())
    .then((data) => {
    
      displayPets(data.data)
    })
    .catch((error) => console.log(error));
}
 loadCategoruPets();

const displayPets = (pets) => {
  const petContainer = document.getElementById("pets");
  petContainer.innerHTML = "";

  if(pets.length === 0){
    petContainer.classList.remove('grid')
    petContainer.innerHTML = `
    <div class="min-h-[600px] w-full flex flex-col gap-5 text-center justify-center items-center">
    <img src="images/error.webp"/>
    <h2 class="text-6xl">No Information Available</h2>
    <p class="text-2xl">It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
    its layout. The point of using Lorem Ipsum is that it has a.</p>
    </div>
    `
    return;
  }
  else{
    petContainer.classList.add("grid")
  }

  pets.forEach((pet) => {
    const card = document.createElement("div");
    card.className = "card card-compact bg-base-100 shadow-md";

    card.innerHTML = `
      <figure class="h-[200px] overflow-hidden">
        <img class="h-full w-full object-cover" src="${pet.image}" alt="${pet.pet_name}" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">${pet.pet_name}</h2>
        <p>Breed: ${pet.breed}</p>
        <p>Birth: ${pet.date_of_birth}</p>
        <p>Gender: ${pet.gender}</p>
        <p>Price: ${pet.price}</p>
        <div class="card-actions justify-between mt-2">

          <button onclick="loadDetailePets('${pet.petId}')" class="btn btn-primary adopt-btn">Add Card</button>
          <button class="btn btn-secondary">Details</button>

        </div>
      </div>
    `;

    card.querySelector(".adopt-btn").addEventListener("click", () => {
      handleAdopt(pet.image, pet.pet_name);
    });

    petContainer.appendChild(card);
  });
};

const handleAdopt = (imageUrl, name) => {
  const selectedPets = document.getElementById("selected-pets");

  const petImageCard = document.createElement("div");
  petImageCard.className = "border rounded overflow-hidden";

  petImageCard.innerHTML = `
    <img src="${imageUrl}" alt="${name}" class="w-full h-[150px] object-cover" />
    <p class="text-center font-medium bg-gray-100 py-1">${name}</p>
  `;

  selectedPets.appendChild(petImageCard);
};

// loadPets();

const displayCategories = (categories) => {
  const categoriesContainer = document.getElementById("categories");
  // console.log(data)
  categories.forEach((item) => {
    console.log(item);
    // create button
    const buttonContainer = document.createElement("div");
     buttonContainer.innerHTML = `
     <button id="btn-${item.category}" onclick="loadCategoruPets('${item.category}')" class="btn category-btn">
     ${item.category}
     </button>

     `
    // button.classList = "btn";
    // button.innerText = item.category;
    // button.onclic = alert('hello')
    // add button
    categoriesContainer.append(buttonContainer);
  });
};

loadCategories();
loadPets();

  