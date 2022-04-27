let content = document.querySelector('.content');

getRepositoryData();

async function getRepositoryData() {
    let data;
    try {
        let response = await fetch('https://api.github.com/repos/vd0691/maxima-dmitriy-vasilev/contents/');
        data = await response.json();
    } catch (e) {
        console.log(e);
    }
    homeWorkcatalogsOutput(data);
}

function homeWorkcatalogsOutput(data) {
    let catalogsArray = [];

    data.forEach(catalogs => {
       if(catalogs.name.startsWith('homework')) {
           catalogsArray.push(catalogs.name);
       }
    });

    for (let i = 0; i < catalogsArray.length; i++) {
        catalogsArray.sort((a, b) => {
            return a.length - b.length
        });
        let homeWorktitle = catalogsArray[i].replace('_', ' ').toUpperCase();
        content.innerHTML += `<div class="homework-card">
                                  <h2>${homeWorktitle}</h2>
                                  <a class="card-links" href="https://vd0691.github.io/maxima-dmitriy-vasilev/${catalogsArray[i]}">GIT Pages</a>
                                  <a class="card-links" href="https://github.com/vd0691/maxima-dmitriy-vasilev/tree/main/${catalogsArray[i]}">GIT</a>
                              </div>`
    }
}

