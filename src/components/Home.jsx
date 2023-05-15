import React from "react";
import { Carousel } from "react-bootstrap";
import NavBar from "./navBar.jsx";
import img4 from "../img/gorra1.jpg";
import img5 from "../img/gorra2.jpg";
import img6 from "../img/gorra3.jpg";
import img1 from "../img/gorra4.jpg";
import img2 from "../img/gorra5.jpg";
import img3 from "../img/gorra6.jpg";
import "../estilos/Home.css";

export default function Home() {
  return (
    <div>
      <NavBar />
      <main className="row">
        <section className="company-description">
          <h2>Gorras Canguro Caps</h2>
          <p>
            Somos una empresa dedicada a laventa de gorras de marca con diseños exclusivos. Ofrecemos productos de alta calidad a precios competitivos. Nuestro compromiso es brindar una experiencia de compra satisfactoria a nuestros clientes y asegurar su plena satisfacción con nuestros productos. ¡Bienvenidos a Gorras Canguro Caps! </p>
        </section>
        <section class="col-md-8">
          <div class="carousel-container">
            <Carousel>
              <Carousel.Item>
                <img class="d-block w-100 carousel-img" src={img1} alt="Gorra New Era" />
                <Carousel.Caption>
                  <h3 class="text-black">New Era</h3>
                  <p class="text-black font-weight-bold">100.000 COP</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img class="d-block w-100 carousel-img" src={img2} alt="Gorra Nike" />
                <Carousel.Caption>
                  <h3 class="text-black">Nike</h3>
                  <p class="text-black font-weight-bold">150.000 COP</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img class="d-block w-100 carousel-img" src={img3} alt="Gorra Adidas" />
                <Carousel.Caption>
                  <h3 class="text-black">Adidas</h3>
                  <p class="text-black font-weight-bold">120.000 COP</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </section>


        <aside className="col-md-4">
          <h3>Gorras de marca</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Marca</th>
                <th>Precio</th>
                <th>Imagen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>New Era</td>
                <td>100.000 COP</td>
                <td>
                  <img src={img1} alt="New Era" width="50" height="50" />
                </td>
              </tr>
              <tr>
                <td>Nike</td>
                <td>150.000 COP</td>
                <td>
                  <img src={img2} alt="Nike" width="50" height="50" />
                </td>
              </tr>
              <tr>
                <td>Adidas</td>
                <td>120.000 COP</td>
                <td>
                  <img src={img3} alt="Adidas" width="50" height="50" />
                </td>
              </tr>
              <tr>
                <td>Puma</td>
                <td>140.000 COP</td>
                <td>
                  <img src={img4} alt="Puma" width="50" height="50" />
                </td>
              </tr>
              <tr>
                <td>Under Armour</td>
                <td>130.000 COP</td>
                <td>
                  <img
                    src={img5}
                    alt="Under Armour"
                    width="50"
                    height="50"
                  />
                </td>
              </tr>
              <tr>
                <td>Volcom</td>
                <td>150.000 COP</td>
                <td>
                  <img src={img6} alt="Volcom" width="50" height="50" />
                </td>
              </tr>
            </tbody>
          </table>
        </aside>
      </main>

      <footer>
        <p>© 2023 Gorras Canguro Caps</p>
      </footer>


    </div>
  );
}