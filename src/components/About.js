// Import Assets
import my_portfolio_pic_2 from "../assets/my_portfolio_pic_2.jpeg";

const About = () => {
  return (
    <div className="about">
      <div className="my_pic">
        <img src={my_portfolio_pic_2} alt="Sagar" />
      </div>
      <section className="myself">
        {/* <h2>About Me</h2> */}
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
          pariatur odio. Maxime, labore nihil illo ea voluptate suscipit aliquid
          animi possimus laudantium fugit obcaecati harum? Assumenda maiores nam
          magnam animi? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eaque voluptatibus vitae, rem corrupti id consectetur! Sapiente
          laboriosam nam excepturi exercitationem natus unde, harum consequatur
          vero amet consectetur quod sunt autem!
        </p>
      </section>
    </div>
  );
};

export default About;
