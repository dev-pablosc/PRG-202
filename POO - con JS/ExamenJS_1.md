# Evaluación Práctica de JavaScript: Objetos, Arrays y Condicionales

A continuación se presentan varios ejercicios diseñados para evaluar la comprensión de objetos (creación, modificación, anidación, desestructuración), arrays y lógica condicional básica. 

---

### Ejercicio 1: El Perfil del Usuario (Objetos Anidados y Modificación)
**Instrucciones:**
Trabajaremos con un objeto que contiene información estructurada en varios niveles. 
1. Dado el siguiente objeto `usuario`, agrega una nueva red social (`twitter: "@ana_tweets"`) dentro del objeto anidado `redesSociales`.
2. Actualiza el valor del `codigoPostal` que se encuentra dentro de la propiedad `direccion` a `"0005"`.
3. Por motivos de privacidad, el usuario ha decidido ocultar su número de teléfono. Elimina la propiedad `telefono` del objeto principal.

**Código inicial:**
```javascript
const usuario = {
  nombre: "Ana",
  edad: 28,
  telefono: "555-1234",
  direccion: {
    calle: "Av. Principal",
    ciudad: "Sucre",
    codigoPostal: "0000"
  },
  redesSociales: {
    instagram: "@ana_dev",
    linkedin: "ana-developer"
  }
};

// Escribe tu código debajo de esta línea
```

---

### Ejercicio 2: Extracción de Datos (Destructuring)
**Instrucciones:**
Extraer partes específicas de un objeto es muy común antes de enviarlas a una interfaz. Utiliza **exclusivamente la sintaxis de desestructuración (destructuring)** para este ejercicio.
1. Del objeto `videojuego`, extrae el `titulo` y el `genero` en variables independientes.
2. Extrae el nombre del `director` que se encuentra dentro del objeto anidado `desarrollo`.
3. Extrae la propiedad `engine` y, en el mismo paso, asígnale un nuevo nombre de variable llamado `motorGrafico`.
4. Imprime todas las variables extraídas en un `console.log`.

**Código inicial:**
```javascript
const videojuego = {
  titulo: "The Legend of Code",
  genero: "RPG",
  lanzamiento: 2024,
  desarrollo: {
    estudio: "IndieDevs",
    director: "Carlos Gómez",
    engine: "Unreal Engine 5"
  }
};

// Escribe tu código utilizando destructuring aquí
```

---

### Ejercicio 3: Manipulación de Arrays de Objetos (Acceso por Índice)
**Instrucciones:**
A continuación tienes un array que contiene una lista de objetos (empleados). **Sin utilizar bucles**, realiza las siguientes operaciones accediendo directamente a los índices del array:
1. Accede al segundo empleado (índice 1) y actualiza su salario a `3500`.
2. Evalúa con un condicional si el departamento del tercer empleado (índice 2) es `"Recursos Humanos"`. Si es así, agrégale una nueva propiedad llamada `bono` con el valor `500`.
3. Crea un nuevo objeto empleado y agrégalo al final del array utilizando el método correspondiente de los arrays.
4. Imprime el array completo en la consola.

**Código inicial:**
```javascript
const empleados = [
  { nombre: "Lucía", departamento: "Ventas", salario: 2500 },
  { nombre: "Roberto", departamento: "Tecnología", salario: 3200 },
  { nombre: "Elena", departamento: "Recursos Humanos", salario: 2800 }
];

// Escribe tu código aquí
```


```