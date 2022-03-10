import { DeliveryComponent } from './DeliveryComponent'

export const DeliveryMethod = ({ data, handler }) => {
  return (
    <fieldset className="form__fieldset">
      {data?.label ? <legend className="form__title">{data.label}</legend> : null}
      {data?.columns?.map(el => (
        <div key={el.id}>
          {el.label ? <label className="form__label">{el.label}</label> : null}
          {el.info ? <div className="form__info">
            {el.info}
          </div> : null}
          {el.fields?.map(field => (
            <DeliveryComponent key={field.id} data={field} handler={handler} />
          ))}
        </div>
      ))}
    </fieldset>
  )
}