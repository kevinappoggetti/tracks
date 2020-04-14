import axios from 'axios';

//Utilizziamo ngrok -> Attenzione sessione di 8 ore.
export default axios.create({
  baseURL:' http://928899ec.ngrok.io'
});
