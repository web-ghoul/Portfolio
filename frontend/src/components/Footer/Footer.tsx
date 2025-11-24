import Logo from "../Logo/Logo"

const Footer = () => {
    return (
        <footer className={`border-t border-primary_border contain grid justify-stretch items-center gap-20`}>
            <div className="flex justify-between items-start gap-6">
                <div className="grid justify-stretch items-center gap-4">
                    <div className="flex justify-start items-center gap-4">
                        <Logo />
                        <a className="text-gray-400 transition-all hover:text-primary" href={""} target="_blank">
                            <h6>mahmoudaboraya2021@gmail.com</h6>
                        </a>
                    </div>
                    <h5>MERN-Stack Developer</h5>
                </div>

                <div className="grid justify-stretch items-center gap-4">
                    <h5 className="font-bold">Social Media</h5>

                </div>
            </div>
            <p className="text-gray-400 text-center">© Copyright {new Date().getFullYear()}. Made by webGhoul.</p>
        </footer>
    )
}

export default Footer
