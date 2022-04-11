import { LinkPreview } from "@dhaiwat10/react-link-preview";

const Ramen = () => {
  const arr = [
    "https://goo.gl/maps/nvrX2AXnpZxqy9fQ8",
    "https://goo.gl/maps/rgLnaqo7Z1R31zzs7",
    "https://goo.gl/maps/Wit1FTHXefhETapL7",
    "https://goo.gl/maps/W9vZwzaMufn1pV459",
    "https://goo.gl/maps/VRjcJ2CubaV363Jr8",
    "https://goo.gl/maps/LWBgxaH3skK5mhNf7",
    "https://goo.gl/maps/u5eMSkdYgSRx49p99",
    "https://goo.gl/maps/oC89zGXVR6BhKJQq8"
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

export default Ramen;
