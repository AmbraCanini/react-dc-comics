import comics from "../comics";
import digitalComics from "../../images/img/buy-comics-digital-comics.png";
import merchandise from "../../images/img/buy-comics-merchandise.png";
import subscriptions from "../../images/img/buy-comics-subscriptions.png";
import shopLocator from "../../images/img/buy-comics-shop-locator.png";
import powerVisa from "../../images/img/buy-dc-power-visa.svg";

function AppMain() {

const linkService = [
    { id: 1, text: 'DIGITAL COMICS', icon: digitalComics, url: '#' },
    { id: 2, text: 'DC MERCHANDISE', icon: merchandise, url: '#' },
    { id: 3, text: 'SUBSCRIPTION', icon: subscriptions, url: '#' },
    { id: 4, text: 'COMIC SHOP LOCATOR', icon: shopLocator, url: '#' },
    { id: 5, text: 'DC POWER VISA', icon: powerVisa, url: '#' },
];


const links = linkService.map(elemento => {
    return (
        <li key={elemento.id}>
            <img src={elemento.icon} alt="" />
            <a href={elemento.url}>{elemento.text}</a>
        </li>
    );
});

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
<div className="services">
    <ul>
        {links}
    </ul>
</div>
            
        </main>
    );
}

export default AppMain;