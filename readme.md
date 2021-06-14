# Para poder ejecutar el servidor

Antes de iniciar, se debe modificar el archivo src/config/db.config.js y modificar los siguientes parametros: 
host: el nombre del host de la base de datos
port: el puerto que utilizara la db
user: el nombre de usuario de la db
password: la contraseña de la db
database: el nombre de la base de datos

## Creacion de la base de datos

Para crear la base de datos utilizada por el servidor, se puede utilizar el query ubicado en models/db_model.sql en un servicio de PostgreSQL

## Descargar dependencias

Se debe utilizar el comando npm install en la consola en el directorio del proyecto

## Ejecutar el servidor

Utilizar el comando node src/index
