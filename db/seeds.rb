# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#User.create!(name:  "Example User",
#             email: "example@railstutorial.org",
#             password:              "foobar",
#             password_confirmation: "foobar",
#             admin: true,
#             activated: true,
#             activated_at: Time.zone.now)

#99.times do |n|
#  name  = Faker::Name.name
#  email = "example-#{n+1}@railstutorial.org"
#  password = "password"
#  User.create!(name:  name,
#               email: email,
#               password:              password,
#               password_confirmation: password,
#               activated: true,
#               activated_at: Time.zone.now)
#end


ex = [["Limpieza General en areas comunes, paredes, herreria, puertas, ventanas, señalamientos y avisos","Estación","Diaria","Limpieza General"],
["Limpieza de sanitarios, paredes, muebles de baño, espejos y pisos Limpieza General en oficinas, revisión de funcionamiento de sanitarios","Estación","Diaria","Limpieza General"],
["Limpieza de dispensarios parte externa, limpieza de pistolas y mangueras","Estación","Diaria","Limpieza General"],
["Limpieza en dispensarios, areas de despacho, zona de tanques, rejillas y registros red aguas grasosas y trampa de grasas","Estación (en revisión)","SE ALTERNARIA 2 MESES LA ESTACION Y EL TERCER MES EL TERCERO 30 días","Limpieza General"],
["Limpieza ecologica, en dispensarios, areas de despacho, zona de tanques, red de drenajes y trampa de grasas","Mantenimiento (tercero)","30 días","Limpieza General"],
["Revisión de trampa de combustibles, libre de hidrocarburos","Estación","Diaria","Limpieza General"],
["Revisión Diaria de red de drenajes, libre de agua estancada, registros limpios sin residuos.","Estación","Diaria","Limpieza General"],
["Mantenimiento preventivo a dispensarios interior de dispensarios (limpieza interior, revisión de sensores en puerta, bitacora electronica)","Mantenimiento (tercero)","6 meses","Dispensarios"],
["Revisión de contenedores limpios y libres de fluidos","Estación","Diaria","Dispensarios"],
["Revisión de Valvula Shut-off, se realiza prueba de corte","Estación","30 días","Dispensarios"],
["Revisión de valvulas de Corte rapido en Mangueras, sin escurrimientos","Estación","Diaria","Dispensarios"],
["Revisión de Pistolas de despacho, sin escurrimientos, gatillo completo, pico sin movimiento","Estación","Diaria","Dispensarios"],
["Revisión de Mangueras largas y mangueras cortas, sin escurrimientos, revestimiento sin desgaste, cortes o puntos planos, se baja a piso y se observa el display (no debe correr) con esto verificamos que no este dañado el conducto de recuperación de vapores y se toma tiempo de corte","Estación","Diaria","Dispensarios"],
["Revisión y cambio de filtros cada vez que sea necesario","Estación","Diaria","Dispensarios"],
["Supervisión para no realizar sobrellenado durante el despacho","Estación","Diaria","Dispensarios"],
["Pruebas de hermeticidad a contenedores (Hidrostaticas)","Mantenimiento (tercero)","30 días","Dispensarios"],
["Revisión visual de conexiones, sellos, medidores, valvulas etc, buscando derrames o escurrimientos","Estación","Diaria","Dispensarios"],
["Revisión de anclaje de dispensarios","Estación","","Dispensarios"],
["Revisión Diaria de sensores del sistema de monitoreo para detección de fugas en contenedores de dispensarios (posición en el fondo del contenedor)","Estación","Diaria","Dispensarios"],
["Calibración de medidores por parte de empresa de calibración (cada que sea necesario)","MANTENIMIENTO TERCERO","30 días","Dispensarios"],
["Revisión de despacho en mangueras (jarreos) por lo menos 1 jarra en cada velocidad por manguera, prueba de batería","Estación","8 días","Dispensarios"],
["Revisión de dispensarios de agua y aire (anclaje, mangueras y llaves en buenas condiciones)","Estación","Diaria","Dispensarios"],
["Revisión de anclaje o basamento","Estación","Diaria","Dispensarios"],
["Revisón de los elementos protectores de Módulos de despacho para abastecimiento","Estación","Diaria","Dispensarios"],
["Calibración de Dispensarios","Estación","6 meses","Dispensarios"],
["Revisión visual de mangueras de descarga y recuperación de vapores","Estación","Diaria","Tanques"],
["Revisión de cables de tierra fisica y Caimanes","Estación","Diaria","Tanques"],
["Revisión de codos de descarga y recuperación de vapores","Estación","Diaria","Tanques"],
["Revisión de tapas y valvulas en boquillas de R.V. y boquillas de descarga","Estación","Diaria","Tanques"],
["Revisión de contenedores limpios y libres de fluidos","Estación","Diaria","Tanques"],
["Valvula de sobrellenado (Revisión visual)","Estación","Diaria","Tanques"],
["Mantenimiento preventivo a tanques, revisión de tapas, empaques, conectores flexibles mecanicos, electricos, botas, conexiones de tierras físicas, valvulas de sobrellenado","Mantenimiento (tercero)","6 meses","Tanques"],
["Reporte impreso para verificar nivel de producto y contenido de agua","Estación"," 30 días","Tanques"],
["Alarma de recuperación de vapores (Revisión visual)","Estación","Diaria","Tanques"],
["Venteos funcionando (Escuchar su funcionamiento)","Estación","Diaria","Tanques"],
["Pruebas de hermeticidad a contenedor de descarga","Mantenimiento (tercero)","30 días","Tanques"],
["Pruebas de hermeticidad a contenedor de motobomba","Mantenimiento (tercero)","30 días","Tanques"],
["Revisión Diaria del sistema de monitoreo para detección de fugas (verificar consola sin alarmas)","Estación","Diaria","Tanques"],
["Limpieza interior de tanques","Mantenimiento (tercero)","2 años","Tanques"],
["Revisón de motobombas","Mantenimiento (tercero)","Conforme a las Especificaciones del Fabricante","Tanques"],
["Revisión del Sistema de Control de Inventarios","Estación","30 días","Tanques"],
["Revisión de Registros, tapas para el cambio de dirección de tuberías y Contenedores de Interconexión","Estación","30 días","Tanques"],
["Revisión de conectores flexibles en contenedores","Estación","30 días","Tanques"],
["Revision de valvulas de venteo o presión vacío","Mantenimiento (tercero)","Conforme a las Especificaciones del Fabricante","Tanques"],
["Revision de sellos mecanicos","Estación","30 días","Tanques"],
["Analisis de aguas residuales","Tercero","12 meses","Pozos de Observación y Descarga de Aguas"],
["Recolección de residuos peligrosos botes de aceites y aditivos","Tercero (PENDIENTE)","30 días","Pozos de Observación y Descarga de Aguas"],
["Recolección de residuos peligrosos, lodos de trampa (Ligado a la limpieza ecologica)","Tercero","30 días","Pozos de Observación y Descarga de Aguas"],
["ANEXO 4 (Inciso 3) Se debe realizar el monitoreo del suelo, subsuelo y mantos acuíferos a través de los pozos de observación y monitoreo","Jesús Valdéz","12 meses","Pozos de Observación y Descarga de Aguas"],
["Pruebas de Hermeticidad en Tanques y Lineas de productos, con equipo móvil","Tercero","12 meses","Pruebas de Hermeticidad y SRV, Sistema de Monitoreo Electrónico, Cumplimiento NOM-016-CRE-2016,"],
["Revisión y mantenimiento preventivo del sistema de recuperación de vapores","Tercero","3 meses","Pruebas de Hermeticidad y SRV, Sistema de Monitoreo Electrónico, Cumplimiento NOM-016-CRE-2016,"],
["Pruebas al Sistema de recuperación de vapores por laboratorio autorizado","Tercero (en revisión)","12 meses","Pruebas de Hermeticidad y SRV, Sistema de Monitoreo Electrónico, Cumplimiento NOM-016-CRE-2016,"],
["Revisión y mantenimiento preventivo al sistema de medición electronica y monitoreo en tanques, dispensarios y pozos de monitoreo.","Tercero","4 meses","Pruebas de Hermeticidad y SRV, Sistema de Monitoreo Electrónico, Cumplimiento NOM-016-CRE-2016,"],
["Limpieza y mantenimiento a faldon perimetral","Tercero","6 meses","Edificio, Imagen y Servicio"],
["Mantenimiento preventivo anuncio independiente, Limpieza","Tercero","6 meses","Edificio, Imagen y Servicio"],
["Mantenimiento a estructura de anuncio independiente, Aplicación de pintura","Tercero","12 meses","Edificio, Imagen y Servicio"],
["Pintura en areas de despacho, señalización horizontal , protecciones, columnas,","Tercero","6 meses","Edificio, Imagen y Servicio"],
["Mantenimiento de señalización vertical de acuerdo a NOM-005-ASEA-2016, revisión y mantenimiento cada 6 meses","Tercero","6 meses","Edificio, Imagen y Servicio"],
["Mantenimiento y aplicación de pintura en muros exteriores en edificio","Tercero","12 meses","Edificio, Imagen y Servicio"],
["Mantenimiento a impermeabilización de azotea en edificio","Tercero","12 meses","Edificio, Imagen y Servicio"],
["Limpieza de bajadas de aguas pluviales en edificio y techumbres","Tercero","2 meses","Edificio, Imagen y Servicio"],
["Limpieza y revisión de cisterna","Tercero","12 meses","Edificio, Imagen y Servicio"],
["Poda de areas verdes, Limpieza","Tercero","3 meses","Edificio, Imagen y Servicio"],
["Revisión de fisuras o fracturas en zonas de carga y descarga","Estación","6 meses","Edificio, Imagen y Servicio"],
["Compresor revisión de niveles y purgado","Estación","Diario","Cuarto de Máquinas"],
["Planta de emergencia, revisión de niveles","Estación","Diario","Cuarto de Máquinas"],
["Mantenimiento preventivo a compresor","Tercero","4 meses","Cuarto de Máquinas"],
["Mantenimiento preventivo a planta de emergencia","Tercero","6 meses o 200 hrs","Cuarto de Máquinas"],
["Mantenimiento preventivo a bomba hidraulica, revisión de automatico, y presurizador","Tercero","6 meses","Cuarto de Máquinas"],
["Revision de equipo hidroneumático","Tercero","Conforme a las Especificaciones del Fabricante","Cuarto de Máquinas"],
["Revisión de condiciones de extintores de polvo quimico","Estación","","Extintores"],
["Recarga y mantenimiento preventivo de extintores de polvo quimico","Tercero","12 meses","Extintores"],
["Revisión y mantenimiento preventivo a instalación electrica (interruptores, contactos, cajas de conexión, tableros , sellos EYS, )","Tercero","6 meses","Sistema Eléctrico General"],
["Mantenimiento preventivo al sistema de tierras y pararrayos","Tercero","6 meses","Sistema Eléctrico General"],
["Comprobación de la continuidad electrica en sistema de tierras y pararrayos en base a la NOM-022-STPS-2008","Tercero","12 meses","Sistema Eléctrico General"],
["Revisión de paros de emergencia (prueba de funcionamiento)","Estación","30 días","Sistema Eléctrico General"],
["Capacitación general","","","Protección Civil"],
["Programación de simulacros","","","Protección Civil"],
["Iluminación en areas de despacho","Tercero","6 meses (cada que se requiera)","Protección Civil"],
["Iluminación en edificio administrativo y operativo","Tercero","6 meses (cada que se requiera)","Protección Civil"],
["Contactos y apagadores en edificio administrativo y operativo","Tercero","6 meses (cada que se requiera)","Protección Civil"],
["Iluminación faldon perimetral","Tercero","6 meses (cada que se requiera)","Protección Civil"],
["Iluminación MID (Anuncio independiente)","Tercero","6 meses (cada que se requiera)","Protección Civil"],
["Iluminación Canopys Dispendsarios","Tercero","6 meses (cada que se requiera)","Protección Civil"],
["Revisión de Bitacora I Limpiezas Programadas y No Programadas","Estación","2 meses","Bitácoras"],
["Revisión de Bitacora II Recepción y Descarga de Producto","Estación","2 meses","Bitácoras"],
["Revisión de Bitacora III Incidentes e Inspecciones de Mantenimiento","Estación","2 meses","Bitácoras"],
["Revisión de Bitacora IV Desviciónes en el Balance de Producto","Estación","2 meses","Bitácoras"],
["Revisión de Bitacora de Mantenimiento","Estación","2 meses","Bitácoras"],
["Revisión de bitacora Incidentes e Inspecciones de mantenimeinto y Pruebas de Hermeticidad","Estación","2 meses","Bitácoras"],
["Bitacora especifica para el Sistema de recuperación de vapores (Proveedor)","Estación","2 meses","Bitácoras"]]














