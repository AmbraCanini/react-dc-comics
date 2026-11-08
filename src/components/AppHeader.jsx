

import Logo from "../../images/img/dc-logo.png";
import Jumbotron from "../../images/img/jumbotron.jpg";

function AppHeader() {

    const linkMenu = [
		{ id: 1, text: 'characters', url: '#' },
		{ id: 2, text: 'comics', url: '#comics' },
		{ id: 3, text: 'movies', url: '#movies' },
		{ id: 4, text: 'games', url: '#games' },
		{ id: 5, text: 'shop', url: '#shop' },
	];

	const links = linkMenu.map(elemento => {
		return <li key={elemento.id}><a href={elemento.url}>{elemento.text}</a></li>
	});

      return (
        <header>
             <div className="header-top">
            <img className="header-logo" src={Logo} alt="DC Comics Logo" />
              <nav>
                <ul>
                    {links}
                </ul>
            </nav>
            </div>
              <img className="jumbotron" src={Jumbotron} alt="DC Comics characters" />
        </header>
    );
}



export default AppHeader;

