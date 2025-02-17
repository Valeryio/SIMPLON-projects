

function fillBox(items) {
    let imgBoxContainer = document.querySelector(".search-app__img-container");
  
    imgBoxContainer.innerHTML = "";
    for (let i = 0; i < items.length; i++) {
  
      let imgBox = document.createElement("div");
      imgBox.classList.add("img-box");
              
      let img = document.createElement("img");
              
      let imgBoxInfos = document.createElement("div");
      imgBoxInfos.classList.add("img-box__infos");
              
      let imgBoxTitle = document.createElement("h2");
      imgBoxTitle.classList.add("img-box__title");
              
      let imgBoxDesc = document.createElement("p");
      imgBoxTitle.classList.add("img-box__desc");
              
      imgBox.appendChild(img);
      imgBoxInfos.appendChild(imgBoxTitle);
      imgBoxInfos.appendChild(imgBoxDesc);
      imgBox.appendChild(imgBoxInfos);
      
      img.setAttribute("src", items[i].path);
      imgBoxTitle.innerHTML = items[i].name;
      imgBoxDesc.innerHTML = items[i].description;
      imgBoxContainer.appendChild(imgBox);   
    }
      
  }
  
  
  function searchKey(keyword) {
    let searchedItems = [];
  
    for (let i = 0; i < images.length; i++) {
      if (images[i].keyword.includes(keyword)) {
        searchedItems.push(images[i]);
      }
    }
  
    return searchedItems;
  }