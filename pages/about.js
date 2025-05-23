export default function about() {
    console.log("YESSIR");
    document.querySelector(".about-section").innerHTML = `
        <header class="about-header">
            <p class="about-header__hero">
                <span class="welcome">Welcome.</span>
                <span class="existance" >I am</span> 
                <span class="name">Melvino Roxas</span>
                
            </p>
            <div class="about-header-CTAs">
                <button class="about-header__CTA1">See my work</button>
                <button class="about-header__CTA2">Contact me</button>
            </div>
        </header>
                
        <div class="about-info">
            <div class="about-info__paragraph">
                <h2>about me<span style="color: #E9A752;">.</span></h2>
                <p>blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah </p>
            </div>
            <div class="about-info__pfp"></div>
        </div>
    `; 
}
