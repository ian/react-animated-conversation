export default {
  "container": {
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "column",
    justifyContent: "flex-end",
    width: "300px",
    height: "350px",
    backgroundColor: "#fff",
    position: "relative",
    borderBottom: "solid 1px #eee",
    overflow: "hidden",
    borderTopLeftRadius: "47px",
    borderTopRightRadius: "47px"
  },
  "messages": {
    listStyle: "none",
    margin: "0",
    paddingTop: "10px",
    paddingLeft: "25px",
    paddingRight: "25px",
    paddingBottom: "10px"
  },
  "message": {
    display: "inline-block",
    clear: "both",
    padding: "8px 15px",
    borderRadius: "30px",
    marginBottom: ["2px", "5px"],
    fontFamily: "Helvetica, Arial, sans-serif",
    fontSize: "12px",
    marginTop: "5px",
    maxWidth: "85%"
  },
  "them": { background: "#eee", cssFloat: "left" },
  "me": { cssFloat: "right", background: "#0084ff", color: "#fff" }
}
