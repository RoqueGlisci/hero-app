import {ChangeEvent, useState} from 'react';

export const useForm = <T extends object> (initialForm: T) => {

    const [formState, setFormState] = useState<T>(initialForm)

    // const {username, email, password} = formState

    const onInputChange = ({target}: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = target
        // console.log({name, value});
        setFormState({
            ...formState,
            [name]: value
        })
        
    } 
    // console.log(formState);
    
    const onResetForm = () => {
      setFormState(initialForm)
    }

  return {
    formState,
    onInputChange,
    ...formState,
    onResetForm
  }
}
