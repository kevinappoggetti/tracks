import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';

const authReducer = (state, action)=>{
  switch (action.type){
    default:
      return state;
  }
};

//Ho 3 screen che utilizzano il context: Signup, Signin e Account
const signup = (dispatch) =>{
  return async ({email, password})=>{
    console.log("Sbiri");
    console.log(email);
    console.log("Sbara");
    console.log(password);
    // console.log("wooo");
    // console.log(email);
    //Dobbiamo fare una chiamata API con email e password a Mongo
    try{
      const response = await trackerAPI.post('/signup', {email, password});
      console.log(response.data);
    } catch(err){
      console.log(err.response.data);
    }
    //Se facciamo il signup, dobbiamo modificare lo stato e dire che siamo autenticati (JWT)


    //Dobbiamo considerare il caso in cui la chiamata API fallisse.


  }
}

const signin = (dispatch) => {
  return (email, password)=>{
    //prova a fare il loginFlow

    //Gestisci il caso in cui tutto vada bene

    //Gestisci il caso in cui le cose vanno male
  }
}

const signout = (dispatch) =>{
  return ()=>{
    //Prova a fare il logout
  }
}


export const {Provider, Context} = createDataContext(
  authReducer,
  {signin, signout, signup},
  {isSignedIn:false}
)
