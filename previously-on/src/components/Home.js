import { useState } from "react";
import GetSeries from "./requests/getSeries";
import home_style from "./style/home_style";

export default function Home() {
    const [series, setSeries] = useState([]);

    if (series.length < 1) {
        GetSeries().then(res => setSeries(res.data.shows));
    }
    return (
        <>
            <header>
                <h1>Home Page</h1>
            </header>
            <div style={home_style.container}>
                {series.length > 0 && series.map((s) => {
                    return (
                        <div style={home_style.cards} key={s.id}>
                            <img style={home_style.poster} alt={s.title} src={s.images.poster}/>
                            <p>Titre : {s.title}</p>
                            <p>Nombre de saisons : {s.seasons}</p>
                            <p>Nombre d'épisodes : {s.episodes}</p>
                            <p>Déscription : {s.description}</p>
                            <p>Note : {s.notes.mean}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
