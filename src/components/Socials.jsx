import socials from "../data/socials";

function Socials() {
  return (
    <div className="flex gap-7 justify-center mx-auto text-white">
      {socials.map((social) => (
        <a href={social.link} key={social.title} className="social slide-in hide">
          <img src={social.img}></img>
        </a>
      ))}
    </div>
  );
}

export default Socials;
