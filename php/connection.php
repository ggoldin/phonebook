<?php
//require_once('php/LoggedPDO.php');

define('LOG_DB_QUERIES', false);


class R3ADB {
	protected static $db;
	
	protected static function _openConnection(array $options = array()) {
        $defaultOptions = array(
            'db'=>'my_gloriag'
        );
        $options = array_merge($defaultOptions, $options);
		
		$dsn = 'mysql:dbname='.$options['db'].';host=localhost';
		$user = 'gloriag';
		$password = ' ';

        self::$db = new LoggedPDO($dsn, $user, $password);
        self::$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        self::$db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    
		} /* catch (PDOException $e) {
			die('Connection failed: ' . $e->getMessage());
		} */
    
	
	public static function getDB() {
		if(empty(self::$db)) self::_openConnection();
		return self::$db;
	}
}


?>
