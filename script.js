// დავალების შესასრულებლად გამოიყენეთ https://jsonplaceholder.typicode.com/users api
// ეკრანზე გამოაჩინეთ წარწერა ჩვენი მომხმარებლები, ასევე ღილაკი, რომლის კონტენტიც
// იქნება ,,ჩვენება''
// ღილაკზე დაკლიკების შემდეგ, გამოაჩინეთ სერვერიდან აღებული მონაცემები მომხმარებლების შესახებ. 
// გამოიყენეთ async await სერვერთან კომუნიკაციის დროს. 
// გისურვებთ წარმატებას!

const api = "https://jsonplaceholder.typicode.com/users";

const btn = document.getElementById("show-users");
const usersDiv = document.getElementById("users-list");
const clearBtn = document.getElementById("clear");

async function fetchJson() {
    try {
        const res = await fetch(api);
        const users = await res.json();

        usersDiv.textContent = "";
        
        for (let i = 0; i < users.length; i++) {
            const subDir = document.createElement("div");
            const value = document.createElement("p");

            value.textContent = JSON.stringify(users[i]);
            value.classList.add("value");

            subDir.appendChild(value);
            usersDiv.appendChild(subDir);
        }

    } catch (err) {
        const errorMsg = document.createElement("p");
        
        errorMsg.textContent = `დაფიქსირდა შეცდომა --> ${err}`
        errorMsg.classList.add("error");
    
        usersDiv.appendChild(errorMsg);
    }
}

function clear() {
    usersDiv.textContent = "";
}

btn.addEventListener("click", fetchJson);
clearBtn.addEventListener("click", clear);