<?php

    require "loader.php";

    use LWK\Modules\DB\Connection;
    use LWK\Modules\DB\Query;
    
class horas {

    static function getHoras($ano = null, $codpessoa) {

        $conec = Connection::getConnection();
        $query = Query::getQuery($conec);

        $sql = 'SELECT';
        $sql .= " To_Char(dthrregistro, 'MONTH') AS mes, Sum(registrominutos) / 60 AS horas, CRMPESSOASRH.nmpessoa";
        $sql .= ' FROM CRMDEMANDASATVEXECHORAS';
        $sql .= ' INNER JOIN CRMPESSOASRH ON (CRMPESSOASRH.codpessoa = CRMDEMANDASATVEXECHORAS.codpessoa)';
        $sql .= " WHERE To_Char(dthrregistro, 'YYYY') = " . $conec->toNumber($ano == null ? 2021 : $ano);
        $sql .= ' AND ';
        $sql .= " CRMPESSOASRH.codpessoa = " . $conec->toNumber($codpessoa);
        $sql .= " GROUP BY To_Char(dthrregistro, 'MONTH'), To_Char(dthrregistro, 'mm/YYYY'), CRMPESSOASRH.nmpessoa";
        $sql .= " ORDER BY To_Date(mes, 'MONTH') ASC";

        $query->open($sql);

        $array = Array();

        while($query->next()){

            $horas = new StdClass();
            $horas->mes = $query->get("mes");
            $horas->horas = $query->get("horas");
            $horas->nmpessoa = $query->get("nmpessoa");

            array_push($array, $horas);
        }

        return $array;


    }

}

//horas::getHoras();

?>