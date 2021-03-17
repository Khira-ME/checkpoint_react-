import logo from './logo.svg';
import './App.css';
import { FacebookLoginButton } from "react-social-login-buttons";

function App() {
  return (
 <div>
   
    <div class="card bg-dark text-white">
  <img id="pic" src="https://image.freepik.com/vecteurs-libre/dessin-anime-mignon-femme-automne-calin-vecteur-chat_39961-467.jpg" class="card-img" alt="..."/>
  <div class="card-img-overlay">
    <div id= "Par">
    <h5 class="card-title">LA FÉLINIERE </h5>
    <p class="card-text">La Féliniere Pension Pour Chat. Tout est pensé pour le confort des chats</p>
  </div>
  </div>
  <div title = "LA FÉLINIERE RÉSERVATION"> 
   <h2>LA FÉLINIERE </h2>
   <h5>RÉSERVATION</h5>
   </div>
   
  <div class="row g-3  formulaire">
  <div class="col">
  <label for="First name" class="form-label">First name</label>
    <input type="text" class="form-control" placeholder="First name" aria-label="First name"></input>
  </div> 
  <div class="col">
  <label for="Last name" class="form-label">Last name</label>
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"></input>
</div>

  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"></input>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"></input>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
  </div>
  <div class="col-12">
    
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"></input>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip"></input>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"></input>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">
register</button>
 <FacebookLoginButton/>
  </div>
  </div>
  </div>
 
  </div>
  )
  }
  export default App ;