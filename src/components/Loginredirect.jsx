import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Loginredirect = ({ children }) => {
    let token = localStorage.getItem("user-token")
    let navigate = useNavigate()

    useEffect(() => {
        if (token) {
            navigate("/home");
        }
    }, [token, navigate])

    return children;
}

export default Loginredirect;