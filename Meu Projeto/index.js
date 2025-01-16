function hideAllSections() {
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.classList.add('hidden');
    });
}

function showSection(sectionId) {
    hideAllSections();
    var atual = document.getElementById(sectionId);
    if (atual) {
        atual.classList.remove('hidden');
    }
}





document.getElementById('titleFav').addEventListener('click', function () {
    var sub = document.getElementById('subFav');
    if (sub.style.display === 'none') {
        sub.style.display = 'flex';  //flex nesse 
    } else {
        sub.style.display = 'none';
    }
});


function toggleList(listId) {
    var subtitlesList = document.getElementById(listId);
    if (subtitlesList.style.display === 'none') {
        subtitlesList.style.display = 'block'; //block em todos os outros 
    } else {
        subtitlesList.style.display = 'none';
    }
}
document.getElementById('Artistas').addEventListener('click', function () {
    toggleList('listaA');
});
document.getElementById('Musicas').addEventListener('click', function () {
    toggleList('listaB');
});
document.getElementById('Albuns').addEventListener('click', function () {
    toggleList('listaC');
});

document.getElementById('mus1').addEventListener('click', function () {
    toggleList('mu1');
});
document.getElementById('mus2').addEventListener('click', function () {
    toggleList('mu2');
});
document.getElementById('mus3').addEventListener('click', function () {
    toggleList('mu3');
});
document.getElementById('mus4').addEventListener('click', function () {
    toggleList('mu4');
});
document.getElementById('mus5').addEventListener('click', function () {
    toggleList('mu5');
});

document.getElementById('art1').addEventListener('click', function () {
    toggleList('ar1');
});
document.getElementById('art2').addEventListener('click', function () {
    toggleList('ar2');
});
document.getElementById('art3').addEventListener('click', function () {
    toggleList('ar3');
});
document.getElementById('art4').addEventListener('click', function () {
    toggleList('ar4');
});
document.getElementById('art5').addEventListener('click', function () {
    toggleList('ar5');
});

document.getElementById('alb1').addEventListener('click', function () {
    toggleList('al1');
});
document.getElementById('alb2').addEventListener('click', function () {
    toggleList('al2');
});
document.getElementById('alb3').addEventListener('click', function () {
    toggleList('al3');
});
document.getElementById('alb4').addEventListener('click', function () {
    toggleList('al4');
});
document.getElementById('alb5').addEventListener('click', function () {
    toggleList('al5');
});