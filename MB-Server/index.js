var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var fs = require("fs");
var url = require("url");
var mysql = require("mysql");
var nodemailer = require('nodemailer'); // email sender function exports.sendEmail = function(req, res){
var cookieParser = require("cookie-parser"); //coockies
var multipart = require('connect-multiparty');//Express 4

var urlEncodeParser = bodyParser.urlencoded({extended:false});

//Base de datos
var conexion = mysql.createConnection({
	host:"localhost",
	user:"admin",
	password: "admin",
	database: "mb_db"
});


app.use(express.static("public"));
app.use(cookieParser());
app.use(multipart()) ;

app.get("/index",function(peticion, respuesta){
	console.log("Primera Pagina / Inicial");
	var p = url.parse(peticion.url,true);
	fs.readFile("./public"+p.pathname+".html", function(err,data){
		respuesta.writeHead(200,{"Content-Type": "text/html"}); //MIME Type
		respuesta.write(data);
		respuesta.end();
	});
});

app.get("/Registro",function(peticion, respuesta){
	console.log("Primera Pagina / Inicial");
	var p = url.parse(peticion.url,true);
	fs.readFile("./public"+p.pathname+".html", function(err,data){
		respuesta.writeHead(200,{"Content-Type": "text/html"}); //MIME Type
		respuesta.write(data);
		respuesta.end();
	});
});

//metodo GET con valores en el link
app.get("/login", urlEncodeParser, function(peticion, respuesta){
	var resultado = {
		usuario: peticion.query.usuario,
		contrasena: peticion.query.contrasena
	};

	respuesta.send(JSON.stringify(resultado));
	console.log("Pagina Inicio de Sesion");
});

//metodo POST con valores empaquetados 
app.get("/sesion", function(peticion, respuesta){
	respuesta.send(JSON.stringify(peticion.cookies.id_usuario));
});

app.get("/logout", function(peticion, respuesta){
		respuesta.clearCookie("id_usuario");
		respuesta.sendFile(__dirname+"/public/index.html");
});


app.get("/verid/:id", function(peticion, respuesta){
	fs.readFile("./public/detalleProyecto.html", function(err,data){
		respuesta.writeHead(200,{"Content-Type": "text/html"}); //MIME Type
		respuesta.write(data);
		respuesta.end();
	});


	respuesta.send(JSON.stringify(peticion.cookies.id_proyecto));
});

//***********************************Celeste***********************************************************************//

app.get("/proyect", function(peticion, respuesta){
	respuesta.send(JSON.stringify(peticion.cookies.id_usuario));
});

//****************************************************************************************************************//





//POST CREAR USUARIO
app.post("/registrar",urlEncodeParser,function(peticion, respuesta){
	var a = "asd";
	conexion.query("call mb_db.nuevo_usuario('"+peticion.body.usuario
					+"', '"+peticion.body.nombre
					+"', '"+peticion.body.apellido
					+"', '"+peticion.body.correo
					+"', '"+peticion.body.telefono
					+"', '"+peticion.body.ocupacion
					+"', '"+peticion.body.contrasena
					+"',@ASD)", function(err,filas,campos){

	conexion.query("select @ASD as ok", function(err,filas,campos){
		if (err) throw err;
	    	respuesta.send(JSON.stringify(filas[0].ok));
		});

	});
});

//inicio de sesion

app.post("/login",urlEncodeParser,function(peticion, respuesta){
		conexion.query(
			"SELECT Id_Usuario FROM mb_db.tbl_usuarios where Nombre_Usuario = ? and Contraseña = ? "
			,[peticion.body.usuario,peticion.body.pass],
			function(err, filas, campos){
				//respuesta.send();
				respuesta.cookie('id_usuario', filas[0].Id_Usuario).send(JSON.stringify(filas));
			}
		);
});

app.post("/datosuser",urlEncodeParser,function(peticion, respuesta){
		conexion.query(
			"select * from tbl_usuarios inner join tbl_personas on tbl_personas.Id_Persona = tbl_usuarios.Id_Persona where tbl_usuarios.Id_Usuario = ? "
			,[peticion.body.usuario],
			function(err, filas, campos){
				//respuesta.send();
				respuesta.send(JSON.stringify(filas));
			}
		);
});

