
import logo from "/Logo.png";
import { useTypewriter } from "react-simple-typewriter";

const MainHeader = () => {
    const [text] = useTypewriter({
        words: ["Search for anything...", "Phones", "Laptops", "Gadgets"],
        loop: true,
        typeSpeed: 80,
        deleteSpeed: 50,
        delaySpeed: 2500,
    });
    return (
        <div className="bg-[#1B6392] py-5">
            <div className="flex justify-between items-center container m-auto gap-[176px]">
                {/* Logo */}
                <div className="flex-none">
                    <img src={logo} alt="Logo" />
                </div>

                {/* Search Bar */}
                <div className="grow">
                    <label className="input w-full">
                        <input
                            type="search"
                            required
                            placeholder={text}
                        />
                        <svg
                            className="h-[1em] opacity-50"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                    </label>
                </div>

                {/* Icons */}
                <div className="flex-none">
                    <ul className="flex gap-6 text-white">
                        <li className="cursor-pointer">
                            <div tabIndex={0} role="button">
                                <div className="indicator">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-8 w-8"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                    <span className="badge badge-sm indicator-item text-[#1B6392]">
                                        0
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <i className="fa-regular fa-heart text-[32px] cursor-pointer"></i>
                        </li>
                        <li>
                            <i className="fa-regular fa-user text-[32px] cursor-pointer"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MainHeader;
