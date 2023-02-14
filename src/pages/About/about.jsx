import React from "react";
import "./about.css";
import { useNavigate } from "react-router-dom";
import product10 from "./Assets/10.webp";
import product11 from "./Assets/11.webp";
import product12 from "./Assets/12.webp";

export const About = () => {
  const navigate = useNavigate();
  return (
    <div className="About-page-1">
      <div className="About-page-2">
        <h1><u>The world of Arts</u></h1>

        <p className="quote">“In art, the hand can never execute anything higher than the heart can imagine.” – <t>Ralph Waldo Emerson</t></p>

        <article>Mark Rothko, an American artist who described himself as an “abstract painter”, once said about art that he was not the kind of person interested in the relationship of form, color or similars. He didn’t define himself as an abstractionist, but rather as a person interested only in expressing basic human emotions such as doom, tragedy, ecstasy and so on.</article>
        <article>Art is a diverse range of human activity, and resulting product, that involves creative or imaginative talent expressive of technical proficiency, beauty, emotional power, or conceptual ideas</article>

        <div className="Image">
          <article className="product10" style={{ backgroundImage: `url(${product10})` }}>
            <h1 className="product10_text">“The object of art is not to reproduce reality, but to create a reality of the same intensity.”</h1>
          </article>
          <article className="product11" style={{ backgroundImage: `url(${product11})` }}>
            <h1 className="product11_text">"Painting is just another way of keeping a diary."</h1>
          </article>
          <article className="product12" style={{ backgroundImage: `url(${product12})` }}>
            <h1 className="product12_text1">“Every artist dips his brush in his own soul, and paints his own nature into his pictures.”</h1>
            <h1 className="product12_text2">“Color is the place where our brain and the universe meet.”</h1>
          </article>
        </div>

        <article>With regards to the literary art and the musical arts, Aristotle considered epic poetry, tragedy, comedy, Dithyrambic poetry and music to be mimetic or imitative art, each varying in imitation by medium, object, and manner.For example, music imitates with the media of rhythm and harmony, whereas dance imitates with rhythm alone, and poetry with language. The forms also differ in their object of imitation. Comedy, for instance, is a dramatic imitation of men worse than average; whereas tragedy imitates men slightly better than average. Lastly, the forms differ in their manner of imitation-through narrative or character, through change or no change, and through drama or no drama.Aristotle believed that imitation is natural to mankind and constitutes one of mankind's advantages over animals.</article>

        <p className="quote">“Imagination is the beginning of creation. You imagine what you desire, you will what you imagine, and at last, you create what you will.” – <t>George Bernard Shaw</t></p>

        <div className="GoForShop">
          <img className="ClickMe" onClick={() => navigate("/")} src={require('./Assets/13.png')} alt="ClickMe" />
          <div className="ForShopping">for shopping...</div>
        </div>
      </div>
    </div>
  )
};