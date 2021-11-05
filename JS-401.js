let lista = [
    {
        ime: "Ana",
        prezime: "Anić",
        upisan: true
    },
    {
        ime: "Ivan",
        prezime:"Ivić",
        upisan: false
    },
    {
        ime: "Marko",
        prezime: "Marić",
        upisan: true
    },
    {
        ime: "Maja",
        prezime: "Majić",
        upisan: true
    },
    {
        ime: "Karlo",
        prezime: "Karlić",
        upisan: false
    },
    {
        ime: "Sara",
        prezime: "Sarić",
        upisan: true
    },
    {
        ime: "Lucija",
        prezime: "Lucić",
        upisan: false
    },
    {
        ime: "Lara",
        prezime: "Larić",
        upisan: false
    },
    {
        ime: "Luka",
        prezime: "Lukić",
        upisan: true
    },
    {
        ime: "Iva",
        prezime: "Ivić",
        upisan: true
    }
];

//console.log(lista[0].ime);

let provjeri = (lista, pojam) => {
    for (let i = 0; i <= lista.length; i++) {
        if (lista[i].ime == pojam || lista[i].prezime == pojam) {
            if (lista[i].upisan == true) {
                return true;
            } else {
                return false;
            }
        }
    }
}

console.log(provjeri(lista, "Iva"));