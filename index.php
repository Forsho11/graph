<?php

    // use App\funcoes\Parametros;
    use LWK\Modules\DB\Connection;
    use LWK\Modules\DB\Query;

    require "loader.php";
    require "dbConnection.php";

    $json = file_get_contents('php://input');
    $json = json_decode($json);

    $horas = horas::getHoras($json->optionYear, $json->codPessoa);


/* Configuration of the Library */

$barColors = array(
    'rgba(255, 99, 132, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(255, 205, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(201, 203, 207, 0.2)');

$borderColor = array(
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(54, 162, 235)',
    'rgb(153, 102, 255)',
    'rgb(201, 203, 207)');

    $chart = new StdClass();
    
    $chart->data = new StdClass();
    $chart->data->labels = [];
    $chart->data->datasets = [];
    
    foreach ($horas as $item) {
        array_push($chart->data->labels, $item->mes);
    }

    /* Title */
    
    $chart->options = new StdClass();
    $chart->options->plugins = new StdClass();
    $chart->options->plugins->title = new stdClass();
    
    $chart->options->plugins->title->display = true;
    $chart->options->plugins->title->text =[]; 
    $chart->options->plugins->title->color = "black";

    foreach ($horas as $item) {

        $nmpessoa = $item->nmpessoa;

        if (!in_array($nmpessoa, $chart->options->plugins->title->text)) {
            array_push($chart->options->plugins->title->text, $nmpessoa);
        }

    }

    $chart->options->plugins->title->font = new stdClass();

    $chart->options->plugins->title->font->size = 16;
    $chart->options->plugins->title->font->family = 'tahoma';

    $chart->options->plugins->title->font->padding = new stdClass();

    $chart->options->plugins->title->font->padding->top = 20;  
    $chart->options->plugins->title->font->padding->left = 10;
    $chart->options->plugins->title->font->padding->right = 30;
    $chart->options->plugins->title->font->padding->left = 11;
    
    $dataSet = new StdClass();
    $dataSet->type = "bar";
    $dataSet->label = " horas registradas";
    $dataSet->data = [1,2];

    foreach ($horas as $item) {
        array_push($dataSet->data, $item->horas);
    }

    /* Style Definition */

    $dataSet->backgroundColor =  $barColors;
    $dataSet->borderColor =  $borderColor;
    $dataSet->borderWidth = 1;

    array_push($chart->data->datasets, $dataSet);

    $dataSet = new StdClass();

    $dataSet->type = "bar";
    $dataSet->label = "Meta";
    $dataSet->data = [90,90 ,90, 90, 90, 90, 90, 90, 90, 90, 90, 90 ];

    /* Style Definition */

    $dataSet->backgroundColor =  $borderColor;
    $dataSet->borderColor =  $barColors;
    $dataSet->borderWidth = 1;

    array_push($chart->data->datasets, $dataSet);

    $json = json_encode($chart);

    echo $json;


?>