import facebook from "../../images/img/footer-facebook.png";
import twitter from "../../images/img/footer-twitter.png";
import youtube from "../../images/img/footer-youtube.png";
import pinterest from "../../images/img/footer-pinterest.png";
import periscope from "../../images/img/footer-periscope.png";

function AppFooter() {

    return (
        <footer>
            <div className="footer-container">

                <div className="footer-links">
                    <div>
                        <h3>DC COMICS</h3>
                        <ul>
        <li><a href="#">Characters</a></li>
        <li><a href="#">Comics</a></li>
        <li><a href="#">Movies</a></li>
        <li><a href="#">TV</a></li>
        <li><a href="#">Games</a></li>
        <li><a href="#">Videos</a></li>
        <li><a href="#">News</a></li>
    </ul>
                        <h3>SHOP</h3>
                         <ul>
        <li><a href="#">Shop DC</a></li>
        <li><a href="#">Shop DC Collectibles</a></li>
    </ul>
                    </div>

                    <div>
                        <h3>DC</h3>
                        <ul>
                            <li><a href="#">Terms Of Use</a></li>
                            <li><a href="#">Privacy policy</a></li>
                            <li><a href="#">Ad Choices</a></li>
                            <li><a href="#">Advertising</a></li>
                            <li><a href="#">Jobs</a></li>
                            <li><a href="#">Subscriptions</a></li>
                            <li><a href="#">Talent Workshops</a></li>
                            <li><a href="#">CPSC Certificates</a></li>
                            <li><a href="#">Ratings</a></li>
                            <li><a href="#">Shop Help</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3>SITES</h3>
                        <ul>
                            <li><a href="#">DC</a></li>
                            <li><a href="#">MAD Magazine</a></li>
                            <li><a href="#">DC Kids</a></li>
                            <li><a href="#">DC Universe</a></li>
                            <li><a href="#">DC Power Visa</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-logo">
                    <img src="/images/img/dc-logo-bg.png" alt="DC Comics" />
                </div>

            </div>

            <div className="footer-bottom">
    <button>SIGN-UP NOW!</button>

    <div className="footer-social">
        <h3>FOLLOW US</h3>
        <img src={facebook} alt="Facebook" />
        <img src={twitter} alt="Twitter" />
        <img src={youtube} alt="YouTube" />
        <img src={pinterest} alt="Pinterest" />
        <img src={periscope} alt="Periscope" />
    </div>
</div>
        </footer>
    );
}

export default AppFooter;