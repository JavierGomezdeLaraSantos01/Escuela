function eventHandler() {
    let hamburguesa = document.getElementById('hamburguesa');
    hamburguesa.addEventListener('click',showMenu);
    let cierra = document.getElementById('btnCerrar');
    cierra.addEventListener('click',hideMenu);

    let botonesTabs = document.getElementsByClassName('tabs__tab__tablink');
    for (let i = 0; i < botonesTabs.length; i++) {
        botonesTabs[i].addEventListener('click',showTab)

    }

}

function showTab(e) {
    
    let contentTabs = document.getElementsByClassName('tabs__tabcontent');
    let botonesTabs = document.getElementsByClassName('tabs__tab__tablink');
    for (let i = 0; i < contentTabs.length; i++) {

        if (contentTabs[i].firstChild.nextSibling.innerHTML == e.target.innerHTML) {

            contentTabs[i].style.display = 'block';
            botonesTabs[i].classList.toggle('active');

        }else{

            contentTabs[i].style.display = 'none';
        }

    }
}

function showMenu() {
    document.getElementById('navOverlay').style.width ="100%";
}

function hideMenu() {
    document.getElementById('navOverlay').style.width ="0";
}



window.onload=eventHandler;