import Kisi from "./Kisi";

function KisiListe(ozellikler) {


    return (
        <div className="container">
            <div className="row">
                {
                    ozellikler.kisiler.map((kisi, index) => {
                        return <Kisi key={index} />
                    })
                }
            </div>
        </div>
    )
}

export default KisiListe