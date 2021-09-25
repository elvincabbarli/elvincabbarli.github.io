//ELEMENTLERI SECME
const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastuser = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");
const github = new Github();
const ui = new UI();


eventlisteners();
function eventlisteners()
{
    githubForm.addEventListener("submit" , getData);
    clearLastuser.addEventListener("click" , clearAllSearched);
    document.addEventListener("DOMContentLoaded" , getAllSearched)
}

function getData(e)
{

    let username = nameInput.value.trim();

    if(username === "")
    {
        alert("Lutfen gecerli bir kullanici adi girin...")
    }
    else
    {
        github.GetGithubData(username)//ama fonksiyonumuz promis yapisi ile yazilib deye biz bunu dondurmeliyik
        .then((response) => {
            if(response.user.message === "Not Found")
            {
                ui.showError("Kullanici Bulunamadi" , "danger");
            }
            else
            {
                ui.addSearchedUserToUi(username);
                Storage.addSearchedUsersToStorage(username);
                ui.showUserInfo(response.user);
                ui.showError("Kullanici bilgileri alindi" , "success");
                ui.showRepoInfo(response.repo);
  
            }
        })
        .catch((err) => {ui.showError(err)});
    }

    ui.clearInput();
    e.preventDefault();
}

function clearAllSearched()
{
    //TUM ARANAN KULLANICILARI SILICEK
    if(confirm("Are You Sure?"))
    {
        Storage.clearAllSearchedUsersFromStorage();
        ui.clearAllFromUi();
    }
}

function getAllSearched()
{
    //STORAGEDEN USERNAME-LERI ALIB ui-ye ekleyecek
    let users = Storage.getSearchedUsersFromStorage();
    users.forEach((user) => {
        lastUsers.innerHTML += `
        <li class="list-group-item">${user}</li>
        
        `
    })

}