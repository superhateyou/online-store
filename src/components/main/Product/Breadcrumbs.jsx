import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router"
import { Link } from "react-router-dom";

export const Breadcrumbs = () => {
  const [currentProduct, setCurrentProduct] = useState(undefined)
  const paths = useLocation();
  const particles = paths.pathname.slice(1).split("/")
  const itemUrl = particles[1]

  console.log(paths)

  useEffect(() => {
    axios.get("/goods.json")
      .then(res => setCurrentProduct(res.data.find(item => item.id === itemUrl)))
      .catch(err => console.log(err))
    switch (paths.pathname) {
      case "/":
        document.title = "LASSIE - Главная"
        break;
      case "/catalog":
        document.title = "LASSIE - Каталог"
        break;
      default:
        break
    }
  }, [itemUrl, paths])

  console.log(currentProduct)

  if (particles.length === 2 && currentProduct !== undefined) {
    document.title = `LASSIE - ${currentProduct.name}`
    return (
      <ul className="breadcrumbs">
        <li className="breadcrumbs__item">
          <Link to="/" className="breadcrumbs__name">
            Главная
          </Link>
        </li>
        {currentProduct.category.map((category, i) => (
          <li className="breadcrumbs__item" key={`breadcrumb_${i}`}>
            <Link to="!#" className="breadcrumbs__name">
              {category}
            </Link>
          </li>
        ))}
      </ul>
    )
  } else return null
}

