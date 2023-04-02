import React, { useState, useEffect } from 'react';
import './saat.css'

function Saat() {
  //State tanımlamaları
  const [time, setTime] = useState(new Date());

  //Render sonrası çalışacak
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => {clearInterval(timer); console.log("Clear çalıştı") };
  }, []);

  //render aşaması
  return <h2 className="clock">{time.toLocaleTimeString()}</h2>;
}

export default Saat