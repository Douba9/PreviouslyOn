import { useState } from "react";
import GetSeries from "./requests/getSeries";
import home_style from "./style/home_style";

export default function Home() {
    const [series, setSeries] = useState([]);
    const [selectedSeries, setSelectedSeries] = useState(null);
    const [startTime, setStartTime] = useState(null);

    const handleMouseDown = () => {
        setStartTime(Date.now());
    };

    const handleMouseUp = (s) => {
        if (Date.now() - startTime > 500) {
            setSelectedSeries(s);
        }
    };

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
                        <div key={s.id}>
                            <div style={home_style.cards} onMouseDown={handleMouseDown} onMouseUp={() => handleMouseUp(s)}>
                                <div style={home_style.header_cards}>
                                    <div>
                                        <img style={home_style.poster} alt={s.title} src={s.images.poster} />
                                    </div>
                                    <div>
                                        <p>Titre : {s.title}</p>
                                        <p>Déscription : {s.description}</p>
                                    </div>
                                </div>
                                {selectedSeries === s && (
                                    <div>
                                        <p>Genres : {Object.values(s.genres).join(', ')}</p>
                                        <p>Nombre de saisons : {s.seasons}</p>
                                        <p>Nombre d'épisodes : {s.episodes}</p>
                                        <p>Durée moyenne d'un épisode : {s.length} minutes</p>
                                        <p>Note : {s.notes.mean}</p>
                                    </div>
                                )}
                            </div>

                        </div>
                    );
                })}
            </div>
        </>
    );
}
