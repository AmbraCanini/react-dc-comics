import comics from "../comics";

function AppMain() {

    return (
        <main>
            <div className="container">
                <h2 className="section-title">CURRENT SERIES</h2>
            </div>

            <section id="comics" className="card-container">

                {comics.map(comic =>
                    <div key={comic.id} className="comic-card">
                        <img src={comic.thumb} alt={comic.title} />
                        <h3>{comic.title}</h3>
                    </div>
                )}

            </section>
            <div className="button">
                <button className="load-more">LOAD MORE</button>
            </div>
        </main>
    );
}

export default AppMain;