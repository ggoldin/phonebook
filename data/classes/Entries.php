<?php

class Entries {

    public function read($options) {
        $db = PBDB::getDB();
        
        $sql = 'SELECT * FROM entries ';
        
        $params = array();
        $where = array();
        if(!empty($options->filter)) {
            foreach($options->filter as $filter) {
                $where[] = $filter->property . ' = :'.$filter->property;
                $params[$filter->property] = $filter->value;
            }
        }
        
        if(!empty($where)) {
            $sql .= ' WHERE '. implode(' AND ', $where);
        }
        
        $stmt = $db->prepare($sql);
        $stmt->execute($params);
        $results = $stmt->fetchAll();
        
        
        return $results;
    }
    

    public function create($options) {
        $db = PBDB::getDB();
        $sql = 'INSERT INTO entries (firstname, lastname, phone) VALUES (:firstname, :lastname, :phone)';
        $stmt = $db->prepare($sql);
        $stmt->execute(array(
            'firstname'=>$options->firstname,
            'lastname'=>$options->lastname,
            'phone'=>$options->phone,
        ));
        //$id = $db->lastInsertId();
        
        //$readParams = new stdClass();
        //$filter = new stdClass();
        //$filter->property = 'id';
        //$filter->value = $id;
        //$readParams->filter = array($filter);
        
        //return $this->read($readParams);
    }

    public function update($options) {
        $db = PBDB::getDB();
        $sql = 'UPDATE entries SET firstname=:firstname, lastname=:lastname, phone=:phone WHERE id=:id';
        $stmt = $db->prepare($sql);
        $stmt->execute(array(
            'id'=>$options->id,
            'firstname'=>$options->firstname,
            'lastname'=>$options->lastname,
            'phone'=>$options->phone
        ));
        
        /* $readParams = new stdClass();
        $filter = new stdClass();
        $filter->property = 'id';
        $filter->value = $options->id;
        $readParams->filter = array($filter);
        
        
        $return = $this->read($readParams);
        return $return[0]; */
        
        
    }
    

    public function destroy($options) {
        $db = PBDB::getDB();
        $sql = 'DELETE FROM entries WHERE id=:id';
        $stmt = $db->prepare($sql);
        $stmt->execute(array(
            'id'=>$options->id
        ));
        
    }
    
}