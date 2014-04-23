CREATE TABLE config (key VARCHAR(50) PRIMARY KEY, value VARCHAR(255));
CREATE TABLE entries (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname VARCHAR(255), lastname VARCHAR(255), phone text);

-- Since sqlite doesn't currently support foreign keys the following trigger is needed to make sqlite do the
-- equivalent of "ON DELETE CASCADE" on the task's "list_id" foreign key.
-- For more info see: http://www.sqlite.org/cvstrac/wiki?p=ForeignKeyTriggers