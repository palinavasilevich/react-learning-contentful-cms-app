import heroImg from "../assets/hero.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit earum eius beatae tempore cumque corrupti nam incidunt
            nesciunt, blanditiis aspernatur provident aliquid, reiciendis itaque
            sint doloremque veritatis impedit! Temporibus, dicta.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
