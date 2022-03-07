# Taller practico, NodeJS y MongoDB
Juego de dados, realizado con NodeJS y MongoDB.

## Funcionamiento
Ejecutar el comando `npm install` abriendo la consola dentro de la carpeta, para instalar dependencias necesarias.

Para ejecutar el proyecto ingresa el comando `npm start`.
Se ejecuta por defecto en el puerto 3000.

## Rutas

> "POST"

Formulario para crear los juegos con 3 jugadores
```
localhost:3000/createGame
```

> "PUT"

Comienza el juego, se busca el juego con el id de la partida, la apuesta ese asigna aleatoriamente
```
localhost:3000/startGame/:id
```

> "GET"

Consultar todos los juegos registrados
```
localhost:3000/game
```

Consultar un juego en especifico por su id
```
localhost:3000/game/:id
```

Consultar el ganador del juego usando el id de la partida
```
localhost:3000/winner/:id
```
