import { LinkPreview } from "@dhaiwat10/react-link-preview";

const Sushi = () => {
  const arr = [
    "https://goo.gl/maps/jDWGxTdYncd4cXRAA",
    "https://www.google.com/maps/place/Shiro+Japanese/@49.2579481,-123.1167882,17z/data=!3m1!4b1!4m5!3m4!1s0x548673e8be8f5045:0x5024d9e36005073b!8m2!3d49.2579446!4d-123.1146049",
    "https://goo.gl/maps/DkmqsVsFnN9mM7oZ8",
    "https://www.google.com/maps/place/Miku+Vancouver/@49.2869101,-123.1149451,17z/data=!3m2!4b1!5s0x548671824650f80d:0xdd957195d84c5781!4m5!3m4!1s0x54867183bbb82b97:0xc4977021fe4d4a91!8m2!3d49.2869066!4d-123.1127618",
    "https://goo.gl/maps/Vv67zRPTJWxUBHXXA",
    "",
    "",
    ""
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

export default Sushi;
