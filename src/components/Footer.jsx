
export default function Footer(){
    const currentYear = new Date().getFullYear()
    return(
        <footer>
            <small>&copy; {currentYear} - Camila Sandoval</small>
        </footer>
    )
}