import Link from "next/link"

const NotFound= () => {
    return (
        <div>
            <h2>Not Found</h2>
            <p>This page DOES NOT EXIST, DO YOU UNDESRATND?</p>
            <Link href={"/"}>Return to Home, NOW.</Link>
        </div>
    )
}

export default NotFound