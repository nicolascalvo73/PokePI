//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js')
const { conn } = require('./src/db.js')
require('dotenv').config()
const { PORT } = process.env
const { getTypesToDB } = require('./src/controllers/typesControllers.js')

// Syncing all the models at once.
conn
	.sync({ force: true }) // verificar si debo modificar esto luego
	.then(() => {
		server.listen(PORT || 3001, () => {
			getTypesToDB()
			console.log(`Server listening at ${PORT}`) // eslint-disable-line no-console
		})
	})
	.catch((error) => console.log(error.message))
