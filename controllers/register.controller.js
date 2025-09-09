import RegisterRepository from '../repositories/register.repository.js';
//import  yup from '../config/yup.config.js'




const add = async (req, res, next) => {

    if(req.body){
        const user = await RegisterRepository.register(req.body);
        if(user) {
            res
            res.redirect('/');
        } else {
            res.redirect('/inscription');
        }
    }
}

 export default { add }