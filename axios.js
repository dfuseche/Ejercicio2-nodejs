const axios = require('axios');
const fs = require('fs');
let clientes = new Array();
let proveedores = new Array();

async function getDatafromAnotherServer() {
  const resp = await axios.get('https://gist.githubusercontent.com/josejbocanegra/986182ce2dd3e6246adcf960f9cda061/raw/f013c156f37c34117c0d4ba9779b15d427fb8dcd/clientes.json');
  for(let i = 0;i<resp.data.length;i++)
  {
    
      clientes[i]= {
          "idCliente":resp.data[i].idCliente,
          "nombreCompania": resp.data[i].NombreCompania,
          "nombreContacto": resp.data[i].NombreContacto,

      };
      
  }
  
}
getDatafromAnotherServer();

async function getDatafromAnotherServerProveedores() {
    const resp = await axios.get('https://gist.githubusercontent.com/josejbocanegra/d3b26f97573a823a9d0df4ec68fef45f/raw/66440575649e007a9770bcd480badcbbc6a41ba7/proveedores.json');
    for(let i = 0;i<resp.data.length;i++)
    {
      
        proveedores[i]= {
            "idproveedor":resp.data[i].idproveedor,
            "nombrecompania": resp.data[i].nombrecompania,
            "nombrecontacto": resp.data[i].nombrecontacto,
  
        };
        console.log(proveedores[i])
        
    }
    
  }
  getDatafromAnotherServerProveedores();



module.exports = {clientes, proveedores};