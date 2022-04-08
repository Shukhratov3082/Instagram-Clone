import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Privateroute = ({ children }) => {
    let token = localStorage.getItem("user-token")
    let navigate = useNavigate()

    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
    }, [token, navigate])

    return children;
}

export default Privateroute;