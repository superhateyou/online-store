export const CardRow = ({ data, index }) => {
    if (data.isStock === true) {
        return (
            <div className="checkbox-tile checkbox-tile_size_extra">
                <input
                    id={`card-size-${data && data.index}`}
                    name={`Card[${data && data.size}]`}
                    type="radio"
                    defaultValue={data && data.size}
                    required=""
                    className="checkbox-tile__elem"
                />
                <label htmlFor={`card-size-${data && data.index}`} className="checkbox-tile__label">
                    {data && data.size}
                </label>
            </div>
        )
    }
    if (data && data.isStock === false) {
        return (
            <div className="checkbox-tile checkbox-tile_size_extra">
                <input
                    id={`card-size-${data && data.index}`}
                    name={`Card[${data && data.size}]`}
                    type="radio"
                    defaultValue={data && data.size}
                    required=""
                    disabled
                    className="checkbox-tile__elem"
                />
                <label htmlFor={`card-size-${data && data.index}`} className="checkbox-tile__label">
                    {data && data.size}
                </label>
            </div>
        )
    }

}