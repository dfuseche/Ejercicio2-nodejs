const axios = require('axios');
const fs = require('fs');
async function getDatafromAnotherServer()
{
    const resp = await axios.get('https://gist.githubusercontent.com/josejbocanegra/d3b26f97573a823a9d0df4ec68fef45f/raw/66440575649e007a9770bcd480badcbbc6a41ba7/proveedores.json');
    console.log(resp.data);

}

getDatafromAnotherServer();