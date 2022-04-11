import { LinkPreview } from "@dhaiwat10/react-link-preview";

const Nature = () => {
  const arr = [
    "https://goo.gl/maps/QBkcWdybZHp1zRi9A",
    "https://goo.gl/maps/7nbYN59crBnEU8vD7",
    "https://goo.gl/maps/yoETe6B6cUEYkFki6",
    "https://www.google.com/maps/place/Wedge+Rafting/@50.1129874,-122.9570949,17z/data=!3m2!4b1!5s0x54873cb506af309b:0xf762f7df40359297!4m5!3m4!1s0x5487234b7aa03773:0xf7572e0c62dc9197!8m2!3d50.1129874!4d-122.9549062",
    "https://goo.gl/maps/4eEkXDNhg28mgrTr7",
    "https://goo.gl/maps/V4oKyZB4Bp1GEo2k7"
  ];
  return (
    <section>
      <div className="flexy">
        {arr.map((item) => (
          <LinkPreview
            url={item}
            descriptionLength="100"
            className="mar-x"
            height="400px"
            width="250px"
          />
        ))}
      </div>
    </section>
  );
};

export default Nature;
