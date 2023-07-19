import SelectPicker from 'rsuite/esm/SelectPicker'

const data = ['Eugenia', 'Bryan', 'Linda', 'Nancy', 'Lloyd', 'Alice', 'Julia', 'Albert'].map((item) => ({
  label: item,
  value: item
}))

export const Select = ({ name, change, value }) => (
  <>
    <SelectPicker
      name={name}
      value={value}
      onChange={(v, e) => change(v, e, name)}
      data={data}
      style={{ width: 224 }}
    />
  </>
)
