import socials from "../data/socials";

function Socials() {
  return (
    <div className="flex justify-center mx-auto text-white">
      {socials.map((social) => (
        <a href={social.link} key={social.title} className="p-3 social hide">
          <img src={social.img}></img>
        </a>
      ))}
    </div>
  );
}

export default Socials;
