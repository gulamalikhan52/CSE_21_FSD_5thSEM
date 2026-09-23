import { Card } from "./components/Card";

const App = () => {
  return (
    <div>
      <Card
        name="PORSCHE"
        price="500000"
        image="https://tse2.mm.bing.net/th/id/OIP.KRl-uRQRqTDjvq_a83tSoQHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
      />
      <Card
        name="FERRARI"
        price="400000"
        image="https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?cs=srgb&dl=pexels-mikebirdy-244206.jpg&fm=jpg"
      />
      <Card
        name="LAMBORGHINI"
        price="600000"
        image="https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?cs=srgb&dl=pexels-mikebirdy-3729464.jpg&fm=jpg"
      />
      <Card
        name="BMW"
        price="300000"
        image="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/3/mercedes-benz-amg-gt-r-coupe-douglas-pittman.jpg"
      />
      <Card
        name="MERCEDES"
        price="450000"
        image="https://img.freepik.com/premium-photo/mercedesbenz-amg-gt-sports-car-supercar-sportcar-sleek-sport-car-performance-cars-luxury-car-automobile-vehicle-automotive-ai_819901-1483.jpg"
      />
    </div>
  );
};
export default App;
