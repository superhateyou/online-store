import { CustomerComponent } from "./CustomerComponent"

export const CustomerInfo = ({ data, handler }) => {
  return (
    <fieldset className="form__fieldset">
      {data?.label ? <legend className="form__title">{data.label}</legend> : null}
      {data?.fields?.map(el => (
        <CustomerComponent data={el} handler={handler} key={el.id} />
      ))}
    </fieldset>
  )
}