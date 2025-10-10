const customize_button = document.getElementById('customize_button');
const customize_section = document.getElementById('customize_section');
const close_customize = document.getElementById('close_customize');
const main = document.querySelector('body');

if (customize_button && close_customize && customize_section) {

    customize_button.addEventListener("click", () => {
        customize_section.classList.toggle("active");
        // main.style.opacity = "0.1";
        
    });
    close_customize.addEventListener("click", () => {
        customize_section.classList.remove("active");
                main.style.opacity = "1";

    });
}

