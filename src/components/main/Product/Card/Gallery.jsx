export const Gallery = ({ data, id }) => (
  <div className="card__photos gallery">
    <div className="gallery__display">
      <img
        src={data && data[0]}
        width={570}
        height={525}
        alt=""
        className="gallery__display-img"
      />
    </div>
    <div className="gallery__thumbnails-container">
      <ul className="gallery__thumbnails">
        <li className="gallery__thumbnails-item gallery__thumbnails-item_active">
          <img
            src={data && data[0]}
            alt=""
            className="gallery__thumbnails-img"
          />
        </li>
        {data && data.slice(1, data.length - 1).map(el => (
          <li key={el} className="gallery__thumbnails-item">
            <img
              src={el}
              alt=""
              className="gallery__thumbnails-img"
            />
          </li>
        ))}
      </ul>
    </div>
  </div>
)