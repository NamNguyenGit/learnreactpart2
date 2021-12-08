import "./App.css";

function App() {
  const name = "Nguyen Hoang Nam";
  const age = 20;
  const isFemail = true;
  const student = {
    name: " USTH ",
  };
  const colorList = ["red", "blue", "yellow"];
  return (
    <>
      Hi {name} - {age} - {isFemail ? "Male" : "Female"}
      {student.name}
      <ul>
        {colorList.map((color) => {
          return (
            <li key={color} style={{ color, listStyle: "none" }}>
              {color}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
