import my_portfolio_pic_2 from "../assets/my_portfolio_pic_2.jpeg";

const Header = () => {
  return (
    <div className="header">
      <div className="header_img">
        <img src={my_portfolio_pic_2} alt="Sagar" />
      </div>
      {/* --------------------- */}
      <div className="header__content">
        <div className="header_hiAndIntro">
          <div className="header_hi">
            <h1 class="border-gradient border-gradient-green">Hey</h1>
          </div>
          {/* --------------------- */}
          <div className="header_intro">
            <h2 className="border-gradient border-gradient-green">
              , I'm Sagar
            </h2>
          </div>
        </div>
        {/* --------------------- */}
        <div className="header_work">
          <p className="border-gradient border-gradient-purple header_work_1">
            React Developer
          </p>
          {/* --------------------- */}
          <p className="border-gradient border-gradient-purple header_work_2">
            Solidity Beginner
          </p>
          {/* --------------------- */}
          <p className="border-gradient border-gradient-purple header_work_3">
            Blockchain enthusiast
          </p>
        </div>
        {/* --------------------- */}
        {/* <div className="header_getInTouch">
          <a
            className="button"
            href="mailto:sagardeep1811@hotmail.com?subject=Reaching%20out%20you%20via%20your%20portfolio."
          >
            Get In Touch
          </a>
        </div> */}
        {/* --------------------- */}
      </div>
    </div>
  );
};

export default Header;
