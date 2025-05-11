
// show categories
const loadCategories = () => {
    // console.log("create category")
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then ((data) =>displayCategories(data.categories))
    .catch ((error) => console.log(error))
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