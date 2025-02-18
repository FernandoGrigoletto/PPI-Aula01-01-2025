export default function autenticar(requisicao, reposta, next){
    if(requisicao.session.autenticar === true){
        next();
    }else{
        resposta.redirect('/login');
    }

}