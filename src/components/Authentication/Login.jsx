import { auth, provider } from "../../firebase";

function Login() {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        // Check if the user's email address has the desired suffix
        if (result.user.email.endsWith("iitr.ac.in")) {
          // Allow access for users with iitr.ac.in email addresses
          // You can dispatch the user's information or perform other actions here
        } else {
          // Deny access for users without iitr.ac.in email addresses
          // You can also sign them out if needed
          auth.signOut();
          alert("Access denied. You must use an iitr.ac.in email address.");
        }
      })
      .catch((error) => alert(error?.message));
  };

  return (
    <>
      <div
        className="signUp"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "10px",
            height: "fit-content",
            border: "1px solid lightgray",
            padding: "50px",
            borderRadius: "8px",
          }}
        >
          <button
            style={{
              display: "flex",
              border: "0",
              borderRadius: "20px",
              backgroundColor: "#ff0606",
              padding: "12px",
              fontWeight: "bold",
              color: "white",
              width: "200px",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={signIn}
          >
            Sign up with google
          </button>

          <button
            style={{
              display: "flex",
              border: "0",
              borderRadius: "20px",
              backgroundColor: "#1357d4",
              padding: "12px",
              fontWeight: "bold",
              color: "white",
              width: "200px",
              alignItems: "center",
              justifyContent: "center",
              margin: "12px 0",
            }}
            onClick={signIn}
          >
            Sign in{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
