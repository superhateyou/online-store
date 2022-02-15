import { CardRow } from "./CardRow"
import { Gallery } from "./Gallery"

export const CardTop = () => {
    return (
        <div className="card__top">
            <Gallery />
            <div className="card__info">
                <header className="card__info-header">
                    <span className="flag flag_type_new">new</span>
                    <h1 className="card__name">Шапка-бини для новорожденных Nokoset</h1>
                    <div className="card__id text">518304-8490-036</div>
                </header>
                <div className="card__content-block">
                    <div className="card__content-row">
                        <div className="card__price card__price_new">1199 р.</div>
                        <div className="card__price card__price_old">1499 р.</div>
                    </div>
                    <div className="card__discount text">Скидка: 20%</div>
                </div>
                <div className="card__content-block">
                    <div className="card__subtitle text">Материал:</div>
                    <div className="text">50% Шерсть</div>
                    <div className="text">50% Акрил</div>
                </div>
                <form method="post" action="" className="form">
                    <div className="card__content-block">
                        <div className="card__subtitle text">Выберите размер:</div>
                        <CardRow />
                        <a href="!#" className="link text">
                            Сообщить о поступлении размера
                        </a>
                    </div>
                    <div className="card__content-block card__content-block_margin_30">
                        <div className="card__subtitle text">Количество:</div>
                        <div className="card__content-row">
                            <div className="card__number input-number">
                                <input
                                    id="card-num"
                                    name="Card[number]"
                                    type="number"
                                    step={1}
                                    min={1}
                                    required=""
                                    className="input-number__elem"
                                />
                                <div className="input-number__counter">
                                    <span className="input-number__counter-spin input-number__counter-spin_more">
                                        Больше
                                    </span>
                                    <span className="input-number__counter-spin input-number__counter-spin_less">
                                        Меньше
                                    </span>
                                </div>
                            </div>
                            <div className="card__avaible text">Есть в наличии</div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        data-popup="good"
                        className="btn form__btn js-popup-open"
                    >
                        Добавить в корзину
                    </button>
                </form>
            </div>
        </div>
    )
}