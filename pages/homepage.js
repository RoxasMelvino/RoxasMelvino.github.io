export default function homepage() {
    document.querySelector(".home-section").innerHTML = `
    <header class="home-header">
    <p class="home-header__hero">
        <!-- <span class="welcome">Welcome.</span> -->
        <!-- <span class="existance" >I am</span> -->   
        <span class="name">Melvino Roxas</span>
        
    </p>
    <div class="home-header-CTAs">
        <button class="home-header__CTA1">See my work</button>
        <button class="home-header__CTA2">Contact me</button>
    </div>  
    </header>
`
}
