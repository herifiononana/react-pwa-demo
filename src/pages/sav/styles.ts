import { makeStyles } from "@material-ui/styles";

export default makeStyles({
  container: {
    height: "90vh",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    padding: 10,
  },
  title: {
    width: "100%",
    textAlign: "center",
    fontSize: "1.2rem",
  },
  textCenter: {
    textAlign: "center",
  },
  subTitle: {
    fontSize: ".7rem",
  },
  profilClientContainer: {
    width: "100%",
    display: "flex",
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "25px",
    background: "linear-gradient(to bottom right, #f0f0f0, #ffffff)",
  },
  select: {
    width: "100%",
    display: "flex",
    marginBottom: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  susceptibilityContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflowX: "auto",
    flexWrap: "nowrap",
  },
  iconButton: {
    background: "linear-gradient(to bottom right, #f0f0f0, #ffffff)",
    marginInline: ".1rem",
    width: "2rem",
    height: "2rem",
  },
  textNormalSize: {
    fontSize: ".7rem",
  },
  submitButton: {
    width: "70%",
    borderRadius: "25px",
    alignSelf: "center",
  },
  textfield: {
    border: 0,
    marginBottom: 10,
  },
});
