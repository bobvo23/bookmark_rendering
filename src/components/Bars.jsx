import { LinkPreview } from "@dhaiwat10/react-link-preview";

const Bars = () => {
  const arr = [
    "https://goo.gl/maps/rnodXFV5o3GPtTBd8",
    "https://goo.gl/maps/xxDw9Rq4LLksjT6p6",
    "https://www.google.com/maps/place/The+Keefer+Bar/@49.2796135,-123.1035125,17z/data=!3m1!4b1!4m5!3m4!1s0x5486717abd55daf5:0x3976ae7d29740ea7!8m2!3d49.2796186!4d-123.101329",
    "https://goo.gl/maps/pNRuudnqVG8H8UZd8",
    "https://goo.gl/maps/eZRd6Z2BHYDWnRMH8"
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

export default Bars;
