import { Form, FormControlLabelProps, FormControlProps, FormGroupProps } from 'rsuite'

interface Props extends FormGroupProps, FormControlProps {
  label: string
  // Partial<T> 是一个泛型工具类型，它将一个类型 T 的所有属性变为可选属性。
  controlLabelProps?: Partial<FormControlLabelProps>
  controlProps?: Partial<FormControlProps>
}

export function FormGroup({ controlId, label, name, rule, controlLabelProps, controlProps, ...formGroupProps }: Props) {
  return (
    <Form.Group controlId={controlId} {...formGroupProps}>
      <Form.ControlLabel {...controlLabelProps}>{label}</Form.ControlLabel>
      <Form.Control name={name} rule={rule} {...controlProps} />
    </Form.Group>
  )
}

export default FormGroup
