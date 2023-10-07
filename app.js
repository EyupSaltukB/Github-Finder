// diğer js dosyalarından gelenler
import Github from "./api.js";
import UI from "./ui.js";

// Github ve UI classının bir örneğini oluşturma
const github = new Github();
const ui = new UI();

// html'den gelenler;

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-btn");
const themeBtn = document.getElementById("theme-btn")
const body = document.querySelector("body");

// olay izleme
searchButton.addEventListener("click", getInput);

searchInput.addEventListener("keypress", (e) => {
    if (e.code === 'Enter') {
        getInput();
    }
});

themeBtn.addEventListener("click",changeTheme)

// metodlar
function getInput() {
    // arama terimi boş değilse
    if(searchInput.value !== ''){
        // kullanıcı bilgileri ve repolar için API isteği at
    github.getUser(searchInput.value)
        .then((data) => {
            // eğer kullanıcı bulunamadıysa
            if(data.profile.message === "Not Found"){
                ui.showAlert("Aradığınız Kullanıcı Bulunamadı" , "alert-info");
            } else {
                ui.showAlert("Kullanıcı Başarıyla Bulundu" , "alert-success");
                // API cevabına göre kullanıcı detay alanını ekrana yansıt
            ui.showProfile(data.profile);

            // repoları ekrana yansıtma
            ui.showRepos(data.repos)
            }
        });
        return;
    }
    //  arama terimi boş ise
    // uyarı ver
    ui.showAlert("Form Alanı Boş Olamaz", 'alert-danger');
}

function changeTheme(){
    body.classList.toggle("bg-dark");
    body.classList.toggle("text-bg-dark");

    if(body.classList.contains("bg-dark")){
        themeBtn.innerText = "Açık Mod";
    } else {
        themeBtn.innerText = "Koyu Mod";
    }
}