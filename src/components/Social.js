const Social = () => {
  return (
    <div className="social">
      <ul className="social" style={{ "list-style": "none" }}>
        <li>
          <a href="https://github.com/SagarDeep1811/" className="social_button">
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/sagar-deep-603b67218/"
            className="social_button"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href="mailto:sagardeep1811@hotmail.com" className="social_button">
            sagar@email.com
          </a>
        </li>
        {/* <li>
          <a href="https://twitter.com/" className="social_button">
            Twitter
          </a>
        </li> */}
      </ul>
    </div>
  );
};

export default Social;
