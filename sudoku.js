const $txtN_0_0 = $('#txtN_0_0');
const $btnResolver = $('#btnResolver');

$btnResolver.on('click',function(e){
    e.preventDefault();
    const tablerosudoku = ObtenerTablero();
    //console.log(tablerosudoku);

    $.ajax({
        method: "POST",
        url: "sudoku.php",
        data: {
            tablero: tablerosudoku // Array of arrays
        }
    })
});

function ObtenerTablero(){
    const tablerosudoku = [];
    for (let r = 0; r < 9; r++){
        const row = [];
        for (let c = 0; c < 9; c++){
            row.push(valorMatrix(r,c));
        }
        tablerosudoku.push(row);
    }
    return tablerosudoku;
}

function numero0Null(s){
    const v = parseInt(s);
    return isNaN(v) ? null : v;

}

function valorMatrix(r,c){
    const elementID = `#txtN_${r}_${c}`;
    return numero0Null($(elementID).val());
}