ex.each do |e|

  activity = e[0]
  provider = e[1]
  period = e[2]
  concept = e[3]

  result = [ "Satisfactorio", "No Satisfactorio", "Pendiente", "" ].sample

  notes = ""

  last_done_dt_tm = nil
  next_due_dt_tm = nil

  #if e[2].split[1] == "meses"
  
  #  last_done_dt_tm = (0..(e[2].split[0])).to_a.sample.months.ago   
  #  next_due_dt_tm = last_done_dt_tm + ( e[2].split[0] ).months
  
  #elsif e[2].split[1] == "días"
  
  #  last_done_dt_tm = ( 0..(e[2].split[0]) ).to_a.sample.days.ago   
  #  next_due_dt_tm = last_done_dt_tm + ( e[2].split[0] ).days
  
  #elsif e[2].split[0] == "Diaria"
  
  #  last_done_dt_tm = (1).days.ago
  #  next_due_dt_tm = last_done_dt_tm + (1).days
  
  #else
  
    last_done_dt_tm = (1..100).to_a.sample.days.ago
    next_due_dt_tm = last_done_dt_tm + (1..100).to_a.sample.days
  
  #end 


  
  program = [ '2015', '2016', '2017' ].sample
  cost = ([1,2,3,4,5].sample*1000 + [1,2,3,4,5].sample*100) + 0.00

  Demo.create!(
    activity: activity,
    concept: concept,
    provider: provider,
    last_done_dt_tm: last_done_dt_tm,
    result: result,
    notes: notes,
    next_due_dt_tm: next_due_dt_tm,
    period: period,
    program: program,
    cost: cost
  )

end

