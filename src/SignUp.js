import logo from './logo.svg';
import Entry from './components/Entry.js';

const SignUp = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form className="SignUp">
	<Entry name="test" label="Email"/>
	<Entry name="password" label="Password"/>
      <button type='submit'>Log In</button>
	  <div><a href="https://example.com">Forgot Password</a></div>
	</form>
  );
};

export default SignUp;