app.post("/edit-user",urlEncodeParser,function(peticion, respuesta){
		conexion.query(
			"UPDATE `mb_db`.`tbl_personas` SET `Nombres`= ? , `Apellidos`= ? , `Correo`= ? , `Ocupacion`= ? , `Telefono`= ?  WHERE `Id_Persona`= ? "
			,[peticion.body.nombre,peticion.body.apellido,peticion.body.correo,peticion.body.ocupacion,peticion.body.telefono,peticion.body.usuario],
			function(err, filas, campos){
				//respuesta.send();
				respuesta.send(JSON.stringify(filas));
				console.log(filas);
			}
		);
});

//cargar opciones de busqueda
app.post("/opciones",urlEncodeParser,function(peticion, respuesta){
		conexion.query(
			"SELECT nombre_categoria from tbl_categorias ",
			function(err, filas, campos){
				respuesta.send(JSON.stringify(filas));
				console.log(filas);
			}
		);
});


//cargar top de proyectos
app.post("/topproyecto",urlEncodeParser,function(peticion, respuesta){
		conexion.query("SELECT tbl_proyectos.Id_Proyecto,Nombre_Proyecto,Descripcion, Monto_Meta, Monto_Recaudado, fecha, tbl_imagenes.Imagen,((monto_recaudado / Monto_meta)*100) as res FROM tbl_proyectos "+
						"inner join tbl_imagenes_x_proyecto on tbl_imagenes_x_proyecto.Id_Proyecto = tbl_proyectos.Id_Proyecto "+
						"inner join tbl_imagenes on tbl_imagenes_x_proyecto.id_imagen = tbl_imagenes.id_imagen "+
						"group by tbl_proyectos.Id_proyecto "+
						"order by res DESC ",
			[peticion.body.limit],
			function(err, filas, campos){
				respuesta.send(JSON.stringify(filas));
				console.log(filas);
			}
		);
});
//cargar top de proyectos index
app.post("/topproyectoindex",urlEncodeParser,function(peticion, respuesta){
		conexion.query("SELECT tbl_proyectos.Id_Proyecto,Nombre_Proyecto,Descripcion, Monto_Meta, Monto_Recaudado, fecha, tbl_imagenes.Imagen,((monto_recaudado / Monto_meta)*100) as res FROM tbl_proyectos "+
						"inner join tbl_imagenes_x_proyecto on tbl_imagenes_x_proyecto.Id_Proyecto = tbl_proyectos.Id_Proyecto "+
						"inner join tbl_imagenes on tbl_imagenes_x_proyecto.id_imagen = tbl_imagenes.id_imagen "+
						"group by tbl_proyectos.Id_proyecto "+
						"order by res DESC limit 3",
			[peticion.body.limit],
			function(err, filas, campos){
				respuesta.send(JSON.stringify(filas));
				console.log(filas);
			}
		);
});
app.post("/search",urlEncodeParser,function(peticion, respuesta){
			conexion.query("SELECT tbl_proyectos.Id_Proyecto,Nombre_Proyecto,Descripcion, Monto_Meta, Monto_Recaudado, fecha, tbl_imagenes.imagen,((monto_recaudado / Monto_meta)*100) as res FROM tbl_proyectos "+
						"inner join tbl_imagenes_x_proyecto on tbl_imagenes_x_proyecto.Id_Proyecto = tbl_proyectos.Id_Proyecto "+
						"inner join tbl_imagenes on tbl_imagenes_x_proyecto.id_imagen = tbl_imagenes.id_imagen "+
						"WHERE nombre_proyecto LIKE '%"+peticion.body.search+"%' OR Descripcion LIKE '%"+peticion.body.search+"%' "+
						"order by res DESC ",
			function(err, filas, campos){
				respuesta.send(JSON.stringify(filas));
				console.log(filas);
			}
		);
});

