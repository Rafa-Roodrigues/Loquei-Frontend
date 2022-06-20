import { Button } from './styles';

import { Spinner } from '../Spinner';

export function ButtonSubmit({disabled = false, title }) {
    return (
        <Button type='submit' disabled={disabled}>
            {disabled ? (
                <>
                    {/* {disabled && <div id="box_disabled"></div>} */}
                    <Spinner/>
                </>
            ) : title}
        </Button>
        
    )
}