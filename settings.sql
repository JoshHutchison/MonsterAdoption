-- settings.sql
CREATE DATABASE monster_api;
CREATE USER monsteruser WITH PASSWORD 'monster_api';
GRANT ALL PRIVILEGES ON DATABASE monster_api TO monsteruser;