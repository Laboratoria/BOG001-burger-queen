import burger from '../img/LogoBurgerlab.png';
import '../components/Home.scss';

function Home(){
  return (
    /*<head>
        <title>Helivisuel</title>
        <link rel="shortcut icon" href="img/icon.png"/>
    </head>*/
    <section className="Home">
        <img src={burger} className="App-logo" alt="logo" />
    </section>
  );
}

export default Home;
