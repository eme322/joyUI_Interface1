/*
//Demo.tsx
import * as React from "react";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import Email from "./components/Email";
import Password from "./components/Password";
import AspectRatio from "@mui/joy/AspectRatio";
import LogInButton from "./components/LogInButton";
import ForgotPassword from "./components/ForgotPassword";
import { extendTheme } from "@mui/joy";
import FormControl from "@mui/joy/FormControl";
import './styles.css';

const theme = extendTheme({colorSchemes: {
  light: {
    shadowChannel: '12 12 12',
  },
  dark: {
    shadowChannel: '0 0 0',
  },
},
});

export default function SignInSheet() {

  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState(false);

  const handleSubmit = () => {
    if (!email.trim()) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <div
      style={{
        margin: -8,
        padding: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "white",
        flexDirection: "column", // Stack children vertically
      }}
    >

      
      <Card
        variant="solid"
        sx={(theme) => ({
          width: 450,
          height: 406,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          backgroundColor: "white",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Adjusted boxShadow value
        })}
      >
        <div style={{ width: "100%", textAlign: "center" }}>
          <img src="https://www.boardx.us/content/images/2023/11/BoardX-Logo.png" alt="BoardX Logo" />
          <div
            style={{
              maxWidth: "150px", // Set the maximum width to 150px
              height: "auto"  // This will keep the aspect ratio intact
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              fontWeight: "40px",
              fontSize: "30px",
              color: "rgb(255,255,255)"


            }}
          >

        <Typography level="h3" sx={{ /* ... */    /* }}>
        Welcome to BoardX!
      </Typography>
      <FormControl fullWidth>
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          margin="normal" // This adds some space around the TextField
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          margin="normal" // This adds some space around the TextField
        />
        <LogInButton />
      </FormControl>
      <ForgotPassword />
*/




            
            /*
            <Typography sx = {{ color: "black"}} level = "h3">Welcome to BoardX!</Typography>
          </div>
              <FormControl>
          <div style={{ margin: "20px 0" }}>
            <Email />
          </div>
          <div style={{ margin: "20px 0" }}>
            <Password />
          </div>
          <div style={{ margin: "20px 0" }}>
            <LogInButton />
          </div>
          <div style={{ margin: "20px 0" }}>
            <ForgotPassword />
          </div>
                </FormControl>
          */
          /*
        </div>
      </Card>
    </div>
  );
}

*/




import * as React from "react";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import TextField from '@mui/material/TextField'; // Import TextField
import LogInButton from "./components/LogInButton";
import ForgotPassword from "./components/ForgotPassword";
import './styles.css'; // Make sure this path is correct based on where you place your styles.css file

export default function SignInSheet() {
  // ... useState hooks

  return (
    <div className="container">
      <Card className="login-card">
        <img 
          src="https://www.boardx.us/content/images/2023/11/BoardX-Logo.png" 
          alt="BoardX Logo" 
          className="logo"
        />
        <Typography level="h3" className="welcome-message">
          Welcome to BoardX!
        </Typography>
        <FormControl fullWidth className="form-control">
          <TextField label="Email" type="email" variant="outlined" className="input-field" />
          <TextField label="Password" type="password" variant="outlined" className="input-field" />
          <LogInButton className="login-button" />
        </FormControl>
        <ForgotPassword className="forgot-password" />
      </Card>
    </div>
  );
}