//cargar proyectos de usuario especifico
app.post("/user-proy",urlEncodeParser,function(peticion, respuesta){
	console.log(peticion.body);
		conexion.query("SELECT *, DATE_FORMAT(Fecha, '%e/%m/%y') as Fecha FROM tbl_proyectos where id_usuario_creador = ? ",
			[peticion.body.usuario],
			function(err, filas, campos){
				respuesta.send(JSON.stringify(filas));
			}
		);
});

//modificar proyectos de usuario especifico
app.post("/editproyecto",urlEncodeParser,function(peticion, respuesta){
	console.log(peticion.body);
		conexion.query("UPDATE `mb_db`.`tbl_proyectos` SET `Nombre_Proyecto`= ?, `Descripcion`= ?, `Fecha`= ?, `url_video`= ?, `facebook`= ?, `twitter`= ? WHERE `Id_Proyecto`= ?",
			[peticion.body.nombre,peticion.body.descripcion,peticion.body.fecha,peticion.body.video,peticion.body.face,peticion.body.twi,peticion.body.id_pro],
			function(err, filas, campos){
				respuesta.send(JSON.stringify(filas));
				console.log(JSON.stringify(filas));
			}
		);
});


//cargar completo el proyecto
app.post("/vercompleto",urlEncodeParser,function(peticion, respuesta){
		conexion.query("SELECT * , DATE_FORMAT(Fecha, '%m/%e/%y') as Fecha FROM mb_db.tbl_proyectos where Id_Proyecto = ?",
			[peticion.body.id_pro],
			function(err, filas, campos){
				respuesta.send(JSON.stringify(filas));
				console.log(" respuesta " +filas);
			}
		);
});

//**********************************************+**Celeste********************************************************//

//mostrar el proyecto en especifico
app.get("/verpro",function(peticion, respuesta){

	console.log(peticion.body);
		conexion.query("SELECT a.* , b.Nombre_Usuario "+
		                "FROM tbl_proyectos a "+
			            "inner join tbl_usuarios b "+
			            "on(a.id_usuario_creador = b.id_usuario) "+
			            "where a.id_proyecto = ? ",
			[peticion.query.id_pro],
			function(err, filas, campos){
				respuesta.send(JSON.stringify(filas));
				console.log(filas);
			}
		);
});

//**//

//***************************************Celeste****************************************************************//

//extraer imagenes de cada proyecto
app.get("/extraerImg",function(peticion, respuesta){

	console.log(peticion.body);
		conexion.query("SELECT a.id_Imagen "+
		                "FROM tbl_imagenes a "+
			            "inner join tbl_imagenes_x_proyecto b "+
			            "on(a.id_imagen = b.id_imagen) "+
			            "where b.id_proyecto = ? ",
			[peticion.query.id_pro],
			function(err, filas, campos){
				respuesta.send(JSON.stringify(filas));
				console.log(filas);
			}
		);
});

app.get("/cargarDatosDonar",function(peticion, respuesta){

console.log("datos recoverymoba " + peticion.query.id_pro);
	console.log(peticion.body);
		conexion.query("SELECT * from tbl_proyectos where id_proyecto = ? ",
			[peticion.query.id_pro],
			function(err, filas, campos){
				respuesta.send(JSON.stringify(filas));
				console.log(filas);
			}
		);
});


app.post("/registrarDonacion", urlEncodeParser, function(peticion, respuesta){

	//alert(peticion.body.monto);

	conexion.query(
			"Insert into tbl_donaciones(id_donacion, monto_donacion, nombre_donante, correo_donante, fecha, id_proyecto, id_tipo_pago) "+
			" values (null, ?, ?, ?, '10/10/10', ?, '1') ",
			[	
			    peticion.body.monto,
				peticion.body.nombre,
				peticion.body.correo,
				peticion.body.id_pro


			],
			function(err, resultado, campos){
				 if (err) throw err;
				respuesta.send(JSON.stringify(resultado));
		
			}
		);
});

app.post("/obtenerMonto", urlEncodeParser, function(peticion, respuesta){

	conexion.query(
			"Select monto_recaudado from tbl_proyectos where id_proyecto = ? " ,
			[	
				peticion.body.id_pro
			],
			function(err, resultado, campos){
				if (err) throw err;
				respuesta.send(JSON.stringify(resultado));
				console.log("registro " +resultado);
				
			}
		);
});


