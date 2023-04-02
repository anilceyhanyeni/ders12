import { useState } from "react";
import Saat from "./Saat";

function App() {
  const [saatGoster, saatGosterGuncelle] = useState(true)

  return (
    <div>
       {saatGoster ? <Saat /> : ""}
    </div>
  )
}

export default App;
