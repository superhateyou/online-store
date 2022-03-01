import { CommentStars } from "./CommentStars"
import { CardReview } from "./CardReview"

export const CardTabs = ({ data }) => {
  return (
    <div className="card__tabs tabs">
      <ul className="tabs__nav">
        <li data-tab={1} className="tabs__nav-item tabs__nav-item_active">
          <a href="!#" className="tabs__nav-link">
            Описание
          </a>
        </li>
        <li data-tab={2} className="tabs__nav-item">
          <a href="!#" className="tabs__nav-link">
            Состав
          </a>
        </li>
        <li data-tab={3} className="tabs__nav-item">
          <a href="!#" className="tabs__nav-link">
            Уход
          </a>
        </li>
        <li data-tab={4} className="tabs__nav-item">
          <a href="!#" className="tabs__nav-link">
            Отзывы <span className="card__reviews-num">{data && data.comments.length}</span>
          </a>
        </li>
      </ul>
      <div className="tabs__content-wrapper">
        <div data-tab={1} className="tabs__content tabs__content_active">
          <div className="card__content-block">
            <p className="text">
              {data && data.description.text}
            </p>
          </div>
          <ul className="list list_markers">
            {data && data.description.list.map((el, i) => (
              <li key={`description_${data && data.id}_${i}`} className="list__item list__item_marker_orange text">
                {el}
              </li>
            ))}
          </ul>
        </div>
        <div data-tab={2} className="tabs__content">
          <ul className="list list_markers">
            {data && data.composition.map((el, i) => (
              <li key={`composition_${data && data.id}_${i}`} className="list__item list__item_marker_orange text">
                {el}
              </li>
            ))}
          </ul>
        </div>
        <div data-tab={3} className="tabs__content">
          <p className="text">
            {data && data.care}
          </p>
        </div>
        <div data-tab={4} className="tabs__content">
          <div className="reviews">
            <div className="reviews__other">
              {data && data.comments.map((el, i) => (
                <article key={`comment_${data && data.id}_${i}`}
                  className="review reviews__item">
                  <div className="raiting review__raiting">
                    <CommentStars data={el.stars} id={data && data.id} />
                  </div>
                  <div className="review__message">
                    <p className="text">
                      {el.comment}
                    </p>
                  </div>
                  <footer className="review__footer">
                    <p>
                      Добавил(а) {el.name},
                      <time dateTime={el.date}>
                        {el.dateText}
                      </time>
                    </p>
                  </footer>
                </article>
              ))}
            </div>
            <CardReview />
          </div>
        </div>
      </div>
    </div >
  )
}