// Exportará os métodos referentes a Ongs
const crypto     = require('crypto'); // pacote para criptografia
const connection = require('../database/connection');

module.exports = {

    async index(request, response){                         //index -> list all ongs
        const ongs = await connection('ongs').select('*');
       
        return response.json(ongs);
    }, 

    async create(request, response){
        const data = {name, email, whatsapp, city, uf} = request.body; // cada variavel recebe uma chave do json, garantindo que não virão dados inesperados
        //console.log(data);
    
        const id = crypto.randomBytes(4).toString('HEX'); // gera 4 bytes de caracteres hexadecimais aleatórios para utilizar como id
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });    
        
        return response.json({id});
    }
};