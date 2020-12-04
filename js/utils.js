let tabla = document.getElementById("data-table");

let datos = `{
    "productos": [
        {
            "Tipo": "Escritorio",
            "Tarjeta Grafica": "NVIDIA GeForce RTX 3090",
            "Rendimiento": 100.00,
            "Arquitectura": "Ampere",
            "Año de lanzamiento": 2020,
            "Consumo de energia": "350 W"
        },
        {
            "Tipo": "Escritorio",
            "Tarjeta Grafica": "AMD Radeon RX 6800 XT",
            "Rendimiento": 99.91,
            "Arquitectura": "Navi / RDNA2",
            "Año de lanzamiento": 2020,
            "Consumo de energia": "300 W"
        },
        {
            "Tipo": "Escritorio",
            "Tarjeta Grafica": "NVIDIA GeForce RTX 3080",
            "Rendimiento": 94.47,
            "Arquitectura": "Ampere",
            "Año de lanzamiento": 2020,
            "Consumo de energia": "320 W"
        },
        {
            "Tipo": "Escritorio",
            "Tarjeta Grafica": "NVIDIA GeForce RTX 2080 Ti",
            "Rendimiento": 86.21,
            "Arquitectura": "Turing",
            "Año de lanzamiento": 2018,
            "Consumo de energia": "250 W"
        },
        {
            "Tipo": "Escritorio",
            "Tarjeta Grafica": "NVIDIA GeForce RTX 3070",
            "Rendimiento": 85.46,
            "Arquitectura": "Ampere",
            "Año de lanzamiento": 2020,
            "Consumo de energia": "220 W"
        },
        {
            "Tipo": "Escritorio",
            "Tarjeta Grafica": "AMD Radeon RX 6800",
            "Rendimiento": 85.41,
            "Arquitectura": "Navi / RDNA2",
            "Año de lanzamiento": 2020,
            "Consumo de energia": "250 W"
        },
        {
            "Tipo": "Estaciones de trabajo",
            "Tarjeta Grafica": "NVIDIA Quadro RTX 8000",
            "Rendimiento": 81.77,
            "Arquitectura": "Turing",
            "Año de lanzamiento": 2018,
            "Consumo de energia": "260 W"
        },
        {
            "Tipo": "Estaciones de trabajo",
            "Tarjeta Grafica": "NVIDIA Quadro RTX 6000",
            "Rendimiento": 80.04,
            "Arquitectura": "Turing",
            "Año de lanzamiento": 2018,
            "Consumo de energia": "260 W"
        },
        {
            "Tipo": "Escritorio",
            "Tarjeta Grafica": "NVIDIA GeForce GTX 1080 SLI (móvel)",
            "Rendimiento": 77.81,
            "Arquitectura": "Pascal",
            "Año de lanzamiento": 2016,
            "Consumo de energia": "-"
        },
        {
            "Tipo": "Escritorio",
            "Tarjeta Grafica": "NVIDIA GeForce RTX 2080 Super",
            "Rendimiento": 77.59,
            "Arquitectura": "Turing",
            "Año de lanzamiento": 2019,
            "Consumo de energia": "250 W"
        },
        {
            "Tipo": "Escritorio",
            "Tarjeta Grafica": "NVIDIA TITAN RTX",
            "Rendimiento": 75.32,
            "Arquitectura": "Turing",
            "Año de lanzamiento": 2018,
            "Consumo de energia": "280 W"
        },
        {
            "Tipo": "Escritorio",
            "Tarjeta Grafica": "NVIDIA GeForce RTX 2080",
            "Rendimiento": 74.14,
            "Arquitectura": "Turing",
            "Año de lanzamiento": 2018,
            "Consumo de energia": "215 W"
        },
        {
            "Tipo": "Escritorio",
            "Tarjeta Grafica": "NVIDIA GeForce RTX 2070 Super",
            "Rendimiento": 72.37,
            "Arquitectura": "Turing",
            "Año de lanzamiento": 2019,
            "Consumo de energia": "215 W"
        },
        {
            "Tipo": "Escritorio",
            "Tarjeta Grafica": "NVIDIA GeForce GTX 1080 Ti",
            "Rendimiento": 70.51,
            "Arquitectura": "Pascal",
            "Año de lanzamiento": 2017,
            "Consumo de energia": "250 W"
        },
        {
            "Tipo": "Escritorio",
            "Tarjeta Grafica": "NVIDIA GeForce GTX 1070 SLI",
            "Rendimiento": 70.51,
            "Arquitectura": "Pascal",
            "Año de lanzamiento": 2016,
            "Consumo de energia": "300 W"
        },
        {
            "Tipo": "Estaciones de trabajo",
            "Tarjeta Grafica": "AMD Radeon Pro VII",
            "Rendimiento": 68.81,
            "Arquitectura": "GCN 5.1",
            "Año de lanzamiento": 2020,
            "Consumo de energia": "250 W"
        },
        {
            "Tipo": "Para los portatiles",
            "Tarjeta Grafica": "NVIDIA GeForce GTX 1070 SLI (móvel)",
            "Rendimiento": 68.40,
            "Arquitectura": "Pascal",
            "Año de lanzamiento": 2016,
            "Consumo de energia": "−"
        },
        {
            "Tipo": "Escritorio",
            "Tarjeta Grafica": "NVIDIA TITAN V",
            "Rendimiento": 68.40,
            "Arquitectura": "Volta",
            "Año de lanzamiento": 2017,
            "Consumo de energia": "250 W"
        },
        {
            "Tipo": "Escritorio",
            "Tarjeta Grafica": "AMD Radeon VII",
            "Rendimiento": 68.02,
            "Arquitectura": "Vega",
            "Año de lanzamiento": 2019,
            "Consumo de energia": "295 W"
        },
        {
            "Tipo": "Para los portatiles",
            "Tarjeta Grafica": "NVIDIA TITAN V CEO Edition",
            "Rendimiento": 67.85,
            "Arquitectura": "Volta",
            "Año de lanzamiento": 2018,
            "Consumo de energia": "250 W"
        }
    ]
}`

let datosProductos = JSON.parse(datos);

let componentesProductos = Object.keys(dataParseada.productos[0]);