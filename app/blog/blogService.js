(function () {

	angular.module('blog.services', [])
		.factory('blogService', ['$http', '$q', function ($http, $q) {

			var blogs =
				[
					{
					title: 'Como utilizar Firebase en mi Web App',
					url: 'image/firebase.jpg',
					date: 'Marzo 10, 2016',
					post: [
						{
							description: 'Firebase es una base de datos alojada en la nube que permite acceder a datos a través desde navegadores y apps para dispositivos. Tiene como característica la sincronización en tiempo real de la información.',
							urlImgDes: ''
						}, {
							description: 'Con Firebase no tienes que preocuparte por desarrollar el Backend en tus aplicaciones ya que por medio de su API la lectura y escritura de datos se hace de una manera muy sencilla.',
							urlImgDes: ''
						}, {
							description: 'Uno de los puntos mas interesantes de Firebase es que cualquier actualización en la base de datos se vera reflejada en los diferentes dispositivos que acceden al sitio en tiempo real.',
							urlImgDes: ''
						}, {
							description: 'En este post les mostrare con un sencillo ejemplo como insertar y leer datos usando Firebase y AngularJS se hace en unos cuantos pasos.',
							urlImgDes: ''
						}, {
							description: 'Usando Firebase',
							urlImgDes: ''
						}, {
							description: 'Antes de empezar es necesario ilustrarle la base datos con la cual vamos a trabajar, de esta manera entenderemos un poco mas fácil el proceso de inserción de datos a la base de datos.',
							urlImgDes: 'image/subtitle1.jpg'
						}, {
							description: 'Existen dos maneras de utilizar Firebase en nuestras aplicaciones Web: La primera de ellas es agregando el link de las librerías de Firebase de su CDN(Content Developer Network) de la siguiente manera:',
							urlImgDes: 'image/imgDescription6.jpg'
						}, {
							description: 'Recuerda siempre que las etiquetas ',
							urlImgDes: 'image/imgScript.jpg'
						}, {
							description: 'por buenas practicas deben estar ubicadas justo antes del cierre de la etiqueta',
							urlImgDes: 'image/imgBody.jpg'
						}, {
							description: 'La segunda opción es instalar Firebase como dependencia en tu proyecto Web. Para utilizamos el gestor de paquetes el npm (Node Package Manager) e ingresamos los siguientes comandos dentro de la carpeta raíz de nuestro proyecto, de la siguiente manera:',
							urlImgDes: 'image/imgInstallFB.png'
						}, {
							description: 'Después de haber hecho esto, podemos encontrar una carpeta llamada node_modules, donde estarán las dependencias necesarias para utilizar las Apis de Firebase.',
							urlImgDes: 'image/imgModule.png'
						}, {
							description: 'Solo resta agregar el link al archivo firebase.js en nuestra aplicación de la siguiente manera:',
							urlImgDes: 'image/imgPathFB.png'
						}, {
							description: 'Leyendo y Escribiendo en Firebase',
							urlImgDes: ''
						}, {
							description: 'Una vez tengamos agregado las librerías de Firebase, ya podemos hacer el llamado al constructor Firebase pasándole como parámetro la URL de nuestra base de datos. Con esto tenemos una instancia a la base de datos la que nos permitirá leer y escribir en ella. La forma de hacerlo seria de la siguiente manera:',
							urlImgDes: 'image/imgInstanceFB.png'
						}, {
							description: 'Con esta instancia ya podemos escribir en nuestra base de datos, para este ejemplo cree un método en la capa de servicios de mi aplicación llamado saveComment el cual me permitirá guardar los comentarios que ingresan a mi sitio. El método queda de la siguiente manera:',
							urlImgDes: 'image/imgSaveFB.png',
						}, {
							description: 'Como les habia mencionado anteriormente la base de datos esta compuestas por un nodo padre llamado comments y varios nodos TitlePost, en este caso para hacer la inserción indicamos el nodo padre en la instrucción myRootRef.child(“comments”) y que los datos deben ser guardados en los nodos hijos de la siguente manera: .child(titlePage).push(comment);',
							urlImgDes: ''
						}, {
							description: 'Para el método de lectura seria de la siguiente manera:',
							urlImgDes: 'image/imgReadFB.png'
						}, {
							description: 'Con el metodo .on() escuchamos por posibles cambios en los datos que ingresan a la base de datos. Con el tipo de evento "value" le indicamos a Firebase que lea todo el contenido de la base de datos. Value es uno de los cinco eventos que podemos usar para leer datos de la base de datos.',
							urlImgDes: ''
						}, {
							description: 'Los invito a consultar la guía oficial donde encontraran mas información útil: https://www.firebase.com/docs/web/guide/',
							urlImgDes: ''
						}, {
							description: 'De esta manera concluimos este post donde de una manera muy sencilla tenemos a disposición nuestra base datos en Firebase para poder empezar a probar nuestras aplicaciones Frontend.',
							urlImgDes: ''
						}, {
							description: 'Pronto estaré publicando nuevos post sobre todo el desarrollo Frontend y las diferente herramientas que  podemos utilizar.',
							urlImgDes: ''
						}, {
							description: 'Los invito a dejar sus comentarios y hasta una próxima ocasión.',
							urlImgDes: ''
						}]
					}
					// {title: 'Titulo Post2', url: 'image/webdevelopment.jpg', date: 'Octubre 20, 2014', description: 'Descripcion Blog Descripcion Blog Descripcion Blog Descripcion Blog'},
					// {title: 'Titulo Post3', url: 'image/webdevelopment.jpg', date: 'Octubre 20, 2014', description: 'Descripcion Blog Descripcion Blog Descripcion Blog Descripcion Blog'},
					// {title: 'Titulo Post4', url: 'image/webdevelopment.jpg', date: 'Octubre 10, 2013', description: 'Descripcion Blog Descripcion Blog Descripcion Blog Descripcion Blog'}

				]

			function all() {
				var deferred = $q.defer();
				deferred.resolve(blogs);

				return deferred.promise;
			}

			function byName(name) {

				var deferred = $q.defer();

				all().then(function (data) {
					var results = data.filter(function (blog) {
					  return blog.title === name;
					});

					if (results.length > 0) {
					  deferred.resolve(results[0]);
					} else {
					  deferred.reject();
					}
				});

				return deferred.promise;
			}
			return {
				all: all,
				byName: byName
			}
		}]);
})();
