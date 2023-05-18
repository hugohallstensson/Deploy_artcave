import Userfront from "@userfront/react";
import '../css/user.css';


function Login() {
	
	Userfront.init("xbpg9gdn");

	const LogoutButton = Userfront.build({
		toolId: "oralnob"
	  });

const LoginForm = Userfront.build({
  toolId: "dkrabmb"
});
	
	return (
	  <div class="login">
		<LoginForm />

	  </div>
	);
  }

  
export default Login
