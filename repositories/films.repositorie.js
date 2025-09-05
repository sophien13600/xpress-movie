import connection from '../config/db.config.js'


//export const findAll = async () =>{
 const findAll = async () =>{
    const SELECT = "SELECT * FROM films"
    try {
        const resultat = await ( connection.query(SELECT))
        return resultat[0]


    } catch (error) {
        res.render('personne', {
            personnes: [],
            erreurs: "Problème de récupération de données"
        })

    }
}

export default { findAll }