import { LinkPreview } from "@dhaiwat10/react-link-preview";

const Asian = () => {
  const arr = [
    "https://goo.gl/maps/p7Pxx9VN3BRYNGng6",
    "https://goo.gl/maps/X3LGbVBJyYD4QK857",
    "https://www.google.com/maps/place/Sala+Thai/@49.2822102,-123.125987,17z/data=!3m1!4b1!4m5!3m4!1s0x5486718002e4ac8d:0xdda00cd942b838b2!8m2!3d49.2822067!4d-123.1238037",
    "https://goo.gl/maps/iUaVa6XHtb9KDkds9"
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

export default Asian;
