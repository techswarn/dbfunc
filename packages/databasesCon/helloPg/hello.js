// // const { Client } = require('pg')
// // const dotenv = require('dotenv')

// // dotenv.config({path: './config.env'})

// function main(args) {
// // console.log(process.env)
//   // const client = new Client({
//   //   host: process.env.PG_HOST,
//   //   database: process.env.PG_DATABASE,
//   //   port: process.env.PG_PORT,
//   //   user: process.env.PG_USER,
//   //   password: process.env.PG_PASSWORD,
//   //   ssl: {
//   //     rejectUnauthorized: false
//   //   }
//   // })

//   // client.connect(err => {
//   //   if (err) {
//   //     console.error('connection error', err.stack)
//   //   } else {
//   //     console.log('connected')
//   //   }
//   // })
  

//    // let name = args.name || 'stranger'
//    // let greeting = 'Hello ' + name + '!'
//     //console.log(greeting)
//     return {"body": "function called successfully"}
//   }

//   exports.main = main
// PG_DATABASE: "${PG_DATABASE}"
// PG_PORT: "${PG_PORT}"
// PG_USER: "${PG_USER}"
// PG_PASSWORD: "${PG_PASSWORD}"
// PG_HOST: "${PG_HOST}"

function main(args) {
  let name = args.name || 'stranger'
  let greeting = 'Hello ' + name + '!'
  console.log(greeting)
  return {"body": greeting}
}

exports.main = main