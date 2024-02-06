import { send } from '../services/smtp-service.js';

export async function mailController(req,res, next){
  try{
    await send(req.body);
    res.json({ succes: true});
  }catch(error){
    next(error);
  }
}
