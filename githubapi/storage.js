class Storage{
    static getSearchedUsersFromStorage()
    {
        //STORAGEDEN KULLANICILARI ALMAK
        let users;

        if(localStorage.getItem("searched") === null )
        {
            users = [];
        }
        else
        {
            users = JSON.parse(localStorage.getItem("searched"))
        }
        return users;
    }

    static addSearchedUsersToStorage(username)
    {
        //ARANAN KULLANICILARI STORAGEYE EKLEMEK
        let users = this.getSearchedUsersFromStorage()

        if(users.indexOf(username) === -1)
        {
            users.push(username);
        }
        localStorage.setItem("searched" , JSON.stringify(users));
    }

    static clearAllSearchedUsersFromStorage()
    {
        //aranmiw kullanicilarinin hamsni storageden silmek
        localStorage.removeItem("searched");
    }
}