// ekrana yansıtma - açık/kapalı mod olayları

class UI {
    constructor() {
        this.profile = document.getElementById("profile");
        this.reposArea = document.getElementById("repos");
        this.alertArea = document.getElementById("alert");
    }

    // profil arayüzünü ekrana yansıtma
    showProfile(data) {
        console.log(data);
        this.profile.innerHTML = `
        <div class="row border p-4 my-4 rounded">
           
            <div class="col-md-3">
                <img 
                class="img-fluid rounded shadow" 
                src=${data.avatar_url}
                />
                <a target="_blank" class="btn btn-success my-4 w-100" href=${data.html_url}>Profil Görüntüle</a>
            </div>
            
            <div class="col-md-9">
                
                <span class="badge bg-primary fs-6 mt-1">Açık Repolar: ${data.public_repos}</span>
                <span class="badge bg-success fs-6 mt-1">Açık Gistler: ${data.public_gists}</span>
                <span class="badge bg-danger fs-6 mt-1">Takipçiler: ${data.followers}</span>
                <span class="badge bg-info fs-6 mt-1">Takip Edilenler: ${data.following}</span>
            
                <ul class="list-group mt-5">
                    <li class="list-group-item fw-bold">Hakkında : ${data.bio}</li>
                    <li class="list-group-item fw-bold">Şirket : ${data.company}</li>
                    <li class="list-group-item fw-bold">Konum : ${data.location}</li>
                    <li class="list-group-item fw-bold">Web Site : ${data.blog}</li>
                    <li class="list-group-item fw-bold">Katılma Tarihi : ${new Date(data.created_at).toLocaleDateString()}</li>
                </ul>
            </div>
        </div>
        `
    }

    // repoları ekrana yansıtma fonks.  
    showRepos(repos) {

        // diziyi dönme
        repos.forEach((repo) => {
            console.log(repo)
            // dizideki her eleman için repoyu temsil eden html oluşturma
            this.reposArea.innerHTML += `
            <div class="border row mb-4 p-3 rounded">
            <div class="col-md-6">
                <a href=${repo.html_url}>${repo.name}</a>
            </div>
            <div class="col-md-6">
                <span class="badge bg-warning">Yıldız: ${repo.stargazers_count}</span>
                <span class="badge bg-danger">İzleyenler: ${repo.watchers_count}</span>
                <span class="badge bg-info">Forklar: ${repo.forks_count}</span>
            </div>
        </div>
            `;
        })
        // this.reposArea.innerHTML = outlet;
    }

    // uyarı mesajı oluşturma
    showAlert(message, classname){
        // div oluşturma
        const div = document.createElement('div');
        
        // sabit classını belirleme
        div.classList.add("alert");
        
        // parametre olarak gelen alert rengi tanımlama
        div.classList.add(classname);
        
        //  uyarı yazısı ekleme
        div.innerText = message;

        // html'e gönderme
        this.alertArea.innerHTML = '';
        this.alertArea.appendChild(div);
        setTimeout(() => {
            div.remove();
        }, 2000);
    }
}

export default UI;  