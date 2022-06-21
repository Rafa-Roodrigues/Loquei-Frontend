
import { Label, Error } from './styles';

export function Input({register, name, id, label, error = false, ...rest}) {
    return (
        <Label error={error} id={id}>
            <span>{label}</span>
            <input {...register(name)} name={name} {...rest}/>
            {error && <Error>{error.message}</Error>}
        </Label>
    )
}