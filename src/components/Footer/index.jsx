import { useTheme } from "../../hooks/useTheme";

import { Container } from './styles';

import { MdLightMode, MdDarkMode } from 'react-icons/md';

export function Footer() {

    const { themeIsActive, changeTheme } = useTheme();

    return (
        <Container>
            <button
            onClick={changeTheme}
            type="button"
            >
            {themeIsActive ? (
            <>
                <MdLightMode/>
                Light Mode
            </>
            ) : (
            <>
                <MdDarkMode/>
                Dark Mode
            </>
            ) }
            </button>
        </Container>
    )
}