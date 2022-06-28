import { useEffect, useState } from "react"
import { useTheme } from "../../../../hooks/useTheme";
import { api } from "../../../../services/axios";

import { BoxInput } from '../../styles';

export function ListCategories({register, error}) {
    const [categories, setCategories] = useState([]);
    const { themeIsActive } = useTheme();

    useEffect(() => {
        api.get('/categories')
        .then(response => setCategories(response.data));
      }, [])

    return (
        <BoxInput error={error.categories}>
            <h3>Tipo do espaço</h3>
            <select className={themeIsActive && "dark_input"} {...register('categories')}>
            <option value=''>Selecione uma categoria</option>
            {categories.map((category, index) => (
                <option key={index} value={category.id}>{category.name}</option>
            ))}
            </select>

            {error.categories && <span>{error.categories.message}</span>}  
        </BoxInput>
    )
}