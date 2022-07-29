function App() {
  return (
    <div>
      <form>
       <div>
         <label>Username </label>
         <input type="text" name="uname" required />
       </div>
       <div>
         <label>Password </label>
         <input type="password" name="pass" required />
       </div>
       <div className="button-container">
         <input type="submit" />
       </div>
     </form>
    </div>
  );
}

export default App;
