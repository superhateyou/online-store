export const ReviewStars = () => {
  return (
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
  )
}