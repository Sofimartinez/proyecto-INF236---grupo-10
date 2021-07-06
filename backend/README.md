# Dependencias necesarias para el backend:

**(Inicializa npm - gestor de paquetes de Node)**  
 <span style="color:salmon">npm init -y</span>

**(Express Framework)**  
**(sequelize ORM)**       
**(pg pg-hstore base de datos)**   
<span style="color:salmon"> npm install express sequelize pg pg-hstore</span>

**(Reinicia el servidor automaticamente cuando se realiza un cambio)**
- Modificar en package.json "test": "echo \"Error: no test ..." por "start" : "nodemon app.js"  

<span style="color:salmon"> npm install nodemon sequelize-cli -D </span>


**(Ejecutar aplicación)**  
<span style="color:salmon"> npm start </span>


**(Inicializar sequelize para trabajar con la base de datos)**
- Modificar en config.json username y password por el que corresponda  

<span style="color:salmon"> npx sequelize</span>

**(Crear base de datos)**  
<span style="color:salmon">npx sequelize db:create</span>

**(Crear modelos)**
- Solo si se esta creando la base de datos, no se utiliza cuando ya esta creada
- En models y migrations se realizan las relaciones

<span style="color:salmon"> npx sequelize model:create --name nombre_modelo --attributes nombre_atributo1:tipo,nombre_atributo2:tipo,... </span>

**(Migrar los modelos a la base de datos creada)**  
<span style="color:salmon"> npx sequelize db:migrate  </span>

**(Encriptar contraseña)**   
<span style="color:salmon"> npm install bcrypt </span>  
<span style="color:salmon"> npm install jsonwebtoken dotenv </span>

npm install cors

nom install redux-thunk



