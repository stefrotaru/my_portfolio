import socials from "../data/socials";

function Socials() {
  return (
    <div className="flex gap-7 justify-center items-center mx-auto text-white">
      {socials.map((social) => (
        <a aria-label="social" target="_blank" rel="noopener noreferrer" href={social.link} key={social.title} className="social slide-in hide">
          <img src={social.img} alt={social.title}></img>
        </a>
      ))}
    </div>
  );
}

export default Socials;
