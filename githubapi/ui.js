class UI{
    constructor()
    {
        this.profileDiv = document.getElementById("profile");
        this.repoDiv = document.getElementById("repos");
        this.lastUsers = document.getElementById("last-users");
        this.inputField = document.getElementById("githubname");
        this.cardBody = document.querySelector(".card-body");
    }

    //INPUT TEMIZLEME
    clearInput()
    {
        this.inputField.value = "";
    }

    //INFONU UI-A YAZDIRMAQ
    showUserInfo(user)
    {
        this.profileDiv.innerHTML = `
        
            <div class="card card-body mb-3">
                    <div class="row">
                        <div class="col-md-4">
                            <a href="${user.html_url}" target="_blank">
                                <img src="${user.avatar_url}" class="img-fluid mb-2" alt="">
                            </a>
                            <hr>
                            <div id="fullName"><strong>${user.name}</strong></div>
                            <hr>
                            <div id="bio">${user.bio}</div>
                            <hr>
                        </div>
                        <div class="col-md-8">
                            <button class="btn btn-secondary">
                                Takibçi <span class="badge badge-light">${user.followers}</span>
                            </button>
                            <button class="btn btn-info">
                                Takib edilen <span class="badge badge-light">${user.following}</span>
                            </button>
                            <button class="btn btn-danger">
                                Repolar <span class="badge badge-light">${user.public_repos}</span>
                            </button>
                            <hr>
                            <li class="list-group">
                                <li class="list-group-item borderzero">
                                    <img src="./images/blogging.png" width="30px" alt="">
                                    <span id="blog">${user.blog}</span>
                                </li>
                                <li class="list-group-item borderzero">
                                    <img src="./images/driver-license.png" width="30px" alt="">
                                    <span id="id">${user.id}</span>
                                </li>
                                <li class="list-group-item borderzero">
                                    <img src="./images/clock.png" width="30px" alt="">
                                    <span id="mail">${user.created_at}</span>
                                </li>
                                <li class="list-group-item borderzero">
                                    <img src="./images/mail.png" width="30px" alt="">
                                    <span id="mail">${user.email}</span>
                                </li>
                                <li class="list-group-item borderzero">
                                    <img src="./images/location.png" width="30px" alt="">
                                    <span id="mail">${user.location}</span>
                                </li>
                            </li>
                        </div>
                    </div>
                </div>
       
        `
    }

    //ALERT MESAJI VERDIRME
    showError(message , type)
    {
        const div = document.createElement("div");
        div.className = `alert alert-${type}`;
        div.textContent  = message;
        this.cardBody.appendChild(div);
        
        setTimeout(() => {
            div.remove();
        }, 2000);


    }


    showRepoInfo(repo)
    {
        this.repoDiv.innerHTML = " ";

        repo.forEach((repo) => {
            this.repoDiv.innerHTML += 
            `
            <div class="mb-2 card-body">
                <div class="row">
                    <div class="col-md-2">
                        <a href="${repo.html_url}" target="_blank" id="repoName">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <button class="btn btn-secondary">
                            Watchers <span class="badge badge-light" id="repoWatchers">${repo.watchers}</span>
                        </button>
                        <button class="btn btn-info">
                            Bracnh <span class="badge badge-light" id="repoBranch">${repo.default_branch}</span>
                        </button>
                    </div>
                </div>
            </div>

            `;
        })
    }

    addSearchedUserToUi(username)
    {
        let users = Storage.getSearchedUsersFromStorage();

        if(users.indexOf(username) === -1)
        {
            let li = document.createElement("li");
            li.className = "list-group-item";
            li.textContent = username;

            this.lastUsers.appendChild(li);
        }
    }

    clearAllFromUi()
    {
        while(this.lastUsers.firstElementChild !== null)
        {
            this.lastUsers.removeChild(this.lastUsers.firstElementChild);
        }
    }
}