import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router"
import { Link } from "react-router-dom";

export const Breadcrumbs = () => {
  const [currentProduct, setCurrentProduct] = useState(undefined)
  const paths = useLocation().pathname.slice(1);
  const particles = paths.split("/")

  useEffect(() => {
    axios.get("/goods.json")
      .then(res => setCurrentProduct(res.data.find(item => item.id === particles[1])))
      .catch(err => console.log(err))
  }, [])

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

