const btn = document.querySelector('#view_btn');
const exit_btn = document.querySelector('#exit_btn');
const solar_system = document.querySelector('.main_container');
const all_content = document.querySelector('.grand_container')

btn.addEventListener('click', () => {
    solar_system.classList.toggle('hide');
    if ( !solar_system.classList.contains('hide') ) {
        all_content.style.display = 'none';
    }
    else{
        all_content.style.display = 'block';
    }
});

exit_btn.addEventListener('click', () => {
    solar_system.classList.toggle('hide');
    if ( !solar_system.classList.contains('hide') ) {
        all_content.style.display = 'none';
    }
    else{
        all_content.style.display = 'block';
    }
});
