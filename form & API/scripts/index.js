
let userInfos = window.localStorage.getItem("user");
userInfos = JSON.parse(userInfos);

console.log(userInfos);

// Img profile using
let userImg = document.querySelector(".user-profile");
userImg.setAttribute("src", userInfos.profile);


// UserInfos container
let userInfosContainer = document.querySelector(".user-infos");
userInfosContainer.innerHTML = JSON.stringify(userInfos);
