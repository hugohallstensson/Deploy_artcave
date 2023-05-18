import { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import Parse from 'parse/dist/parse.min.js';
import Userfront from "@userfront/react";
import '../css/user.css';

	function Register() {

		Userfront.init("xbpg9gdn");

		const SignupForm = Userfront.build({
		  toolId: "alabnkm"
		});

		return (
		  <div class="register">
			<SignupForm />
		  </div>
		);
	  }




export default Register
