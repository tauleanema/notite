function incarca() {
    document.getElementById('text-luni').value = localStorage.getItem('luni');
    document.getElementById('text-marti').value = localStorage.getItem('marti');
    document.getElementById('text-miercuri').value = localStorage.getItem('miercuri');
    document.getElementById('text-joi').value = localStorage.getItem('joi');
    document.getElementById('text-vineri').value = localStorage.getItem('vineri');
    document.getElementById('text-sambata').value = localStorage.getItem('sambata');
    document.getElementById('text-duminica').value = localStorage.getItem('duminica');
 
    document.getElementById('data-luni').innertHTML = localStorage.getItem('data-luni');
    document.getElementById('data-marti').innertHTML = localStorage.getItem('data-marti');
    document.getElementById('data-miercuri').innertHTML = localStorage.getItem('data-miercuri');
    document.getElementById('data-joi').innertHTML = localStorage.getItem('data-joi');
    document.getElementById('data-vineri').innertHTML = localStorage.getItem('data-vineri');
    document.getElementById('data-sambata').innertHTML = localStorage.getItem('data-sambata');
    document.getElementById('data-duminica').innertHTML = localStorage.getItem('data-duminica');
}

function salveaza(zi) {

    let text = document.getElementById("text-" + zi).value;
    let data =new Date();
    let dataText = data.toLocaleString();
    
    localStorage.setItem(zi, text);
    localStorage.setItem('data-' + zi, dataText);
    
    document.getElementById('data-' + zi).innerHTML = dataText;
   
    alert("Salvat cu succes!");
}