        var toggle = document.querySelector('.toggle')
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('toggle--active')
        })
    
function unactive (){
    toggle.classList.remove('toggle--active')
}
// ------------------------------------------------------------
var select = document.querySelector('#select-lang')

var allLang = ['en', 'ru' , 'uz'];

select.addEventListener('change', changeURLLanguage);


function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    console.log(hash);
    if(!allLang.includes(hash)){
        location.href = window.location.pathname + '#en';
        location.reload();
    }    
    select.value = hash;
    for (let key in langArr)    {
        document.querySelector('.lang-' + key).innerHTML = langArr[key][hash];
    }
}



changeLanguage();