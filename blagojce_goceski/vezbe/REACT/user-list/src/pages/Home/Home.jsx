import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserList from "../../components/UserList/UserList";
import UserCards from "../../components/UserListVar2/UserCards";
// MATERIALIZE:
import "materialize-css/dist/css/materialize.min.css";
import NoUserMatch from "../../components/NoUserMatch/NoUserMatch";

function Home(props) {
  // console.log("HOME PROPS", props);

  // SHOW NAV-BAR (HIDE U ABOUT) -------------------------------------------
  props.funcTrue();
  // -----------------------------------------------------------------------

  // SHOW LAST UPDATE ------------------------------------------------------
  props.lastUpdateTrue();
  // -----------------------------------------------------------------------

  // PRIKAZ U ZAVISNOSTI OD IZBORA 'LIST' ILI 'CARDS' ----------------------
  const [value, setValue] = useState(props.value);

  useEffect(() => {
    props.value ? setValue(true) : setValue(false);
    console.log("VALUE-HOME:", value);
  }, [props.value]);
  // -----------------------------------------------------------------------

  // NO USER MATCH ---------------------------------------------------------
  const [userMatch, setUserMatch] = useState(true);
  // Funkcija da se prosledi podatak 'true/false' od child komponente 'UserList' 'UserCards' prema parent componenti 'Home'
  const toggleUserMatch = (data) => {
    data ? setUserMatch(true) : setUserMatch(false);
  };
  // -----------------------------------------------------------------------

  return (
    <React.Fragment>
      {value ? (
        <UserList userMatch={toggleUserMatch} />
      ) : (
        <UserCards userMatch={toggleUserMatch} />
      )}
      {userMatch === false && <NoUserMatch />}
    </React.Fragment>
  );
}

export default Home;
