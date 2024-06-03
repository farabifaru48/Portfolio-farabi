const container = document.querySelector('.container');
const cloneCoontainer = container.cloneNode(true);
cloneCoontainer.id = 'dark-container'
document.body.appendChild(cloneCoontainer);
cloneCoontainer.classList.remove('active');

const toggleIcoons= document.querySelectorAll('.toggle-icon')
const icons= document.querySelectorAll('.toggle-icon i')
const darkContainer= document.querySelector('#dark-container')
const darkContainerImg= document.querySelector('#dark-container .home-img img')
darkContainerImg.src = 'imgDark.png'

toggleIcoons.forEach(toggle =>{
    toggle.addEventListener('click',()=>{
        toggle.classList.add('disabled');
        setTimeout(()=>{
            toggle.classList.remove('disabled');

        },1500);
        icons.forEach(icon =>{
            icon.classList.toggle('bx-sun');
        })
        container.classList.toggle('active');
        darkContainer.classList.toggle('active');
    })
})