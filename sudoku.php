<?php
    //header('Content-Type: application-json');
    //Obtener el array
    $data = file_get_contents('php://input'); //Aquí se obtiene el contenido
    $objReq = json_decode($data, true); //Se convierte en un array
    $tableroSudoku = $objReq['tablero']; //almacenamos la matriz
    

    //En caso Arturo, de que quieras verificar que salga, verdad
    //Necesitas esta línea de código 'json_encode($variable)'
    echo json_encode($tableroSudoku); //<-

    //$var = ['Holaa','1','2','3']; un ejemplo :p para que veas a que me refiero
    //echo json_encode($var);
    


    //$res = array($datos);
    //Solucion
    //$resultado = array_fill(0,8, array_fill(0,8,0));
    //for($r = 0; $r < is_countable($tableroSudoku);$r++){
        //for ($c = 0; $c < is_countable($tableroSudoku[$r]); $c++){
           //$resultado[$r][$c] = [$tableroSudoku][$r][$c];
            //if($tableroSudoku[$r][$c] == 0){
                //$resultado[$r][$c] = rand(1,9);
            //}
        //}
    //}
    //echo json_encode($resultado);

    //$i = array(
        //'datosPeticion' => $data,
        //'resuelto' => true,
        //'resultado' => $resultado,
    //);
    
    

?>
