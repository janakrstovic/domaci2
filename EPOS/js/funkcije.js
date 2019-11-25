function validateForm() {
    var ime = document.mojaForma.ime.value;
    var prezime = document.mojaForma.prezime.value;
    var godine_ind = document.mojaForma.godine.value;
    var pol = document.mojaForma.pol.value;
    var datum = new Date();
    if (ime == '' || prezime == '' || godine_ind == '0' || pol == "") alert('Popuni sva polja!');
    else { alert("Poruka uspesno poslata dana " + datum.getDate() + "/" + datum.getMonth() + "/" + datum.getFullYear()); return true; };
    return false;
}

function gdeSam() {
    alert("Nalazite se na stranici: " + window.location.href);
}