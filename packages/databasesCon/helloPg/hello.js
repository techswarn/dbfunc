const { Client } = require('pg')



function main(args) {

  const client = new Client({
    host: 'db-postgresql-do-user-11648032-0.b.db.ondigitalocean.com',
    port: 25060,
    user: 'doadmin',
    password: 'AVNS_0POAcotmgRBoXxPuetJ',
  })

  client.connect(err => {
    if (err) {
      console.error('connection error', err.stack)
    } else {
      console.log('connected')
    }
  })
  

    let name = args.name || 'stranger'
    let greeting = 'Hello ' + name + '!'
    console.log(greeting)
    return {"body": greeting}
  }
  