
const sleepLink = document.getElementById('sleepLink');
const scalpLink = document.getElementById( 'scalpLink' );
const hairThinLink = document.getElementById("hairThinLink");
const scalpPsoriasisLink = document.getElementById("scalpPsoriasisLink");
const dandruffLink = document.getElementById("dandruffLink");
const scalpInfectionLink = document.getElementById("scalpInfectionLink");
const baldSpotLink = document.getElementById("baldSpotsLink");

sleepLink.addEventListener('click', function(event) {
    event.preventDefault();
    renderBlogContent('sleep');
});
scalpLink.addEventListener('click', function(event) {
    event.preventDefault();
    renderBlogContent('scalpHealth');
});
hairThinLink.addEventListener('click', function(event) {
    event.preventDefault();
    renderBlogContent('hairThinning');
});
scalpPsoriasisLink.addEventListener('click', function(event) {
    event.preventDefault();
    renderBlogContent('scalpPsoriasis');
});
dandruffLink.addEventListener('click', function(event) {
    event.preventDefault();
    renderBlogContent('dandruff');
});
scalpInfectionLink.addEventListener('click', function(event) {
    event.preventDefault();
    renderBlogContent('scalpInfections');
});
baldSpotLink.addEventListener('click', function(event) {
    event.preventDefault();
    renderBlogContent('baldSpots');
});

function renderBlogContent(blogType){
    let blogContentContainer = document.getElementById('blogContentContainer');

    if (!blogContentContainer){
        blogContentContainer = document.createElement('div');
        blogContentContainer.id = 'blogContentContainer';
        document.body.appendChild(blogContentContainer);
    }


    switch (blogType){
        case 'sleep':
            blogContentContainer.innerHTML = `
                <div>
                    <h2>Importance Of Sleep</h2>
                    <p>Often neglected due to our busy lives is sleep, here’s a few suggestions for a healthy sleep schedule for men. It's important to note that while individual sleep needs can vary, here’s some key points to keep in mind</p>
                </div>
            `;
            break;
        case 'scalpHealth':
            blogContentContainer.innerHTML = `
                <div>
                    <h2>Scalp Health</h2>
                    <p>Men to ensure great scalp health, it's important to use products that promote a balanced and healthy scalp environment. Here are some types of products that can contribute to scalp health</p>
                </div>
            `;
            break;
        case 'hairThinning':
            blogContentContainer.innerHTML = `
                <div>
                    <h2>Scalp Health</h2>
                    <p>Men to ensure great scalp health, it's important to use products that promote a balanced and healthy scalp environment. Here are some types of products that can contribute to scalp health</p>
                </div>
            `;
            break;
        case 'scalpPsoriasis':
            blogContentContainer.innerHTML = `
                <div>
                    <h2>Scalp Health</h2>
                    <p>Men to ensure great scalp health, it's important to use products that promote a balanced and healthy scalp environment. Here are some types of products that can contribute to scalp health</p>
                </div>
            `;
            break;
        case 'dandruff':
            blogContentContainer.innerHTML = `
                <div>
                    <h2>Scalp Health</h2>
                    <p>Men to ensure great scalp health, it's important to use products that promote a balanced and healthy scalp environment. Here are some types of products that can contribute to scalp health</p>
                </div>
            `;
            break;
        case 'scalpInfections':
            blogContentContainer.innerHTML = `
                <div>
                    <h2>Scalp Health</h2>
                    <p>Men to ensure great scalp health, it's important to use products that promote a balanced and healthy scalp environment. Here are some types of products that can contribute to scalp health</p>
                </div>
            `;
            break;
        case 'baldSpots':
            blogContentContainer.innerHTML = `
                <div>
                    <h2>Sca</h2>
                    <p>Men to ensure great scalp health, it's important to use products that promote a balanced and healthy scalp environment. Here are some types of products that can contribute to scalp health</p>
                </div>
            `;
            break;
    }
}
