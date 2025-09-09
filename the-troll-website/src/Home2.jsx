import './Home2.css';
import { Link } from 'react-router-dom';
function Home2() {
    return (
        <div className="home2-container">
            <div className="header-section">
                <h1>🎭 WELCOME TO THE MOST SERIOUS WEBSITE ON THE INTERNET 🎭</h1>
                <p className="subtitle"><em>Totally not a troll site, we promise</em></p>
            </div>

            <div className="content-section">
                <div className="news-section section-card">
                    <h2>🏆 BREAKING NEWS 🏆</h2>
                    <p><strong>SCIENTISTS DISCOVER THAT 99% OF STATISTICS ARE MADE UP ON THE SPOT</strong><br />
                        <em>Including this one</em></p>
                    <p>
                        We are proud to announce that our team of highly trained monkeys have successfully taught
                        elephants how to use smartphones. The elephants are now demanding WiFi passwords and
                        complaining about data charges.
                    </p>
                </div>

                <div className="education-section section-card">
                    <h2>📚 EDUCATIONAL SECTION 📚</h2>
                    <h3>Did You Know?</h3>
                    <ul>
                        <li>The word "gullible" has been removed from most dictionaries</li>
                        <li>Bubble wrap was originally invented as wallpaper (this one's actually true!)</li>
                        <li>If you say "my dixie wrecked" slowly, it sounds like something else entirely</li>
                        <li>73% of people will believe any statistic that sounds specific enough</li>
                    </ul>

                    <h3>Fun Facts That May or May Not Be True:</h3>
                    <ul>
                        <li>Penguins can fly, but only when nobody's watching</li>
                        <li>The internet weighs approximately 50 grams (about as much as a strawberry)</li>
                        <li>Your left hand has never touched your left elbow</li>
                        <li>You just tried to touch your left elbow with your left hand</li>
                    </ul>
                </div>

                <div className="mission-section section-card">
                    <h2>🎯 OUR MISSION 🎯</h2>
                    <ul>
                        <li><strong>Spreading Accurate Information</strong> (Results may vary)</li>
                        <li><strong>Professional Web Design</strong> (Clearly demonstrated by our amazing use of Comic Sans)</li>
                        <li><strong>Customer Satisfaction</strong> (Your confusion is our success)</li>
                        <li><strong>Innovation</strong> (We invented the concept of wasting time online)</li>
                    </ul>
                </div>

                <div className="testimonials-section section-card">
                    <h2>🌟 TESTIMONIALS 🌟</h2>
                    <blockquote>
                        "I came here looking for copper and I found gold... wait, no, I found neither. What is this place?"
                        — Confused Visitor #1
                    </blockquote>
                    <blockquote>
                        "This website changed my life! I now question everything I read online."
                        — Satisfied Customer (probably)
                    </blockquote>
                    <blockquote>
                        "I've been staring at this page for 20 minutes and I still don't understand what you're selling."
                        — Potential Customer
                    </blockquote>
                    <blockquote>
                        "My cat walked across my keyboard and somehow ended up here. Even my cat is confused."
                        — Cat Owner
                    </blockquote>
                </div>

                <div className="services-section section-card">
                    <h2>🛒 PREMIUM SERVICES 🛒</h2>
                    <h3>Available Now:</h3>
                    <ul>
                        <li><strong>Invisible Socks</strong> - $29.99 (So invisible, you might already be wearing them)</li>
                        <li><strong>Left-handed Smoke Shifters</strong> - $49.99 (Perfect for rearranging smoke)</li>
                        <li><strong>Dehydrated Water</strong> - $15.99 (Just add water!)</li>
                        <li><strong>Wi-Fi Cables</strong> - $89.99 (For wireless internet that's not quite wireless)</li>
                    </ul>

                    <h3>Coming Soon:</h3>
                    <ul>
                        <li>Digital paper clips</li>
                        <li>Submarine screen doors</li>
                        <li>Solar-powered flashlights (night edition)</li>
                        <li>Bluetooth extension cords</li>
                    </ul>
                </div>

                <div className="contact-section section-card">
                    <h2>📞 CONTACT US 📞</h2>
                    <p>
                        <strong>Phone:</strong> 1-800-WHY-HERE <br />
                        <strong>Email:</strong> help@why-did-you-click-this.com <br />
                        <strong>Address:</strong> 123 Fake Street, Nowhere City, Internet Land <br />
                        <strong>Fax:</strong> Who uses fax anymore? <br />
                    </p>
                    <p>
                        <strong>Business Hours:</strong><br />
                        Monday: 9 AM - 5 PM<br />
                        Tuesday: 5 PM - 9 AM<br />
                        Wednesday: Closed (we're having an existential crisis)<br />
                        Thursday: 25:00 - 30:00 (we operate outside normal time)<br />
                        Friday: By appointment only (appointments not available)<br />
                        Weekend: We don't believe in weekends
                    </p>
                </div>

                <div className="privacy-section section-card">
                    <h2>🔒 PRIVACY POLICY 🔒</h2>
                    <p>
                        We take your privacy very seriously. So seriously, in fact, that we've forgotten where we put our
                        own privacy policy. We promise to keep your data safe by storing it in a very secure location
                        (under my desk, in a shoebox labeled "Important Stuff").
                    </p>
                    <p>By visiting this website, you agree to:</p>
                    <ul>
                        <li>Laugh at least once (legally binding)</li>
                        <li>Tell a friend about this completely normal website</li>
                        <li>Question your life choices that led you here</li>
                        <li>Accept that you've just wasted 5 minutes of your life</li>
                    </ul>
                </div>

                {/* SPECIAL OFFER SECTION - entire div is clickable */}
                <Link to="/special-offer" style={{ textDecoration: "none", color: "inherit" }}>
                    <div className="offer-section section-card" style={{ cursor: "pointer", border: "3px dashed red", padding: "1rem", margin: "2rem 0", textAlign: "center" }}>
                        <h2>🎪 SPECIAL OFFER 🎪</h2>
                        <p>Click anywhere in this box to claim your FREE* invisible prize!</p>
                        <small>
                            *Prize may not actually exist. Invisibility not guaranteed. Side effects may include confusion,
                            mild amusement, and the sudden urge to share this with friends. Not suitable for people who take
                            things too seriously.
                        </small>
                    </div>
                </Link>

                <div className="footer-section">
                    <p><em>This website is powered by pure confusion and the tears of people trying to figure out what we actually do.</em></p>
                    <p><strong>© 2025 Definitely Not A Troll Website | All rights reserved | Some lefts reserved too</strong></p>
                </div>
            </div>
        </div>
    );
}

export default Home2;