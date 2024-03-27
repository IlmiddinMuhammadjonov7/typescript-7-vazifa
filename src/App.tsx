import { CiSearch, CiHeart, CiShare2 } from "react-icons/ci";
import { GiHamburgerMenu, GiSofa } from "react-icons/gi";
import { GrShieldSecurity } from "react-icons/gr";
import { LuBadgeCheck } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { FaKitchenSet } from "react-icons/fa6";
import { MdDinnerDining, MdBed } from "react-icons/md";
import { ImOffice } from "react-icons/im";
import { SiVauxhall } from "react-icons/si";
import { FaFacebook, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

const App = () => {
  return (
    <div className="home">
      <div className="navbar">
        <ul>
          <li>DudeShape</li>
        </ul>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Features</li>
          <li>Contact</li>
        </ul>
        <ul>
          <li>
            <CiSearch />
          </li>
          <li>
            <GiHamburgerMenu />
          </li>
        </ul>
      </div>
      <div className="header">
        <img src="./Rectangle 91.svg" alt="" />
        <div>
          <h1>We Help You Make Modern Furniture</h1>
          <p>
            All of our furniture uses the best materials and choices for our
            customers.All of our furniture uses the best materials{" "}
          </p>
          <button>Explore More</button>
        </div>
      </div>
      <div className="pay">
        <h1>Trusted by 20,000+ companies</h1>
        <img src="./Frame 66.svg" alt="" />
      </div>
      <div className="main">
        <img src="./Group 8988.svg" alt="" />
        <div className="main_2">
          <h1>About Us</h1>
          <p className="about">
            All of our furniture uses the best materials and choices for our
            customers.All of our furniture uses the best materials{" "}
          </p>
          <div className="main_item">
            <GrShieldSecurity className="icon" />
            <div>
              <span>Best Quality</span>
              <span>
                All of our furniture uses the best materials and choices
              </span>
            </div>
          </div>
          <div className="main_item">
            <LuBadgeCheck className="icon" />
            <div>
              <span>100% Secure</span>
              <span>
                All of our furniture uses the best materials and choices
              </span>
            </div>
          </div>
          <div className="main_item">
            <TbTruckDelivery className="icon" />
            <div>
              <span>Free Shpping</span>
              <span>
                All of our furniture uses the best materials and choices
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="qism">
        <h1>Our Popular Furniture</h1>
        <p>
          All of our furniture uses the best materials and choices for our
          customers.All of our furniture uses the best materials and choices for
          our customers.
        </p>
        <div className="list">
          <div className="item">
            <img src="./Rectangle 34 (1).svg" alt="" />
            <div className="item_2">
              <h4>White Swan Chair </h4>
              <div>
                <CiHeart className="icon_2" />
                <CiShare2 className="icon_2" />
              </div>
            </div>
            <div className="qism_2">
              <span>$40</span>
              <button>Buy Now</button>
            </div>
          </div>
          <div className="item">
            <img src="./Rectangle 36.svg" alt="" />
            <div className="item_2">
              <h4>White Swan Chair </h4>
              <div>
                <CiHeart className="icon_2" />
                <CiShare2 className="icon_2" />
              </div>
            </div>
            <div className="qism_2">
              <span>$40</span>
              <button>Buy Now</button>
            </div>
          </div>
          <div className="item">
            <img src="./Rectangle 38.svg" alt="" />
            <div className="item_2">
              <h4>White Swan Chair </h4>
              <div>
                <CiHeart className="icon_2" />
                <CiShare2 className="icon_2" />
              </div>
            </div>
            <div className="qism_2">
              <span>$40</span>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="category">
        <h1>All Furniture</h1>
        <ul className="category_list">
          <li>Shop By Room</li>
          <li>Shop By Category</li>
          <li>Shop By Style</li>
        </ul>
        <div className="struc">
          <img src="./Group 8990.svg" alt="" />
          <div className="toplam">
            <div>
              <GiSofa className="icon_3" />
              <span>Living Room</span>
            </div>
            <div>
              <FaKitchenSet className="icon_3" />
              <span>Living Room</span>
            </div>
            <div>
              <MdDinnerDining className="icon_3" />
              <span>Living Room</span>
            </div>
            <div>
              <MdBed className="icon_3" />
              <span>Living Room</span>
            </div>
            <div>
              <ImOffice className="icon_3" />
              <span>Living Room</span>
            </div>
            <div>
              <SiVauxhall className="icon_3" />
              <span>Living Room</span>
            </div>
          </div>
        </div>
      </div>
      <div className="ostki">
        <img src="./Group 9009.svg" alt="" />
        <div>
          <h1>Our customers are verry importan to us</h1>
          <p>
            All of our furniture uses the best materials and choices for our
            customers.All of our furniture uses the best materials and choices
            for our customers.
          </p>
          <img src="./Group 9007.svg" alt="" />
        </div>
      </div>
      <div className="foter_tepa">
        <h1>Subscribe to get the latest news about us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
          tempor incididunt ut labore at dolore.
        </p>
        <form>
          <input type="text" placeholder="Enter your email" />
          <button className="btn">Register</button>
        </form>
      </div>
      <div className="footer">
        <ul>
          <li>DudeShape</li>
          <li>
            Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed
            eiusmod tempor incididunt ut labore .
          </li>
          <li>Follow Us :</li>
          <li>
            <FaFacebook />
            <FaInstagramSquare />
            <FaYoutubeSquare />
            <AiFillTwitterCircle />
          </li>
        </ul>
        <ul>
          <li>Take a tour</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Product</li>
          <li>Support</li>
        </ul>
        <ul>
          <li>Our company</li>
          <li>About Us</li>
          <li>Blog</li>
          <li>Media</li>
          <li>Contact Us</li>
        </ul>
        <ul>
          <li>Subscribe</li>
          <li>Subscribe to get the latest news from us</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
