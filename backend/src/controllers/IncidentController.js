const connection = require('../database/connection');

module.exports = {

    async index(request, response){                         //index -> list all ongs

        const { page = 1} = request.query;

        const [ IncidentsCount ] = await connection('incidents')
                                        .count();

        const incidents = await connection('incidents')
                                .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
                                .limit(5)
                                .offset((page - 1) * 5)
                                .select([
                                    'incidents.*',
                                    'ongs.name',
                                    'ongs.email',
                                    'ongs.whatsapp',
                                    'ongs.city',
                                    'ongs.uf'
                                ]); // Para não sobrepor o id dos incidents que tem o mesmo nome do id das ongs
        
        response.header('X-Total-count', IncidentsCount['count(*)']  );
        
        return response.json(incidents);
    }, 

    async create(request, response){
        const data = {title, description, value}  = request.body;
        //console.log(data);

        const ong_id = request.headers.authorization; 

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        });

        return response.json({id});
    },

    async delete(request, response){
    
        const { id } = request.params;        
        const ong_id = request.headers.authorization;        

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        console.log(incident);

        if(incident.ong_id !== ong_id){
            console.log('Db ong_id: ['+incident.ong_id+'] ong_id recebido: ['+ong_id+']');
            return response.status(401).json({error: 'Operation not permited.'}); // 401 Unauthorized
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send(); //204 No Content. Sucess but no contet to return

    }
};