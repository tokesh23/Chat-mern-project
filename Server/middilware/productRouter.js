import jwt from 'jsonwebtoken'
import User from '../models/usermodels.js'


const productRoute = async (req, res, Next) => {
    try {
        const token = req.cookies.jwt;

        if (!token) {
            return res.status(401).json({ Error: "Unathorized -No Token provider" })
        }
        const decoded = jwt.verify(token, process.env.jwt_SECRET);

        if (!decoded) {
            return res.status(401).json({ Error: "Unathorized -Invalid Token " })
        }

        const user = await User.findById(decoded.userId).select("-password");


        if (!user) {
            return res.status(404).json({ Error: "User is  Not Found" })
        }

        req.user = user

        Next()


    } catch (error) {
        console.log("Error in protectRoute middileware", error.message)
        res.status(500).json({ error: "Internal server error" })

    }
}

export default productRoute