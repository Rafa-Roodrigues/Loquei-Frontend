import { useTheme } from "../../../../hooks/useTheme";

export function Input({label, placeholder, register, name, type = 'text', ...rest}) {
    const { themeIsActive } = useTheme();

    return (
        <div className="box_input">
            <h3>{label}</h3>
            <input 
                {...rest}
                {...register(name)} 
                className={themeIsActive && "dark_input"} 
                type={type} 
                placeholder={placeholder}
            />
        </div>
    );
}