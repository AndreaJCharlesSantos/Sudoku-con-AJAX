const $txtN_0_0 = $('#txtN_0_0');
const $btnResolver = $('#btnResolver');
const datosTbody = document.querySelector('#datosTbody')

$btnResolver.on('click',function(e){
    e.preventDefault();
    const tablerosudoku = ObtenerTablero();
    const jsonTablero = JSON.stringify(tablerosudoku); // Convert tablerosudoku to JSON
    $.ajax({
        method: "POST",
        url: "sudoku.php",
        data: {
            tablero: jsonTablero // Array of arrays
        }
    }).done(function(response){
        for (i = 0; i < 9; i++){
            const tr = document.createElement('tr');
            for (j = 0; j < 9; j++){
                const td = document.createElement('td');
                td.textContent = response[i][j];
                tr.appendChild(td);
            }
            datosTbody.appendChild(tr);
            }
        /*
        for($i = 0; $i < 9; $i++){
            for($j = 0; $j < 9; $j++){
                const elementID = `#txtN_${$i}_${$j}`;
                $(elementID).val(response[$i][$j]);
            }
        }*/
    })
});

/**
$btnResolver.on('click',function(e){
    e.preventDefault();
    const tablerosudoku = ObtenerTablero();
    //console.log(tablerosudoku);
    const datos = {tablero: tablerosudoku};
    const opts = {
        method: 'POST',
        body: JSON.stringify(datos),
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
    }
    fetch('sudoku.php', opts )
        //.then(res => res.text())
        .then(response => response.json())
        .then(respuestaJSON =>{
            console.log("hola");
            for (i = 0; i < 9; i++){
                const tr = document.createElement('tr');
                for (j = 0; j < 9; j++){
                    const td = document.createElement('td');
                    td.textContent = respuestaJSON[i][j];
                    tr.appendChild(td);
                }
                datosTbody.appendChild(tr);
                }
        });
});
*/
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

