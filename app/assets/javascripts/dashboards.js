$( document ).ready(function() {
    console.log( "ready!" );    


		//create Tabulator on DOM element with id "example-table"
		$("#example-table").tabulator({
		    height: 500, // set height of table, this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
		    layout: "fitColumns", //fit columns to width of table (optional)
		    groupBy: "concept",
		    columns:[ //Define Table Columns
		    		{title:"Actividad", field:"activity", width:300 },
		    		{title:"Concepto", field:"concept", visible:false },
		        {title:"Proveedor", field:"provider" },
		        {title:"Fecha", field:"last_done_dt_tm", sorter:"date", align:"center" },
		        {title:"Resultado", field:"result" },		        
		        {title:"Sig. fecha", field:"next_due_dt_tm", sorter:"date", align:"center" },		       
		        {title:"Periodicidad", field:"period" },
		        {title:"Programa", field:"program"},
		        {title:"Cost", field:"cost" },
		        {title:"Observaciones", field:"notes" }
		    ],
		    rowClick:function(e, row){ //trigger an alert message when the row is clicked
		        //alert( "Row " + row.getData().id + " Clicked!!!!");
		        console.log( row.getData() );
		    },
		});

		//define some sample data
		var tabledata = [		
{ id: 282, activity: 'Limpieza General en areas comunes, paredes, herreria, puertas, ventanas, señalamientos y avisos', concept: 'Limpieza General', provider: 'Estación', last_done_dt_tm: '2017-11-26 22:54:15 UTC', result: 'Pendiente', notes: '', next_due_dt_tm: '2017-12-12 22:54:15 UTC', cost: '$3300.0.00 MXN', program: '2016', period: 'Diaria' }, 
{ id: 283, activity: 'Limpieza de sanitarios, paredes, muebles de baño, espejos y pisos Limpieza General en oficinas, revisión de funcionamiento de sanitarios', concept: 'Limpieza General', provider: 'Estación', last_done_dt_tm: '2017-10-03 22:54:15 UTC', result: '', notes: '', next_due_dt_tm: '2017-12-29 22:54:15 UTC', cost: '$1200.0.00 MXN', program: '2015', period: 'Diaria' }, 
{ id: 284, activity: 'Limpieza de dispensarios parte externa, limpieza de pistolas y mangueras', concept: 'Limpieza General', provider: 'Estación', last_done_dt_tm: '2017-11-07 22:54:15 UTC', result: 'Satisfactorio', notes: '', next_due_dt_tm: '2017-11-29 22:54:15 UTC', cost: '$3400.0.00 MXN', program: '2016', period: 'Diaria' }, 
{ id: 285, activity: 'Limpieza en dispensarios, areas de despacho, zona de tanques, rejillas y registros red aguas grasosas y trampa de grasas', concept: 'Limpieza General', provider: 'Estación (en revisión)', last_done_dt_tm: '2017-10-22 22:54:15 UTC', result: 'Pendiente', notes: '', next_due_dt_tm: '2017-12-16 22:54:15 UTC', cost: '$4500.0.00 MXN', program: '2017', period: 'SE ALTERNARIA 2 MESES LA ESTACION Y EL TERCER MES EL TERCERO 30 días' }, 
{ id: 286, activity: 'Limpieza ecologica, en dispensarios, areas de despacho, zona de tanques, red de drenajes y trampa de grasas', concept: 'Limpieza General', provider: 'Mantenimiento (tercero)', last_done_dt_tm: '2017-09-29 22:54:15 UTC', result: '', notes: '', next_due_dt_tm: '2017-12-08 22:54:15 UTC', cost: '$1100.0.00 MXN', program: '2017', period: '30 días' }, 
{ id: 287, activity: 'Revisión de trampa de combustibles, libre de hidrocarburos', concept: 'Limpieza General', provider: 'Estación', last_done_dt_tm: '2017-11-12 22:54:15 UTC', result: 'Pendiente', notes: '', next_due_dt_tm: '2017-12-16 22:54:15 UTC', cost: '$2500.0.00 MXN', program: '2016', period: 'Diaria' }, 
{ id: 288, activity: 'Revisión Diaria de red de drenajes, libre de agua estancada, registros limpios sin residuos.', concept: 'Limpieza General', provider: 'Estación', last_done_dt_tm: '2017-12-13 22:54:15 UTC', result: '', notes: '', next_due_dt_tm: '2017-12-15 22:54:15 UTC', cost: '$3400.0.00 MXN', program: '2017', period: 'Diaria' }, 
{ id: 289, activity: 'Mantenimiento preventivo a dispensarios interior de dispensarios (limpieza interior, revisión de sensores en puerta, bitacora electronica)', concept: 'Dispensarios', provider: 'Mantenimiento (tercero)', last_done_dt_tm: '2017-10-22 22:54:15 UTC', result: 'Satisfactorio', notes: '', next_due_dt_tm: '2018-01-21 22:54:15 UTC', cost: '$3400.0.00 MXN', program: '2015', period: '6 meses' }, 
{ id: 290, activity: 'Revisión de contenedores limpios y libres de fluidos', concept: 'Dispensarios', provider: 'Estación', last_done_dt_tm: '2017-12-01 22:54:15 UTC', result: '', notes: '', next_due_dt_tm: '2018-03-09 22:54:15 UTC', cost: '$3300.0.00 MXN', program: '2015', period: 'Diaria' }, 
{ id: 291, activity: 'Revisión de Valvula Shut-off, se realiza prueba de corte', concept: 'Dispensarios', provider: 'Estación', last_done_dt_tm: '2017-12-11 22:54:15 UTC', result: '', notes: '', next_due_dt_tm: '2018-02-17 22:54:15 UTC', cost: '$2100.0.00 MXN', program: '2015', period: '30 días' }, 
{ id: 292, activity: 'Revisión de valvulas de Corte rapido en Mangueras, sin escurrimientos', concept: 'Dispensarios', provider: 'Estación', last_done_dt_tm: '2017-12-13 22:54:15 UTC', result: 'No Satisfactorio', notes: '', next_due_dt_tm: '2018-01-12 22:54:15 UTC', cost: '$2200.0.00 MXN', program: '2015', period: 'Diaria' }, 
{ id: 293, activity: 'Revisión de Pistolas de despacho, sin escurrimientos, gatillo completo, pico sin movimiento', concept: 'Dispensarios', provider: 'Estación', last_done_dt_tm: '2017-11-09 22:54:15 UTC', result: 'No Satisfactorio', notes: '', next_due_dt_tm: '2017-11-15 22:54:15 UTC', cost: '$2100.0.00 MXN', program: '2015', period: 'Diaria' }, 
{ id: 294, activity: 'Revisión de Mangueras largas y mangueras cortas, sin escurrimientos, revestimiento sin desgaste, cortes o puntos planos, se baja a piso y se observa el display (no debe correr) con esto verificamos que no este dañado el conducto de recuperación de vapores y se toma tiempo de corte', concept: 'Dispensarios', provider: 'Estación', last_done_dt_tm: '2017-10-26 22:54:15 UTC', result: 'Satisfactorio', notes: '', next_due_dt_tm: '2017-12-12 22:54:15 UTC', cost: '$1300.0.00 MXN', program: '2015', period: 'Diaria' }, 
{ id: 295, activity: 'Revisión y cambio de filtros cada vez que sea necesario', concept: 'Dispensarios', provider: 'Estación', last_done_dt_tm: '2017-12-11 22:54:15 UTC', result: 'Satisfactorio', notes: '', next_due_dt_tm: '2018-01-02 22:54:15 UTC', cost: '$2100.0.00 MXN', program: '2017', period: 'Diaria' }, 
{ id: 296, activity: 'Supervisión para no realizar sobrellenado durante el despacho', concept: 'Dispensarios', provider: 'Estación', last_done_dt_tm: '2017-11-12 22:54:15 UTC', result: 'No Satisfactorio', notes: '', next_due_dt_tm: '2018-01-16 22:54:15 UTC', cost: '$5100.0.00 MXN', program: '2016', period: 'Diaria' }, 
{ id: 297, activity: 'Pruebas de hermeticidad a contenedores (Hidrostaticas)', concept: 'Dispensarios', provider: 'Mantenimiento (tercero)', last_done_dt_tm: '2017-09-16 22:54:15 UTC', result: 'No Satisfactorio', notes: '', next_due_dt_tm: '2017-11-22 22:54:15 UTC', cost: '$2400.0.00 MXN', program: '2016', period: '30 días' }, 
{ id: 298, activity: 'Revisión visual de conexiones, sellos, medidores, valvulas etc, buscando derrames o escurrimientos', concept: 'Dispensarios', provider: 'Estación', last_done_dt_tm: '2017-12-04 22:54:15 UTC', result: '', notes: '', next_due_dt_tm: '2018-02-09 22:54:15 UTC', cost: '$5100.0.00 MXN', program: '2016', period: 'Diaria' }, 
{ id: 299, activity: 'Revisión de anclaje de dispensarios', concept: 'Dispensarios', provider: 'Estación', last_done_dt_tm: '2017-10-08 22:54:15 UTC', result: 'Satisfactorio', notes: '', next_due_dt_tm: '2017-10-09 22:54:15 UTC', cost: '$3300.0.00 MXN', program: '2016', period: '' }, 
{ id: 300, activity: 'Revisión Diaria de sensores del sistema de monitoreo para detección de fugas en contenedores de dispensarios (posición en el fondo del contenedor)', concept: 'Dispensarios', provider: 'Estación', last_done_dt_tm: '2017-11-15 22:54:15 UTC', result: 'No Satisfactorio', notes: '', next_due_dt_tm: '2018-02-11 22:54:15 UTC', cost: '$5400.0.00 MXN', program: '2015', period: 'Diaria' }, 
{ id: 301, activity: 'Calibración de medidores por parte de empresa de calibración (cada que sea necesario)', concept: 'Dispensarios', provider: 'MANTENIMIENTO TERCERO', last_done_dt_tm: '2017-12-06 22:54:15 UTC', result: '', notes: '', next_due_dt_tm: '2018-03-01 22:54:15 UTC', cost: '$2300.0.00 MXN', program: '2016', period: '30 días' }, 
{ id: 302, activity: 'Revisión de despacho en mangueras (jarreos) por lo menos 1 jarra en cada velocidad por manguera, prueba de batería', concept: 'Dispensarios', provider: 'Estación', last_done_dt_tm: '2017-11-23 22:54:15 UTC', result: 'Pendiente', notes: '', next_due_dt_tm: '2018-01-07 22:54:15 UTC', cost: '$2300.0.00 MXN', program: '2015', period: '8 días' }, 
{ id: 303, activity: 'Revisión de dispensarios de agua y aire (anclaje, mangueras y llaves en buenas condiciones)', concept: 'Dispensarios', provider: 'Estación', last_done_dt_tm: '2017-11-17 22:54:15 UTC', result: 'No Satisfactorio', notes: '', next_due_dt_tm: '2017-12-18 22:54:15 UTC', cost: '$1200.0.00 MXN', program: '2015', period: 'Diaria' }, 
{ id: 304, activity: 'Revisión de anclaje o basamento', concept: 'Dispensarios', provider: 'Estación', last_done_dt_tm: '2017-11-29 22:54:15 UTC', result: 'No Satisfactorio', notes: '', next_due_dt_tm: '2017-12-19 22:54:15 UTC', cost: '$2200.0.00 MXN', program: '2017', period: 'Diaria' }, 
{ id: 305, activity: 'Revisón de los elementos protectores de Módulos de despacho para abastecimiento', concept: 'Dispensarios', provider: 'Estación', last_done_dt_tm: '2017-10-14 22:54:15 UTC', result: 'No Satisfactorio', notes: '', next_due_dt_tm: '2017-10-20 22:54:15 UTC', cost: '$5200.0.00 MXN', program: '2017', period: 'Diaria' }, 
{ id: 306, activity: 'Calibración de Dispensarios', concept: 'Dispensarios', provider: 'Estación', last_done_dt_tm: '2017-09-29 22:54:15 UTC', result: 'Pendiente', notes: '', next_due_dt_tm: '2017-10-27 22:54:15 UTC', cost: '$5400.0.00 MXN', program: '2017', period: '6 meses' }, 
{ id: 307, activity: 'Revisión visual de mangueras de descarga y recuperación de vapores', concept: 'Tanques', provider: 'Estación', last_done_dt_tm: '2017-09-28 22:54:15 UTC', result: 'No Satisfactorio', notes: '', next_due_dt_tm: '2017-11-06 22:54:15 UTC', cost: '$1100.0.00 MXN', program: '2017', period: 'Diaria' }, 
{ id: 308, activity: 'Revisión de cables de tierra fisica y Caimanes', concept: 'Tanques', provider: 'Estación', last_done_dt_tm: '2017-10-27 22:54:15 UTC', result: 'No Satisfactorio', notes: '', next_due_dt_tm: '2018-01-17 22:54:15 UTC', cost: '$1300.0.00 MXN', program: '2017', period: 'Diaria' }, 
{ id: 309, activity: 'Revisión de codos de descarga y recuperación de vapores', concept: 'Tanques', provider: 'Estación', last_done_dt_tm: '2017-09-10 22:54:15 UTC', result: 'No Satisfactorio', notes: '', next_due_dt_tm: '2017-09-30 22:54:15 UTC', cost: '$3400.0.00 MXN', program: '2016', period: 'Diaria' }, 
{ id: 310, activity: 'Revisión de tapas y valvulas en boquillas de R.V. y boquillas de descarga', concept: 'Tanques', provider: 'Estación', last_done_dt_tm: '2017-10-25 22:54:15 UTC', result: '', notes: '', next_due_dt_tm: '2017-12-16 22:54:15 UTC', cost: '$3400.0.00 MXN', program: '2015', period: 'Diaria' }, 
{ id: 311, activity: 'Revisión de contenedores limpios y libres de fluidos', concept: 'Tanques', provider: 'Estación', last_done_dt_tm: '2017-09-12 22:54:15 UTC', result: 'No Satisfactorio', notes: '', next_due_dt_tm: '2017-11-09 22:54:15 UTC', cost: '$5100.0.00 MXN', program: '2016', period: 'Diaria' }, 
{ id: 312, activity: 'Valvula de sobrellenado (Revisión visual)', concept: 'Tanques', provider: 'Estación', last_done_dt_tm: '2017-12-01 22:54:15 UTC', result: 'Satisfactorio', notes: '', next_due_dt_tm: '2018-03-07 22:54:15 UTC', cost: '$3100.0.00 MXN', program: '2015', period: 'Diaria' }, 
{ id: 313, activity: 'Mantenimiento preventivo a tanques, revisión de tapas, empaques, conectores flexibles mecanicos, electricos, botas, conexiones de tierras físicas, valvulas de sobrellenado', concept: 'Tanques', provider: 'Mantenimiento (tercero)', last_done_dt_tm: '2017-10-30 22:54:15 UTC', result: '', notes: '', next_due_dt_tm: '2018-01-01 22:54:15 UTC', cost: '$2200.0.00 MXN', program: '2015', period: '6 meses' }, 
{ id: 314, activity: 'Reporte impreso para verificar nivel de producto y contenido de agua', concept: 'Tanques', provider: 'Estación', last_done_dt_tm: '2017-10-26 22:54:15 UTC', result: 'No Satisfactorio', notes: '', next_due_dt_tm: '2018-01-17 22:54:15 UTC', cost: '$4300.0.00 MXN', program: '2015', period: ' 30 días' }, 
{ id: 315, activity: 'Alarma de recuperación de vapores (Revisión visual)', concept: 'Tanques', provider: 'Estación', last_done_dt_tm: '2017-10-12 22:54:15 UTC', result: 'No Satisfactorio', notes: '', next_due_dt_tm: '2017-11-12 22:54:15 UTC', cost: '$1400.0.00 MXN', program: '2017', period: 'Diaria' }, 
{ id: 316, activity: 'Venteos funcionando (Escuchar su funcionamiento)', concept: 'Tanques', provider: 'Estación', last_done_dt_tm: '2017-12-09 22:54:15 UTC', result: 'Pendiente', notes: '', next_due_dt_tm: '2017-12-15 22:54:15 UTC', cost: '$2500.0.00 MXN', program: '2017', period: 'Diaria' }, 
{ id: 317, activity: 'Pruebas de hermeticidad a contenedor de descarga', concept: 'Tanques', provider: 'Mantenimiento (tercero)', last_done_dt_tm: '2017-12-08 22:54:15 UTC', result: 'Pendiente', notes: '', next_due_dt_tm: '2018-02-01 22:54:15 UTC', cost: '$2400.0.00 MXN', program: '2017', period: '30 días' }, 
{ id: 318, activity: 'Pruebas de hermeticidad a contenedor de motobomba', concept: 'Tanques', provider: 'Mantenimiento (tercero)', last_done_dt_tm: '2017-11-03 22:54:15 UTC', result: 'Satisfactorio', notes: '', next_due_dt_tm: '2018-01-18 22:54:15 UTC', cost: '$3400.0.00 MXN', program: '2017', period: '30 días' }, 
{ id: 319, activity: 'Revisión Diaria del sistema de monitoreo para detección de fugas (verificar consola sin alarmas)', concept: 'Tanques', provider: 'Estación', last_done_dt_tm: '2017-10-02 22:54:15 UTC', result: 'Pendiente', notes: '', next_due_dt_tm: '2017-10-13 22:54:15 UTC', cost: '$5100.0.00 MXN', program: '2015', period: 'Diaria' }, 
{ id: 320, activity: 'Limpieza interior de tanques', concept: 'Tanques', provider: 'Mantenimiento (tercero)', last_done_dt_tm: '2017-11-13 22:54:15 UTC', result: 'Satisfactorio', notes: '', next_due_dt_tm: '2017-12-03 22:54:15 UTC', cost: '$1100.0.00 MXN', program: '2015', period: '2 años' }, 
{ id: 321, activity: 'Revisón de motobombas', concept: 'Tanques', provider: 'Mantenimiento (tercero)', last_done_dt_tm: '2017-09-07 22:54:15 UTC', result: 'Satisfactorio', notes: '', next_due_dt_tm: '2017-11-30 22:54:15 UTC', cost: '$4200.0.00 MXN', program: '2016', period: 'Conforme a las Especificaciones del Fabricante' }, 
{ id: 322, activity: 'Revisión del Sistema de Control de Inventarios', concept: 'Tanques', provider: 'Estación', last_done_dt_tm: '2017-09-09 22:54:15 UTC', result: '', notes: '', next_due_dt_tm: '2017-11-28 22:54:15 UTC', cost: '$1400.0.00 MXN', program: '2016', period: '30 días' }, 
{ id: 323, activity: 'Revisión de Registros, tapas para el cambio de dirección de tuberías y Contenedores de Interconexión', concept: 'Tanques', provider: 'Estación', last_done_dt_tm: '2017-09-07 22:54:15 UTC', result: '', notes: '', next_due_dt_tm: '2017-11-25 22:54:15 UTC', cost: '$1300.0.00 MXN', program: '2015', period: '30 días' }, 
{ id: 324, activity: 'Revisión de conectores flexibles en contenedores', concept: 'Tanques', provider: 'Estación', last_done_dt_tm: '2017-10-04 22:54:15 UTC', result: 'Pendiente', notes: '', next_due_dt_tm: '2017-12-25 22:54:15 UTC', cost: '$4300.0.00 MXN', program: '2017', period: '30 días' }, 
{ id: 325, activity: 'Revision de valvulas de venteo o presión vacío', concept: 'Tanques', provider: 'Mantenimiento (tercero)', last_done_dt_tm: '2017-11-25 22:54:16 UTC', result: '', notes: '', next_due_dt_tm: '2018-01-18 22:54:16 UTC', cost: '$3500.0.00 MXN', program: '2015', period: 'Conforme a las Especificaciones del Fabricante' }, 
{ id: 326, activity: 'Revision de sellos mecanicos', concept: 'Tanques', provider: 'Estación', last_done_dt_tm: '2017-10-05 22:54:16 UTC', result: 'No Satisfactorio', notes: '', next_due_dt_tm: '2017-10-25 22:54:16 UTC', cost: '$2500.0.00 MXN', program: '2015', period: '30 días' }, 
{ id: 327, activity: 'Analisis de aguas residuales', concept: 'Pozos de Observación y Descarga de Aguas', provider: 'Tercero', last_done_dt_tm: '2017-12-01 22:54:16 UTC', result: '', notes: '', next_due_dt_tm: '2018-03-10 22:54:16 UTC', cost: '$1400.0.00 MXN', program: '2017', period: '12 meses' }, 
{ id: 328, activity: 'Recolección de residuos peligrosos botes de aceites y aditivos', concept: 'Pozos de Observación y Descarga de Aguas', provider: 'Tercero (PENDIENTE)', last_done_dt_tm: '2017-12-09 22:54:16 UTC', result: 'Pendiente', notes: '', next_due_dt_tm: '2018-02-01 22:54:16 UTC', cost: '$4300.0.00 MXN', program: '2015', period: '30 días' }, 
{ id: 329, activity: 'Recolección de residuos peligrosos, lodos de trampa (Ligado a la limpieza ecologica)', concept: 'Pozos de Observación y Descarga de Aguas', provider: 'Tercero', last_done_dt_tm: '2017-10-14 22:54:16 UTC', result: 'Satisfactorio', notes: '', next_due_dt_tm: '2017-12-17 22:54:16 UTC', cost: '$5300.0.00 MXN', program: '2016', period: '30 días' }, 
{ id: 330, activity: 'ANEXO 4 (Inciso 3) Se debe realizar el monitoreo del suelo, subsuelo y mantos acuíferos a través de los pozos de observación y monitoreo', concept: 'Pozos de Observación y Descarga de Aguas', provider: 'Jesús Valdéz', last_done_dt_tm: '2017-12-05 22:54:16 UTC', result: 'No Satisfactorio', notes: '', next_due_dt_tm: '2018-01-10 22:54:16 UTC', cost: '$2100.0.00 MXN', program: '2016', period: '12 meses' }, 
{ id: 331, activity: 'Pruebas de Hermeticidad en Tanques y Lineas de productos, con equipo móvil', concept: 'Pruebas de Hermeticidad y SRV, Sistema de Monitoreo Electrónico, Cumplimiento NOM-016-CRE-2016,', provider: 'Tercero', last_done_dt_tm: '2017-12-14 22:54:16 UTC', result: '', notes: '', next_due_dt_tm: '2018-01-02 22:54:16 UTC', cost: '$1100.0.00 MXN', program: '2016', period: '12 meses' }, 
{ id: 332, activity: 'Revisión y mantenimiento preventivo del sistema de recuperación de vapores', concept: 'Pruebas de Hermeticidad y SRV, Sistema de Monitoreo Electrónico, Cumplimiento NOM-016-CRE-2016,', provider: 'Tercero', last_done_dt_tm: '2017-10-08 22:54:16 UTC', result: 'No Satisfactorio', notes: '', next_due_dt_tm: '2017-10-27 22:54:16 UTC', cost: '$2200.0.00 MXN', program: '2017', period: '3 meses' }, 
{ id: 333, activity: 'Pruebas al Sistema de recuperación de vapores por laboratorio autorizado', concept: 'Pruebas de Hermeticidad y SRV, Sistema de Monitoreo Electrónico, Cumplimiento NOM-016-CRE-2016,', provider: 'Tercero (en revisión)', last_done_dt_tm: '2017-10-06 22:54:16 UTC', result: '', notes: '', next_due_dt_tm: '2017-10-17 22:54:16 UTC', cost: '$4200.0.00 MXN', program: '2016', period: '12 meses' }, 
{ id: 334, activity: 'Revisión y mantenimiento preventivo al sistema de medición electronica y monitoreo en tanques, dispensarios y pozos de monitoreo.', concept: 'Pruebas de Hermeticidad y SRV, Sistema de Monitoreo Electrónico, Cumplimiento NOM-016-CRE-2016,', provider: 'Tercero', last_done_dt_tm: '2017-11-08 22:54:16 UTC', result: 'Satisfactorio', notes: '', next_due_dt_tm: '2018-02-04 22:54:16 UTC', cost: '$2300.0.00 MXN', program: '2016', period: '4 meses' }, 
{ id: 335, activity: 'Limpieza y mantenimiento a faldon perimetral', concept: 'Edificio, Imagen y Servicio', provider: 'Tercero', last_done_dt_tm: '2017-09-23 22:54:16 UTC', result: '', notes: '', next_due_dt_tm: '2017-10-19 22:54:16 UTC', cost: '$2100.0.00 MXN', program: '2016', period: '6 meses' }, 
{ id: 336, activity: 'Mantenimiento preventivo anuncio independiente, Limpieza', concept: 'Edificio, Imagen y Servicio', provider: 'Tercero', last_done_dt_tm: '2017-09-24 22:54:16 UTC', result: 'Satisfactorio', notes: '', next_due_dt_tm: '2017-11-05 22:54:16 UTC', cost: '$3300.0.00 MXN', program: '2017', period: '6 meses' }, 
{ id: 337, activity: 'Mantenimiento a estructura de anuncio independiente, Aplicación de pintura', concept: 'Edificio, Imagen y Servicio', provider: 'Tercero', last_done_dt_tm: '2017-12-08 22:54:16 UTC', result: 'Pendiente', notes: '', next_due_dt_tm: '2018-01-21 22:54:16 UTC', cost: '$2500.0.00 MXN', program: '2015', period: '12 meses' }, 
{ id: 338, activity: 'Pintura en areas de despacho, señalización horizontal , protecciones, columnas,', concept: 'Edificio, Imagen y Servicio', provider: 'Tercero', last_done_dt_tm: '2017-10-26 22:54:16 UTC', result: '', notes: '', next_due_dt_tm: '2017-11-23 22:54:16 UTC', cost: '$4500.0.00 MXN', program: '2015', period: '6 meses' }, 
{ id: 339, activity: 'Mantenimiento de señalización vertical de acuerdo a NOM-005-ASEA-2016, revisión y mantenimiento cada 6 meses', concept: 'Edificio, Imagen y Servicio', provider: 'Tercero', last_done_dt_tm: '2017-10-20 22:54:16 UTC', result: '', notes: '', next_due_dt_tm: '2018-01-27 22:54:16 UTC', cost: '$3400.0.00 MXN', program: '2015', period: '6 meses' }, 
{ id: 340, activity: 'Mantenimiento y aplicación de pintura en muros exteriores en edificio', concept: 'Edificio, Imagen y Servicio', provider: 'Tercero', last_done_dt_tm: '2017-09-19 22:54:16 UTC', result: 'Satisfactorio', notes: '', next_due_dt_tm: '2017-12-19 22:54:16 UTC', cost: '$3500.0.00 MXN', program: '2017', period: '12 meses' }, 
{ id: 341, activity: 'Mantenimiento a impermeabilización de azotea en edificio', concept: 'Edificio, Imagen y Servicio', provider: 'Tercero', last_done_dt_tm: '2017-09-16 22:54:16 UTC', result: 'Pendiente', notes: '', next_due_dt_tm: '2017-10-29 22:54:16 UTC', cost: '$4100.0.00 MXN', program: '2017', period: '12 meses' }, 
{ id: 342, activity: 'Limpieza de bajadas de aguas pluviales en edificio y techumbres', concept: 'Edificio, Imagen y Servicio', provider: 'Tercero', last_done_dt_tm: '2017-10-15 22:54:16 UTC', result: 'No Satisfactorio', notes: '', next_due_dt_tm: '2017-11-26 22:54:16 UTC', cost: '$2500.0.00 MXN', program: '2015', period: '2 meses' }, 
{ id: 343, activity: 'Limpieza y revisión de cisterna', concept: 'Edificio, Imagen y Servicio', provider: 'Tercero', last_done_dt_tm: '2017-12-12 22:54:16 UTC', result: 'Pendiente', notes: '', next_due_dt_tm: '2018-01-24 22:54:16 UTC', cost: '$3300.0.00 MXN', program: '2015', period: '12 meses' }, 
{ id: 344, activity: 'Poda de areas verdes, Limpieza', concept: 'Edificio, Imagen y Servicio', provider: 'Tercero', last_done_dt_tm: '2017-11-07 22:54:16 UTC', result: '', notes: '', next_due_dt_tm: '2018-01-27 22:54:16 UTC', cost: '$3100.0.00 MXN', program: '2015', period: '3 meses' }, 
{ id: 345, activity: 'Revisión de fisuras o fracturas en zonas de carga y descarga', concept: 'Edificio, Imagen y Servicio', provider: 'Estación', last_done_dt_tm: '2017-11-13 22:54:16 UTC', result: 'No Satisfactorio', notes: '', next_due_dt_tm: '2018-02-15 22:54:16 UTC', cost: '$2500.0.00 MXN', program: '2016', period: '6 meses' }, 
{ id: 346, activity: 'Compresor revisión de niveles y purgado', concept: 'Cuarto de Máquinas', provider: 'Estación', last_done_dt_tm: '2017-10-24 22:54:16 UTC', result: 'Pendiente', notes: '', next_due_dt_tm: '2017-11-22 22:54:16 UTC', cost: '$4300.0.00 MXN', program: '2016', period: 'Diario' }, 
{ id: 347, activity: 'Planta de emergencia, revisión de niveles', concept: 'Cuarto de Máquinas', provider: 'Estación', last_done_dt_tm: '2017-12-01 22:54:16 UTC', result: 'Satisfactorio', notes: '', next_due_dt_tm: '2018-03-09 22:54:16 UTC', cost: '$4500.0.00 MXN', program: '2016', period: 'Diario' }, 
{ id: 348, activity: 'Mantenimiento preventivo a compresor', concept: 'Cuarto de Máquinas', provider: 'Tercero', last_done_dt_tm: '2017-09-16 22:54:16 UTC', result: 'No Satisfactorio', notes: '', next_due_dt_tm: '2017-10-02 22:54:16 UTC', cost: '$3100.0.00 MXN', program: '2017', period: '4 meses' }, 
{ id: 349, activity: 'Mantenimiento preventivo a planta de emergencia', concept: 'Cuarto de Máquinas', provider: 'Tercero', last_done_dt_tm: '2017-10-30 22:54:16 UTC', result: 'Pendiente', notes: '', next_due_dt_tm: '2018-01-27 22:54:16 UTC', cost: '$1500.0.00 MXN', program: '2016', period: '6 meses o 200 hrs' }, 
{ id: 350, activity: 'Mantenimiento preventivo a bomba hidraulica, revisión de automatico, y presurizador', concept: 'Cuarto de Máquinas', provider: 'Tercero', last_done_dt_tm: '2017-10-06 22:54:16 UTC', result: 'Satisfactorio', notes: '', next_due_dt_tm: '2017-12-09 22:54:16 UTC', cost: '$5300.0.00 MXN', program: '2015', period: '6 meses' }, 
{ id: 351, activity: 'Revision de equipo hidroneumático', concept: 'Cuarto de Máquinas', provider: 'Tercero', last_done_dt_tm: '2017-11-20 22:54:16 UTC', result: 'Pendiente', notes: '', next_due_dt_tm: '2018-01-30 22:54:16 UTC', cost: '$4100.0.00 MXN', program: '2017', period: 'Conforme a las Especificaciones del Fabricante' }, 
{ id: 352, activity: 'Revisión de condiciones de extintores de polvo quimico', concept: 'Extintores', provider: 'Estación', last_done_dt_tm: '2017-11-30 22:54:16 UTC', result: 'Pendiente', notes: '', next_due_dt_tm: '2017-12-04 22:54:16 UTC', cost: '$4100.0.00 MXN', program: '2017', period: '' }, 
{ id: 353, activity: 'Recarga y mantenimiento preventivo de extintores de polvo quimico', concept: 'Extintores', provider: 'Tercero', last_done_dt_tm: '2017-09-09 22:54:16 UTC', result: 'Satisfactorio', notes: '', next_due_dt_tm: '2017-09-30 22:54:16 UTC', cost: '$3200.0.00 MXN', program: '2015', period: '12 meses' }, 
{ id: 354, activity: 'Revisión y mantenimiento preventivo a instalación electrica (interruptores, contactos, cajas de conexión, tableros , sellos EYS, )', concept: 'Sistema Eléctrico General', provider: 'Tercero', last_done_dt_tm: '2017-10-25 22:54:16 UTC', result: 'Pendiente', notes: '', next_due_dt_tm: '2018-01-22 22:54:16 UTC', cost: '$5200.0.00 MXN', program: '2015', period: '6 meses' }, 
{ id: 355, activity: 'Mantenimiento preventivo al sistema de tierras y pararrayos', concept: 'Sistema Eléctrico General', provider: 'Tercero', last_done_dt_tm: '2017-09-29 22:54:16 UTC', result: '', notes: '', next_due_dt_tm: '2017-12-13 22:54:16 UTC', cost: '$1100.0.00 MXN', program: '2016', period: '6 meses' }, 
{ id: 356, activity: 'Comprobación de la continuidad electrica en sistema de tierras y pararrayos en base a la NOM-022-STPS-2008', concept: 'Sistema Eléctrico General', provider: 'Tercero', last_done_dt_tm: '2017-11-15 22:54:16 UTC', result: 'Pendiente', notes: '', next_due_dt_tm: '2018-02-20 22:54:16 UTC', cost: '$4200.0.00 MXN', program: '2016', period: '12 meses' }, 
{ id: 357, activity: 'Revisión de paros de emergencia (prueba de funcionamiento)', concept: 'Sistema Eléctrico General', provider: 'Estación', last_done_dt_tm: '2017-11-20 22:54:16 UTC', result: 'Satisfactorio', notes: '', next_due_dt_tm: '2017-12-01 22:54:16 UTC', cost: '$3400.0.00 MXN', program: '2017', period: '30 días' }, 
{ id: 358, activity: 'Capacitación general', concept: 'Protección Civil', provider: '', last_done_dt_tm: '2017-09-28 22:54:16 UTC', result: 'No Satisfactorio', notes: '', next_due_dt_tm: '2017-09-29 22:54:16 UTC', cost: '$5200.0.00 MXN', program: '2016', period: '' }, 
{ id: 359, activity: 'Programación de simulacros', concept: 'Protección Civil', provider: '', last_done_dt_tm: '2017-12-07 22:54:16 UTC', result: 'Pendiente', notes: '', next_due_dt_tm: '2018-01-15 22:54:16 UTC', cost: '$5200.0.00 MXN', program: '2017', period: '' }, 
{ id: 360, activity: 'Iluminación en areas de despacho', concept: 'Protección Civil', provider: 'Tercero', last_done_dt_tm: '2017-09-24 22:54:16 UTC', result: 'Satisfactorio', notes: '', next_due_dt_tm: '2017-10-05 22:54:16 UTC', cost: '$4100.0.00 MXN', program: '2015', period: '6 meses (cada que se requiera)' }, 
{ id: 361, activity: 'Iluminación en edificio administrativo y operativo', concept: 'Protección Civil', provider: 'Tercero', last_done_dt_tm: '2017-09-26 22:54:16 UTC', result: 'Pendiente', notes: '', next_due_dt_tm: '2017-11-24 22:54:16 UTC', cost: '$3200.0.00 MXN', program: '2017', period: '6 meses (cada que se requiera)' }, 
{ id: 362, activity: 'Contactos y apagadores en edificio administrativo y operativo', concept: 'Protección Civil', provider: 'Tercero', last_done_dt_tm: '2017-10-30 22:54:16 UTC', result: 'Pendiente', notes: '', next_due_dt_tm: '2017-11-24 22:54:16 UTC', cost: '$2400.0.00 MXN', program: '2017', period: '6 meses (cada que se requiera)' }, 
{ id: 363, activity: 'Iluminación faldon perimetral', concept: 'Protección Civil', provider: 'Tercero', last_done_dt_tm: '2017-11-01 22:54:16 UTC', result: 'Satisfactorio', notes: '', next_due_dt_tm: '2018-02-03 22:54:16 UTC', cost: '$1400.0.00 MXN', program: '2015', period: '6 meses (cada que se requiera)' }, 
{ id: 364, activity: 'Iluminación MID (Anuncio independiente)', concept: 'Protección Civil', provider: 'Tercero', last_done_dt_tm: '2017-10-03 22:54:16 UTC', result: 'Pendiente', notes: '', next_due_dt_tm: '2017-12-13 22:54:16 UTC', cost: '$4300.0.00 MXN', program: '2017', period: '6 meses (cada que se requiera)' }, 
{ id: 365, activity: 'Iluminación Canopys Dispendsarios', concept: 'Protección Civil', provider: 'Tercero', last_done_dt_tm: '2017-09-23 22:54:16 UTC', result: 'Satisfactorio', notes: '', next_due_dt_tm: '2017-12-23 22:54:16 UTC', cost: '$3300.0.00 MXN', program: '2017', period: '6 meses (cada que se requiera)' }, 
{ id: 366, activity: 'Revisión de Bitacora I Limpiezas Programadas y No Programadas', concept: 'Bitácoras', provider: 'Estación', last_done_dt_tm: '2017-09-09 22:54:16 UTC', result: 'Satisfactorio', notes: '', next_due_dt_tm: '2017-11-13 22:54:16 UTC', cost: '$4300.0.00 MXN', program: '2017', period: '2 meses' }, 
{ id: 367, activity: 'Revisión de Bitacora II Recepción y Descarga de Producto', concept: 'Bitácoras', provider: 'Estación', last_done_dt_tm: '2017-09-14 22:54:16 UTC', result: '', notes: '', next_due_dt_tm: '2017-12-19 22:54:16 UTC', cost: '$1400.0.00 MXN', program: '2015', period: '2 meses' }, 
{ id: 368, activity: 'Revisión de Bitacora III Incidentes e Inspecciones de Mantenimiento', concept: 'Bitácoras', provider: 'Estación', last_done_dt_tm: '2017-10-10 22:54:16 UTC', result: 'Satisfactorio', notes: '', next_due_dt_tm: '2017-11-26 22:54:16 UTC', cost: '$5400.0.00 MXN', program: '2016', period: '2 meses' }, 
{ id: 369, activity: 'Revisión de Bitacora IV Desviciónes en el Balance de Producto', concept: 'Bitácoras', provider: 'Estación', last_done_dt_tm: '2017-10-01 22:54:16 UTC', result: 'No Satisfactorio', notes: '', next_due_dt_tm: '2017-10-31 22:54:16 UTC', cost: '$4400.0.00 MXN', program: '2017', period: '2 meses' }, 
{ id: 370, activity: 'Revisión de Bitacora de Mantenimiento', concept: 'Bitácoras', provider: 'Estación', last_done_dt_tm: '2017-12-06 22:54:16 UTC', result: 'Pendiente', notes: '', next_due_dt_tm: '2018-01-29 22:54:16 UTC', cost: '$2400.0.00 MXN', program: '2017', period: '2 meses' }, 
{ id: 371, activity: 'Revisión de bitacora Incidentes e Inspecciones de mantenimeinto y Pruebas de Hermeticidad', concept: 'Bitácoras', provider: 'Estación', last_done_dt_tm: '2017-12-02 22:54:16 UTC', result: 'No Satisfactorio', notes: '', next_due_dt_tm: '2017-12-04 22:54:16 UTC', cost: '$3300.0.00 MXN', program: '2016', period: '2 meses' }, 
{ id: 372, activity: 'Bitacora especifica para el Sistema de recuperación de vapores (Proveedor)', concept: 'Bitácoras', provider: 'Estación', last_done_dt_tm: '2017-10-13 22:54:16 UTC', result: 'Satisfactorio', notes: '', next_due_dt_tm: '2017-11-18 22:54:16 UTC', cost: '$4400.0.00 MXN', program: '2017', period: '2 meses' }
		];

		//load sample data into the table
		$("#example-table").tabulator("setData", tabledata);
		

});



