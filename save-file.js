const fs = require('fs');

fs.writeFile(process.argv[2], process.argv[3], (error) => {
  if(error) throw err;
  console.log(`Arquivo ${process.argv[2]} foi salvo com sucesso.`)
})