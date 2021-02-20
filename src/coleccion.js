db.empleados.drop()
db.empleados.insertMany([
    {id: 001, nombre: "Alejandro Pato", fechaEntrada: new Date("2020-05-13"), horasTrabajadas: 600, Departamento: 1},
    {id: 002, nombre: "Manuel Azabache", fechaEntrada: new Date("2015-01-22"), horasTrabajadas: 8000, Departamento: 2},
    {id: 003, nombre: "María Jilguero", fechaEntrada: new Date("2018-02-16"), horasTrabajadas: 2100, Departamento: 3},
    {id: 004, nombre: "Madison Esmeralda", fechaEntrada: new Date("2021-01-01"), horasTrabajadas: 80, Departamento: 4},
    {id: 005, nombre: "Manola Zapato", fechaEntrada: new Date("2020-05-13"), horasTrabajadas: 600, Departamento: 1},
    {id: 006, nombre: "Pepe Reina", fechaEntrada: new Date("2016-01-22"), horasTrabajadas: 6800, Departamento: 2},
    {id: 007, nombre: "Mario Alonso", fechaEntrada: new Date("2019-02-16"), horasTrabajadas: 1300, Departamento: 3},
])

db.departamentos.drop()
db.departamentos.insertMany([
    {idDepartamento: 1, nombre: "Ventas", presupuesto:25000, sueldoHora: 8},
    {idDepartamento: 2, nombre: "Logística", presupuesto:60000, sueldoHora: 13},
    {idDepartamento: 3, nombre: "Producción", presupuesto:35000, sueldoHora: 10},
    {idDepartamento: 4, nombre: "Almacén", presupuesto:20000, sueldoHora: 6},
    
])