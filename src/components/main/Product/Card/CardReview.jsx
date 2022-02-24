import { ReviewStars } from "./ReviewStars"

export const CardReview = () => {
  return (
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
              <ReviewStars />
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
                href="!#"
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
  )
}