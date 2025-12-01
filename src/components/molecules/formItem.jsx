import { Input } from "../atoms/inputs"
import { Label } from "../atoms/labels"

function FormItem({ 
  formFields,
  inputVariant = 'default',
  inputAlign = 'left',
  inputSize = 'small',
  }) {
  return (
    <>
    {
      formFields.map((item, i) => {
        return (
          <div key={i} className='flex flex-col gap-2'>
            <Label
              align='left'
              size='medium'
              text={item.text}
              htmlFor={item.htmlFor}
            />
              <Input
                variant={inputVariant}
                align={inputAlign}
                size={inputSize}
                type={item.type}
                name={item.name}
                value={item.value}  
                placeholder={item.placeholder}
                onChange={item.onChange} 
              />
          </div>
        )
      })
    }
    </>
  )
}

export { FormItem }