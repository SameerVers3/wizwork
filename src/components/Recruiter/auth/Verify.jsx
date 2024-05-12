import react, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
const baseURL = import.meta.env.VITE_BACKEND_URL

const brokenLink = () => {
    return (
        <div className="w-screen">
            <h2>Link Already Used Or Broken</h2>
        </div>
    )
}

const Verify = () => {
    const [isBroken, setIsBroken] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const url = window.location.href;

        const searchParams = new URLSearchParams(new URL(url).search);
        const token = searchParams.get('token');
        
        

        const verifyToken =( async (token) => {
            try {
                const response = await fetch(baseURL + "/auth/verifyAcount", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        token
                    })
                })

                const data = await response.json();

                if (data.success) {
                    console.log("doneeee");
                    navigate("/login")
                }
                else {
                    console.log("Not doneee");
                    setIsBroken(true);
                }
            }
            catch {
                console.log("error occured")
            }
        })

        verifyToken(token);

    }, [])

    return (
        <div>
            {
                isBroken ? 
                    brokenLink() :
                    <div className="w-screen">
                        <h2>Verifying...</h2>
                    </div>
            }
        </div>
    )
}

export default Verify