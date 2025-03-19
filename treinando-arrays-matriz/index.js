const chairs = [
    ['Disponivel', 'Disponivel', 'Disponivel'],
    ['Disponivel', 'Disponivel', 'Disponivel'],
    ['Disponivel', 'Disponivel', 'Disponivel'],
    ['Disponivel', 'Disponivel', 'Disponivel']
];

function seeAllChairs(){
    console.table(chairs);
}

function chairStatus(row, collum){
    if (row < 1 || row > chairs.length || collum < 1 || collum > chairs[0].length) {
        console.log('Posição inválida. Verifique a fileira e a coluna.');
        return;
    }
    console.log(`Situação da cadeira localizada na Fileira ${row} e na Coluna ${collum}: ${chairs[row-1][collum-1]}`);
}

function reserveChair(row, collum){
    if (row < 1 || row > chairs.length || collum < 1 || collum > chairs[0].length) {
        console.log('Posição inválida. Verifique a fileira e a coluna.');
        return;
    }
    if (chairs[row-1][collum-1] === 'Disponivel'){
        chairs[row-1][collum-1] = 'Reservado';
        console.log(`Cadeira localizada na Fileira ${row} e na Coluna ${collum} reservada com sucesso!`);
    } else {
        console.log(`Cadeira localizada na Fileira ${row} e na Coluna ${collum} já está reservada.`);
    }
}

function cancelReservation(row, collum){
    if (row < 1 || row > chairs.length || collum < 1 || collum > chairs[0].length) {
        console.log('Posição inválida. Verifique a fileira e a coluna.');
        return;
    }
    if (chairs[row-1][collum-1] === 'Reservado'){
        chairs[row-1][collum-1] = 'Disponivel';
        console.log(`Reserva cancelada da cadeira localizada na Fileira ${row} e na Coluna ${collum}.`);
    } else {
        console.log(`Cadeira localizada na Fileira ${row} e na Coluna ${collum} não possui uma reserva.`);
    }
}
