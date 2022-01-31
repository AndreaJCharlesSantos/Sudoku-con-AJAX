<?php
    //header('Content-Type: application-json');
    //Obtener el array
    $data = file_get_contents('php://input'); //Aquí se obtiene el contenido
    $objReq = json_decode($data, true); //Se convierte en un array
    $tableroSudoku = $objReq['tablero']; //almacenamos la matriz
    echo json_encode($tableroSudoku); //verificar nomas xd


    //Solucion
    //$resultado = array_fill(0,8, array_fill(0,8,0));
    //for($i = 0; $i < count($tableroSudoku);$i++){
        //for ($j = 0; $j < count($tableroSudoku[i]); $j++){
           //$resultado[$tableroSudoku][$i][$j];
            //if($tableroSudoku[$i][$j] == 0){
                //$resultado[$i][$j] = rand(1,9);
            //}
        //}
    //}
    //$i = array(
        //'datosPeticion' => $data,
        //'resuelto' => true,
        //'resultado' => $resultado,
    //);
    //header('Content-Type: application-json');
    //echo json_encode($i);
?>
