import { makeStyles } from "@material-ui/styles";

export default makeStyles({
  container: {
    height: "100vh",
    paddingInline: 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  headContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    width: "100%",
    textAlign: "center",
    fontSize: "1.2rem",
    padding: 10,
  },
  input: {
    "& fieldset": {
      border: "none",
    },
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 10,
  },
  submitButton: {
    borderRadius: "25px",
    marginTop: 10,
    marginBottom: 10,
  },
  error: {
    fontSize: ".7rem",
    color: "red",
  },
});
