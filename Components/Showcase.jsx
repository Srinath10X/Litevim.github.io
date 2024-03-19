import "./Showcase.css";
import Image from "next/image";

const Showcase = () => {
  return (
    <>
      <div className="showcase">
        <h2>Showcase</h2>
        <div className="images">
          <Image
            src="/litevim.png"
            width={1360}
            height={720}
            alt="Picture of Litevim"
            className="showcase-img"
          />
        </div>
      </div>
    </>
  );
};

export default Showcase;
