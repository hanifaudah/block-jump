import "./App.css";
import styled from "styled-components";

const CSS = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;
`;

const App = () => {
  return (
    <CSS>
      <div
        id="unityContainer"
        style={{ width: "960px", height: "600px" }}
      ></div>
    </CSS>
  );
};

export default App;
