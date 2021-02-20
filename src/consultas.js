/*
En esta consulta intervienen dos colecciones al mismo tiempo: empleados y departamentos. La información que conseguiremos
serán tanto datos de los empleados (nombre, mes de contratación), como de los departamentos (nombre, presupuesto, salario
por hora). También obtendremos el total facturado por cada trabajador mediante la multiplicación de las horas trabajadas
(colección empleados) y el salario/hora (colección departamentos). Los datos aparecerán ordenados de forma descendente
por este último campo (totalFacturado).
*/

db.empleados.aggregate([
    {
        $lookup: {
            from: "departamentos",
            localField: "Departamento",
            foreignField: "idDepartamento",
            as: "empleado"
        }
    },{
        $project: {
            nombre: 1,
            _id: 0,
            mesContratacion: {$month: ["$fechaEntrada"]},
            horasTrabajadas: 1,
            departamento: "$empleado.nombre",
            presupuesto: "$empleado.presupuesto",
            salHora: {$arrayElemAt: ["$empleado.sueldoHora", 0]},
        }
    },{
        $set: {
            totalFacturado: {$multiply: ["$horasTrabajadas", "$salHora"]},
        }
    },{
        $sort: {
            totalFacturado: -1
        }
    }
]).pretty()