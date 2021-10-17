PostGres Setup

---- Install PostGres ----
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib

---- Create a new user instance to manage the db ----
sudo adduser postgres_user

---- Log into the default PostgresSQL user ----
sudo su - postgres
psql

---- Create a database and assign it to the new user ----
CREATE USER postgres_user WITH PASSWORD 'password';
CREATE DATABASE my_postgres_db OWNER postgres_user;
\q
exit

---- Log into the new user ----
sudo su - postgres_user

---- Sign into the database ----
psql my_postgres_db

-/-

---- Adding User User Privledges ----
sudo su - postgres
psql
ALTER ROLE <username> WITH SUPERUSER;
\q
exit
exit


-- Install GraphQL --
yarn add express apollo-server-express graphql typegraphql
-- Install Typescript Types for express --
yard add -D @types/express