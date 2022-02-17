export const Search = () => {
  return (
    <form className="header__search search">
      <input
        name="search"
        type="search"
        placeholder="Поиск по каталогу"
        className="search__input"
      />
      <button type="submit" className="search__btn">
        <span className="search__btn-icon icon-search" />
      </button>
    </form>
  )
}