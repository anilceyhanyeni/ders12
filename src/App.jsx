import { useEffect, useState } from "react";

function App() {
  const [sayac, sayacGuncelle] = useState(0)
  const [ad, adGuncelle] = useState("Ad tanımsız")

  useEffect( ()=>{
    console.count("Use effect çalıştı")
    document.title = sayac
  } , [sayac] )

  function adFonksiyonu() {
    let zaman = new Date().getSeconds() //jsx'in kendi özelliği olarak
    adGuncelle("Ahmet Yılmaz: " + zaman)  //adGuncelle'deki deger degismezse use effect çalışmayı durdurur
    // adGuncelle("Ahmet Yılmaz:") // statik oldugu icin calismayı durduracak
  }

  return (
    <>
      <p>{sayac}</p>
      <button onClick={ ()=>{  sayacGuncelle( oncekiDeger=>oncekiDeger+1)  } }>Arttır</button>

      <p>Ad: {ad}</p>
      <button onClick={adFonksiyonu}>Ad Güncelle</button>
    </>
  );
}

export default App;
