import { CommentStars } from "./CommentStars"

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
            {data && data.description.list.map(el => (
              <li className="list__item list__item_marker_orange text">
                {el}
              </li>
            ))}
          </ul>
        </div>
        <div data-tab={2} className="tabs__content">
          <ul className="list list_markers">
            {data && data.composition.map(el => (
              <li className="list__item list__item_marker_orange text">
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
              {data && data.comments.map(el => (
                <article className="review reviews__item">
                  <div className="raiting review__raiting">
                    <CommentStars data={el.stars} />
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
            <div className="reviews__own">
              <article className="review-form">
                <h3 className="title">Оставить отзыв</h3>
                <form
                  method="post"
                  action=""
                  className="form js-form-validate"
                >
                  <div className="form__row">
                    <div className="form__col form__col_width_130">
                      <label className="form__label">Оцените товар</label>
                    </div>
                    <div className="form__col">
                      <div className="raiting">
                        <input
                          id="raiting1-item5"
                          name="Review[raiting]"
                          type="radio"
                          defaultValue={5}
                          required=""
                          className="raiting__check"
                        />
                        <label
                          htmlFor="raiting1-item5"
                          className="raiting__star raiting__star_choose"
                        >
                          5 звезда
                        </label>
                        <input
                          id="raiting1-item4"
                          name="Review[raiting]"
                          type="radio"
                          defaultValue={4}
                          required=""
                          className="raiting__check"
                        />
                        <label
                          htmlFor="raiting1-item4"
                          className="raiting__star raiting__star_choose"
                        >
                          4 звезды
                        </label>
                        <input
                          id="raiting1-item3"
                          name="Review[raiting]"
                          type="radio"
                          defaultValue={3}
                          required=""
                          className="raiting__check"
                        />
                        <label
                          htmlFor="raiting1-item3"
                          className="raiting__star raiting__star_choose"
                        >
                          3 звезды
                        </label>
                        <input
                          id="raiting1-item2"
                          name="Review[raiting]"
                          type="radio"
                          defaultValue={2}
                          required=""
                          className="raiting__check"
                        />
                        <label
                          htmlFor="raiting1-item2"
                          className="raiting__star raiting__star_choose"
                        >
                          2 звезды
                        </label>
                        <input
                          id="raiting1-item1"
                          name="Review[raiting]"
                          type="radio"
                          defaultValue={1}
                          required=""
                          className="raiting__check"
                        />
                        <label
                          htmlFor="raiting1-item1"
                          className="raiting__star raiting__star_choose"
                        >
                          1 звёзд
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form__row">
                    <div className="form__col form__col_width_130">
                      <label htmlFor="review-name" className="form__label">
                        Ваше имя
                      </label>
                    </div>
                    <div className="form__col form__col_width_260">
                      <input
                        id="review-name"
                        name="Review[name]"
                        required=""
                        className="input"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="form__row">
                    <div className="form__col form__col_width_130">
                      <label htmlFor="review-email" className="form__label">
                        Электронная почта
                      </label>
                    </div>
                    <div className="form__col form__col_width_260">
                      <input
                        id="review-email"
                        name="Review[email]"
                        type="email"
                        required=""
                        className="input"
                      />
                    </div>
                  </div>
                  <div className="form__row">
                    <div className="form__col form__col_width_130">
                      <label htmlFor="review-message" className="form__label">
                        Ваше сообщение
                      </label>
                    </div>
                    <div className="form__col form__col_width_400">
                      <textarea
                        id="review-message"
                        name="Review[message]"
                        required=""
                        className="textarea"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="form__row review-form__antispam-row">
                    <div className="form__col form__col_width_130">
                      <label htmlFor="review-spam" className="form__label">
                        Защита от спама
                      </label>
                    </div>
                    <div className="form__col form__col_width_130">
                      <input
                        id="review-spam"
                        name="Review[spam]"
                        required=""
                        className="input"
                        type="text"
                      />
                      <a
                        href="javascript:void(0);"
                        className="link review-form__refresh-captcha text"
                      >
                        Обновить картинку
                      </a>
                    </div>
                    <div className="form__col form__col_width_130">
                      <img
                        src="assets/images/capcha.jpg"
                        alt="защита от спама"
                      />
                    </div>
                  </div>
                  <div className="form__row review-form__btn-row">
                    <div className="form__col form__col_width_280">
                      <button
                        type="submit"
                        className="btn review-form__submit"
                      >
                        Оставить отзыв
                      </button>
                    </div>
                    <div className="form__col review-form__reset-col">
                      <button type="reset" className="form__reset link text">
                        Очистить форму
                      </button>
                    </div>
                  </div>
                </form>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}