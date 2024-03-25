import React from "react";
import MilletFrance from "../Assets/millet_france.png";
import BackgroundImage from "../Assets/about-background.png";
import BannerBackground from "../Assets/home-banner-background.png";


const Market = () => {
  const workInfoData = [
    {
      title: "Intercultural Segment: Health-conscious Millennials",
      text: '<p>This segment comprises health-conscious millennials in both France and Kenya who prioritize their well-being and are open to exploring alternative food options like millets.</p><br />' +
            '<p>Both French and Kenyan millennials in this segment are actively seeking healthier food choices and are aware of the nutritional benefits of millets.</p><br />' +
            '<p>They value sustainability and are interested in food products that have a minimal environmental impact, making millets an attractive option due to their low water requirements and ability to grow in marginal lands.</p><br />' +
            '<p>This segment enjoys trying new flavors and cuisines, making them open to incorporating millets into their diets.</p><br />' +
            '<p>Millennials in this segment are likely to be well-versed in technology and use online platforms for information, shopping, and connecting with brands.</p><br />' +
            '<p>Strategic Intercultural Aspect (Data Point): Social Media Engagement,</p>'
    },    
    {
      title: "Creative Brand Communications Idea (BCI)",
      text: '<p>We will capitalize on the social media engagement of health-conscious millennials in both France and Kenya to promote millet-based products.</p><br />' +
            '<p>To advertise our products, we should collaborate with health and wellness influencers in both countries who align with the values of the target segment. These influencers can create engaging content, such as recipe videos, meal plans, and nutritional tips, incorporating millet-based products into their content.</p><br />' +
            '<p>We should also launch a social media campaign encouraging millennials to share their millet-based recipes, innovative ways of using millets, and personal stories about their health journeys. Offer incentives, such as giveaways or features on the brand\'s social media channels, to encourage participation.</p><br />' +
            '<p>We will develop informative and visually appealing content that educates millennials about the nutritional benefits of millets and provides ideas for incorporating millets into their daily meals. This can include blog articles, infographics, and short videos that are easily shareable on social media platforms.</p><br />' +
            '<p>To be a dynamic brand, we could create challenges or contests related to millet-based recipes or meal planning. Encourage participants to share their creations, tag the brand, and use specific hashtags. This fosters engagement and generates user-generated content that promotes millet products.</p><br />' +
            '<p>We could also establish an online community or forum where health-conscious millennials can connect, share their experiences, exchange recipes, and seek advice related to millet consumption. The brand can actively participate in the community, providing guidance and support.</p><br />' +
            '<p>By leveraging social media engagement and targeting health-conscious millennials in both France and Kenya, these creative brand communications ideas can raise awareness, generate buzz, and foster a sense of community around millet-based products.</p><br />'
    }
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Market Research</p>
      </div>

      <div className="market-bannerImage-container">
          <img src={BackgroundImage} alt="" />
      </div>

      <div className="market-bannerImage-container2">
          <img src={BackgroundImage} alt="" />
      </div>

      <p className="primary-text">
          In France, millet is not as widely consumed as other cereals such as wheat, rice or barley.
          However, in recent years, millet has gained in popularity due to its interesting nutritional profile and culinary versatility.<br />
        <br />
          Traditionally, millet was used mainly as bird feed or animal fodder, but it has become increasingly popular as a human food.<br />
        <br />
          Regarding consumption, millet is generally available from organic food shops, specialist grocery shops, and health food markets.
          It can be purchased as whole seeds, millet flour, or millet flakes. Millets can be used in various ways in the kitchen, including
          inside dishes, soups, salads, and desserts. It can also be made into flour for bread, pasta, or cakes.<br />
        <br />
          Although millet consumption is increasing in France, it remains relatively limited compared to other more commonly consumed cereals.
          However, with growing interest in gluten-free diets and healthier food alternatives, we can expect millet consumption to continue to
          grow in the future.<br />
        <br />
          About our customer preference, they are health-conscious, Millets are often associated with health benefits such as being gluten-free,
          rich in fiber, and having a low glycaemic index.<br /> This appeals to consumers who prioritize healthy eating habits. They care about sustainability;
          they are environmentally conscious and may prefer millets due to their low water requirements and ability to grow in marginal agricultural lands.<br />
        <br />
          Regarding purchasing behaviour, specialty stores and health food stores are targeted, Consumers interested in millets may be more inclined to stores
          that offer a wide range of alternative grains and ingredients.<br />
        <br/>
          Consumers are also shopping in the online store to purchase easily millet-based products.<br />
        <br />
          We have to consider that price can influence purchasing decisions. Millet products may be priced higher than conventional grains,
          which could impact the purchasing behaviour of price-sensitive consumers.
      </p>

      <h3 className="primary-text">
        Regarding the demographic aspects:
      </h3>

      <p className="primary-text">
        Consumers who prioritize health and wellness, including those following special diets like gluten-free or vegan,
        are likely to be interested in millets. <br />
        <br />
        Millet consumption may be more prevalent among younger generations, such as millennials and Generation Z,
        who are more open to trying new food products and exploring alternative diets. <br />
        <br />
        Also, urban areas may have a higher concentration of health-conscious individuals and greater accessibility
        to specialty stores offering millet products.<br />
        <br />
        Or last observation is the psychographic aspect.<br />
        <br />
        Consumers who are aware of the environmental impact of food production and seek sustainable options may be more inclined to embrace millets.<br />
        <br />
        Individuals who enjoy exploring new Flavors and cuisines may be attracted to the versatility and unique taste of millets.<br />
        <br />
        Millets have historical and cultural significance in certain regions, and consumers who value tradition and heritage may be drawn to them.
      </p>


      <p className="primary-text">
        Many millet-based products exist and you will see the next few examples.<br />
        <br />
        Millet Flour: Millet flour is a common alternative to wheat flour and can be used in baking various goods like bread, muffins, and pancakes.<br />
        <br />
        Millet Cereal: Millet-based cereals are becoming more popular as a nutritious breakfast option. They are often combined with other grains, seeds,
        and dried fruits to create a balanced and flavourful cereal.<br />
        <br />
        Millet Pasta: Millet pasta is a gluten-free alternative to traditional wheat-based pasta. It offers a lighter texture and can be found in various
        shapes like penne, spaghetti, and fusilli.<br />
        <br />
        Millet Snacks: Millet-based snacks, such as millet chips or puffed millet snacks, are gaining popularity as healthier alternatives to traditional
        potato chips and snacks. They are often flavoured with herbs, spices, or natural seasonings.<br />
        <br />
        Millet Bread: Millet bread is a gluten-free bread option made primarily with millet flour or a combination of millet and other gluten-free flours.
        It provides an alternative for individuals with gluten sensitivities or those following a gluten-free diet.<br />
        <br />
        Millet-based Ready-to-Eat Meals: Pre-packaged ready-to-eat meals that feature millet as a base grain are increasingly available in the market.
        These meals provide convenience and cater to individuals seeking quick and healthy meal options.<br />
        <br />
        Millet-Based Snack Bars: Millet-based snack bars are popular among health-conscious consumers as they offer a convenient, on-the-go option packed
        with nutrients. These bars often combine millet with nuts, seeds, dried fruits, and sweeteners like honey or dates.<br />
        <br /> 
      </p>

      <div className="info-boxes-img-container">
          <img src={MilletFrance} alt="" />
      </div>


      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <h2>{data.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: data.text }} />
          </div>
        ))}
      </div>

      <div className="work-section-info2">
            <h2>Our buyer persona</h2>
            <p>Name:  Élodie Dupont</p>
            <p>Age: 32</p>
            <p>Location: Paris, France</p>
            <p>Profession: Digital marketing consultant</p>
            <br />
            <p>
              Élodie Dupont is a dynamic Parisian who is passionate about her work in digital marketing.<br />
              Because of her gluten intolerance, she has found millet to be a healthy and delicious food alternative.<br />
              She is creative in the kitchen and shares her gluten-free millet recipes on her food blog.<br />
              Élodie is committed to raising awareness of gluten intolerance, giving talks, and leading cookery workshops.<br />
              She is an active member of the gluten-intolerant community in Paris.<br />
              Élodie loves traveling and discovering new cultures and cuisines, always making sure to find gluten-free options when she travels.
            </p>
      </div>

      <div className="work-section-top2">
        <p className="primary-subheading">Conclusion</p>
      </div>

      <p className="primary-text">
        While millet consumption in France is still relatively limited compared to other cereals, it has shown increasing popularity due
        to its nutritional profile and culinary versatility. Millet can be purchased in various forms, such as whole seeds, flour, and
        flakes, and can be used in a wide range of dishes.<br />
        <br />
        Consumers who prioritize health, sustainability, and exploring new flavors and cuisines are likely to be interested in millets.
        Health-conscious individuals, including those following gluten-free or vegan diets, may find millet appealing due to its nutritional benefits.
        Younger generations, such as millennials and Generation Z, may be more open to trying millets and exploring alternative diets.
        Urban areas with a higher concentration of health-conscious individuals and specialty stores offering millet products may see higher millet consumption.<br />
        <br />
        The intercultural segmentation highlights health-conscious millennials in both France and Kenya who prioritize their well-being and are open to exploring
        alternative food options like millets. Social media engagement can be leveraged to promote millet-based products, collaborating with health and wellness influencers,
        launching social media campaigns, and creating engaging content to educate and inspire millennials.<br />
        <br />
        Élodie Dupont, a buyer persona, represents a dynamic Parisian who values health and wellness. She appreciates millet as a gluten-free alternative and actively
        shares her gluten-free millet recipes on her food blog. Her commitment to raising awareness of gluten intolerance and her passion for discovering new cultures
        and cuisines make her an ideal consumer for millet-based products.<br />
        <br />
        Overall, with the growing interest in gluten-free diets, healthier food alternatives, and sustainability, the consumption of millet is expected to continue to grow in the future.<br />
      </p>

      <div className="work-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
    </div>
  );
};

export default Market;
