class Github {
    // istek atmak için gerekli olan bilgiler
    constructor() {
        this.clientID = "7b4f69f58aa0c248a653";
        this.clientSecret = "27648c389cdfc79b8f4f4d1d94de7afb2f05f33c";
        this.perPage = 25;
        this.sort = "asc";
    }
    
    // API'den kullanıcı bilgisini alır
    async getUser(username) {
        //  parametre olarak gelen kullanıcı bilgisine göre istek atma
        const profileRes = await fetch(
            `https://api.github.com/users/${username}?client_id=$${this.clientID}&?client_secret=${this.clientSecret}`
        );

        // repo bilgilerini alma 
        const repoRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=${this.perPage}&sort${this.sort}&client_id=$${this.clientID}&?client_secret=${this.clientSecret}`)
        
        // gelen cevabı JSON'a çevirme
        const profile = await profileRes.json();
        const repos = await repoRes.json();

        //  fonksiyonun çağrıldığı yere profile ve repos bilgilerini gönderme
        return{
            profile,
            repos,
        };
    }
}

export default Github;