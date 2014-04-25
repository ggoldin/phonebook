<?php
define('DB_HOST', 'localhost');
define('DB_NAME', 'my_gloriag');
define('DB_USER', 'gloriag');
define('DB_PASS', '');

$API = array(
    'Entries'=>array(
        'methods'=>array(
            'read'=>array('len'=>1),
            'create'=>array('len'=>1),
            'update'=>array('len'=>1),
            'destroy'=>array('len'=>1),
        )
    )
);

class PBDB {
	protected static $db;
	
	protected static function _openConnection() {
		
		$dsn = 'mysql:dbname='.DB_NAME.';host='.DB_HOST;

        self::$db = new PDO($dsn, DB_USER, DB_PASS);
        self::$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        self::$db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    
    }
	
	public static function getDB() {
		if(empty(self::$db)) self::_openConnection();
		return self::$db;
	}
}