app.post("/actualizarMonto", urlEncodeParser, function(peticion, respuesta){

	conexion.query(
			"UPDATE tbl_proyectos SET monto_recaudado = ? where id_proyecto = ? " ,
			[	
			    peticion.body.monto,
				peticion.body.id_pro
			],
			function(err, resultado, campos){
				if (err) throw err;
				respuesta.send(JSON.stringify(resultado));
				console.log("actualizo " +resultado);
			}
		);
});

//*****************************************************************************************************//




app.post("/nuevo-proyecto",urlEncodeParser,function(peticion, respuesta){
	var a = "asd";
	console.log(peticion);
	conexion.query("call mb_db.nuevo_Proyecto('"+peticion.body.usuario
					+"', '"+peticion.body.nombre
					+"', '"+peticion.body.descripcion
					+"', '"+peticion.body.monto
					+"', '"+peticion.body.fecha
					+"', '"+peticion.body.categoria
					+"', '"+peticion.body.face
					+"', '"+peticion.body.twi
					+"', '"+peticion.body.video
					+"',@ASD)", function(err,filas,campos){
		conexion.query("select @ASD as ok", function(err,filas,campos){
		if (err) throw err;
	    	respuesta.send(JSON.stringify(filas[0].ok));
		});

	});
});

app.post("/subirimg", urlEncodeParser, function(peticion, respuesta){
	conexion.query("INSERT INTO `mb_db`.`tbl_imagenes` (`Imagen`) VALUES ('1') ",
			function(err, filas, campos){
				if (err) throw err;
					var fs = require('fs')

				   var path = peticion.files.archivo.path
				   var newPath = 'public/img/img-pro/'+JSON.stringify(filas.insertId)+'.jpg'

				   var is = fs.createReadStream(path)
				   var os = fs.createWriteStream(newPath)

				   is.pipe(os)

				   is.on('end', function() {
				      //eliminamos el archivo temporal
				      fs.unlinkSync(path)
					
				   });

				   	conexion.query("INSERT INTO `mb_db`.`tbl_imagenes_x_proyecto` (`Id_Imagen`, `Id_Proyecto`) VALUES ("+JSON.stringify(filas.insertId)+", ?);",
						[peticion.query.idproyimg],
						function(err, filas, campos){
							respuesta.send(JSON.stringify(filas));
							console.log(filas);
						}
					);
				
			}
		);

});

//esto es una prueba

app.post("/email",urlEncodeParser,function(peticion, respuesta){
	//generando la nueva
	var npass = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		for (var i = 0; i < 8; i++){
		    npass += possible.charAt(Math.floor(Math.random() * possible.length));
		}



		//validar que existe
		var existe= false;
conexion.query("select correo from tbl_usuarios where correo = ?",
			[peticion.body.mail],
			function(err, filas, campos){
				if(filas.length > 0){
					existe = true;
				}
			});



	//definir servidor
	var transporter = nodemailer.createTransport({
	       service: 'Gmail',
	       auth: {
	           user: 'recoverymoba@gmail.com',
	           pass: 'asd1asd2'
	       }
	});

	//contenido del mensaje
	var mailOptions = {
	       from: 'MoneyBase-Recovery',
	       to: peticion.body.mail,
	       subject: 'Recovery',
	       text: 'Su nueva contrasena es:'+ npass
	};

	//envio del mensaje
	if(existe){
		transporter.sendMail(mailOptions, function(error, info){
		    if (error){
		        console.log(error);
		        res.send(500, err.message);
		    } else {
			    conexion.query("UPDATE tbl_usuarios SET Contraseña= ? WHERE correo=? ",
				[npass,peticion.body.mail],
				function(err, filas, campos){
					respuesta.send(JSON.stringify(filas));
				});
			        console.log("Email sent");
			        res.status(200).jsonp(req.body);
		    }
		});
	}else{
		respuesta.send(JSON.stringify({"error": "Error"}));
	}
});




app.listen(1000);