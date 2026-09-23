export const Card = (props) => {
  return (
    <div style={{ border: "2px solid black", height: "300px", width: "300px" }}>
      <h1>MY CAR</h1>
      <p>
        <img
          // src="https://tse2.mm.bing.net/th/id/OIP.KRl-uRQRqTDjvq_a83tSoQHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
          height={"100px"}
          width={"100px"}
          src={props.image}
        />
        <h2>CAR NAME:{props.name}</h2>
        <h2>PRICE: {props.price}</h2>
      </p>
    </div>
  );
};
