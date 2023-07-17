## Piccola rubrica

[![phonebook](https://cdn0.iconfinder.com/data/icons/typicons-2/24/contacts-128.png)](gloriag.altervista.org/phonebook)

Phonebook è un piccolo applicativo sviluppato con il framework [Ext JS](http://www.sencha.com/products/extjs/). Il suo utilizzo è molto semplice, si può aggiungere una nuova voce, modificare oppure eliminare. Si può filtrare per nome, cognome o numero di telefono. Tutte le voci si visualizzano in una tabella.

Per poterlo visualizzare si può andare a questo link [Preview rubrica](http://gloriag.altervista.org/phonebook/). Si può sennò scaricare il sorgente e predisporre un database preferibilmente [MySQL](http://www.mysql.com/)

## Getting Started

1. Utilizzando il [Git Bash](http://git-scm.com/downloads), dopo essersi sistemati in uno spazio dove poter installare l'applicazione su server o in locale (wamp, mamp, lamp) scaricare i file dal mio repository ([https://github.com/ggoldin/phonebook](https://github.com/ggoldin/phonebook)):

        cd your/development/folder/
        git clone https://github.com/ggoldin/phonebook
    
    Potrebbe essere utile questo [link](http://www.git-tower.com/learn/ebook/command-line/basics/starting-with-a-remote-project#start)

2. Aprire il proprio database manager (es. http://localhost/phpmyadmin/ se si sta utilizzando MySql), creare un nuovo database di nome phonebook o qualsivoglia nominativo ed eseguire al'interno del nuovo database creato l'istruzione SQL che si trova nel file createEntriesTable.sql per creare una nuova tabella entries dove saranno salvate tutte le voci della rubrica
3. Aprire quindi il file in data/config.php e da riga 2 a 5 modificare i dati per il collegamento al vostro db
4. Collegarsi alla pagina index.php dell'applicativo ed aggiungere, rimuovere o modificare le voci
