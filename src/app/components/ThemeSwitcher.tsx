import useTheme from "../hooks/theme";

export default function ThemeSwitcher() {
    const {activeTheme, handleThemeChange} = useTheme();

    if (activeTheme === 'dark') {
        return <p onClick={() => handleThemeChange('light')}>dark</p>;
    } else {
        return <p onClick={() => handleThemeChange('light')}>light</p>
    }
}