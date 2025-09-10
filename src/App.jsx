import React, {useState} from 'react';
import './App.css';


const App = () => {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [feedback, setFeedback] = useState("");
const [submitted, setSubmitted] = useState(false);



const handleSubmit=(e)=>{
  e.preventDefault();
setSubmitted(true);

};
return(
<div>
{!submitted && (
  <div className="container">
<form onSubmit={handleSubmit}>
<h1>Registration Forms</h1>
<input
type='text'
placeholder='Enter your Name'
value={name}
onChange={(e)=> setName(e.target.value)}/>
<input
type='email'
placeholder='Enter your Email'
value={email}
onChange={(e)=> setEmail(e.target.value)}/>

<input
type='password'
placeholder='Enter your Pasword'
value={password}
onChange={(e)=> setPassword(e.target.value)}/>



<textarea
placeholder='Enter your Feedback'
value={feedback}
onChange={(e)=>setFeedback(e.target.value)}/>

<button type='submit'>Submit</button>

</form>


  </div>


)}

{submitted && (
  <div className="container">
    <h1>Thankyou</h1>
    <p>Your Details Submited Succefully</p>
    <p><strong>Name :</strong> <span>{name}</span></p>
    <p><strong>Email :</strong> <span>{email}</span></p>
    <p><strong>Password :</strong> <span>{password}</span></p>
    <p><strong>Feedback :</strong> <span>{feedback}</span></p>


  </div>
)


}


</div>
);
}
export default App;