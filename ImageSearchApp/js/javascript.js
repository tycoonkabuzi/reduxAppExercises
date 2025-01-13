const key="vuuFAD-dsF1FyTAVK3-10ll5rhIygUDL7emoWz7vzP8";
const formSearch=document.querySelector("form");
const searchBarInput=document.getElementById("searchBar");
let searchResults=document.querySelector(".searchResults");
const nextpage=document.querySelector(".showMore");
let page =1;
// event listener to be able to search.
formSearch.addEventListener('submit',(event)=>{
    event.preventDefault();
    inputSearch=searchBarInput.value;
    searchResults.innerHTML="";
    dataRetrieve(inputSearch);
})
nextpage.addEventListener('click',(event)=>{
    event.preventDefault();
    dataRetrieve(inputSearch);
    page++;
    
});

async function dataRetrieve(inputValue){
    
    try {
        const response=await fetch(`https://api.unsplash.com/search/photos?&client_id=${key}&page=${page}&query=${inputValue}`);
        const data= await response.json();
        for (let i=0; data.results.length>i;i++){
            
            const searchResult=document.createElement("div");
            searchResult.classList.add("searchResult")
            const img=document.createElement('img');
            img.src=data.results[i].urls.raw;
            const link=document.createElement('a');
            link.href=data.results[i].urls.full;
            link.innerHTML=data.results[i].alt_description;
            searchResult.appendChild(img);
            searchResult.appendChild(link);
            searchResults.appendChild(searchResult);
        }
        
    } catch (error) {
        
    }
}
