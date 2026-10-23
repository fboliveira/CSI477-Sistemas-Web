import dotenv from "dotenv"

dotenv.config()

const PORT_DEFAULT = 5000

const PORT = Number(process.env.PORT) || PORT_DEFAULT
const NODE_DEV = process.env.NODE_DEV

export const env = {
    PORT,
    NODE_DEV
}