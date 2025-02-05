function Header(){
    return (<header className="header">
        <div className="title">
            <h1 className="title">
                Kaushik Surineedi
            </h1>
            <h3 className="title">
                Software Engineer
            </h3>
        </div>
        <nav className="items">
            <a className="item" href="#about">
                About Me
                <svg fill="#ffffff" className="svgs" viewBox="0 0 1000 1000" version="1.1" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 1000 1000"
                     xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> <g> <g
                        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"> <path
                        d="M3144.5,4985.6l-42.1-34.5l23-587.6c13.4-323.5,17.2-610.6,11.5-635.5c-19.1-78.5-97.6-82.3-231.6-11.5c-63.2,32.5-137.8,59.3-166.5,59.3c-103.4,0-101.4-30.6,36.4-654.6l128.2-580l9.6-650.8l11.5-650.8l90-254.6c114.8-321.6,181.8-461.3,323.5-673.8c147.4-220.1,375.2-447.9,589.5-589.5c91.9-59.3,164.6-118.7,162.7-128.2c-1.9-11.5-9.6-59.3-17.2-107.2l-11.5-90l-290.9-7.7c-246.9-7.6-313.9-17.2-446-59.3c-183.8-61.3-344.5-162.7-480.4-302.4c-166.5-172.3-1052.7-1355.2-1125.5-1500.6c-111-225.9-124.4-308.2-124.4-819.2c0-591.5,34.5-731.2,241.2-1008.7c135.9-179.9,402-365.6,587.6-411.5l51.7-13.4v446c0,409.6,3.8,453.6,38.3,509.2c101.4,166.5,302.4,183.8,440.2,34.5l47.9-51.7l9.6-490l9.6-491.9l1871.9-5.7l1870-3.8v455.5c0,434.5,1.9,459.4,44,539.8c103.4,201,367.5,201,474.7,0c32.5-59.3,36.4-114.8,36.4-520.6c0-522.5-19.1-480.4,199.1-424.9c315.8,82.3,604.8,310.1,754.1,595.3c126.3,245,141.7,340.7,134,886.2c-5.7,449.8-7.6,474.7-55.5,606.8c-28.7,76.6-84.2,187.6-124.4,248.8C8109.5-2220.9,7045.3-950,6957.3-881.1c-114.8,91.9-306.3,191.4-434.5,225.9c-63.2,17.2-218.2,38.3-344.5,44l-227.8,13.4l-15.3,76.6c-7.6,42.1-19.1,95.7-24.9,118.7c-7.7,34.5,17.2,59.3,149.3,151.2c212.5,149.3,403.9,348.4,557,576.1c141.6,216.3,202.9,340.7,319.6,666.1l82.3,229.7l7.7,966.6c3.8,677.6,0,1001-15.3,1081.4c-72.7,373.2-367.5,708.2-746.5,847.9l-143.6,51.7l-786.7,5.7l-788.6,5.8l-178,227.8c-218.2,277.5-290.9,312-352.2,164.6c-26.8-61.3-59.3-88.1-112.9-88.1c-13.4,0-134,90-268,201c-287.1,239.3-411.5,335-432.6,335C3194.2,5020,3167.4,5004.7,3144.5,4985.6z"></path> </g> </g> </g></svg>
            </a>

            <a className="item" href="#skills">
                Skills
                <svg className="svgs" fill="#ffffff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"><title>tools</title>
                        <path
                            d="M27.783 7.936c0.959 2.313 0.502 5.074-1.379 6.955-2.071 2.071-5.201 2.395-7.634 1.022l-1.759 1.921 1.255 1.26 0.75-0.75c0.383-0.384 1.005-0.384 1.388 0l6.082 6.144c0.384 0.383 0.384 1.005 0 1.388l-2.776 2.776c-0.383 0.384-1.005 0.384-1.388 0l-6.082-6.144c-0.384-0.383-0.384-1.005 0-1.388l0.685-0.685-1.196-1.199-8.411 9.189c-0.767 0.767-2.010 0.767-2.776 0l-0.694-0.694c-0.767-0.767-0.767-2.010 0-2.776l9.582-8.025-6.364-6.381-2.010-0.001-2.326-3.74 1.872-1.875 3.825 2.341 0.025 1.968 6.438 6.463 1.873-1.568c-1.831-2.496-1.64-6.012 0.616-8.268 1.872-1.872 4.618-2.337 6.925-1.396l-4.124 4.067 3.471 3.471 4.132-4.075zM6.15 25.934c-0.383-0.383-1.004-0.383-1.388 0-0.384 0.384-0.384 1.005 0 1.389 0.384 0.383 1.005 0.383 1.388 0 0.384-0.385 0.384-1.006 0-1.389z"></path>
                    </g>
                </svg>
            </a>
            <a className="item" href="#education">
                Education
                <svg viewBox="0 0 512 512" className="svgs" version="1.1" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff" stroke="#ffffff">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"><title>work-case-filled</title>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="work-case" fill="#ffffff" transform="translate(42.666667, 64.000000)">
                                <path
                                    d="M1.20792265e-13,197.76 C54.5835501,218.995667 112.186031,231.452204 170.666667,234.666667 L170.666667,277.333333 L256,277.333333 L256,234.666667 C314.339546,231.013 371.833936,218.86731 426.666667,198.613333 L426.666667,362.666667 L1.20792265e-13,362.666667 L1.20792265e-13,197.76 Z M277.333333,-1.42108547e-14 L298.666667,21.3333333 L298.666667,64 L426.666667,64 L426.666667,175.146667 C361.254942,199.569074 292.110481,212.488551 222.293333,213.333333 L222.293333,213.333333 L206.933333,213.333333 C136.179047,212.568604 66.119345,199.278929 7.10542736e-15,174.08 L7.10542736e-15,174.08 L7.10542736e-15,64 L128,64 L128,21.3333333 L149.333333,-1.42108547e-14 L277.333333,-1.42108547e-14 Z M256,42.6666667 L170.666667,42.6666667 L170.666667,64 L256,64 L256,42.6666667 Z"
                                    id="Combined-Shape-Copy"></path>
                            </g>
                        </g>
                    </g>
                </svg>
            </a>
            <a className="item" href="#projects">
                Projects
                <svg fill="#ffffff" className="svgs" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 45.637 45.637" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> <g> <path
                        d="M29.775,17.766V3.927h0.972c1.096,0,1.983-0.868,1.983-1.963C32.73,0.868,31.841,0,30.747,0H14.873 c-1.096,0-1.984,0.868-1.984,1.964c0,1.096,0.889,1.963,1.984,1.963h1v13.839c-4.67,2.488-7.858,7.407-7.858,13.071 c0,8.173,6.622,14.8,14.797,14.8c8.175,0,14.811-6.627,14.811-14.8C37.62,25.174,34.445,20.254,29.775,17.766z M33.518,30.99 c-0.011,0-0.019,0-0.028,0c-0.809,0-1.473-0.645-1.486-1.456c-0.065-3.667-2.446-6.894-5.926-8.033 c-0.613-0.201-1.027-0.772-1.025-1.417L25.1,5.859c0.003-0.82,0.722-1.508,1.493-1.508c0.771,0,1.486,0.696,1.482,1.518 l-0.044,13.186c4.116,1.797,6.865,5.857,6.947,10.419C34.993,30.296,34.339,30.99,33.518,30.99z"></path> </g> </g></svg>
            </a>
            <a className="item" href="#contact">
                Contact Me
                <svg className="svgs" viewBox="0 -2.5 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"><title>email [#ffffff1572]</title>
                        <desc>Created with Sketch.</desc>
                        <defs></defs>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -922.000000)"
                               fill="#ffffff">
                                <g id="icons" transform="translate(56.000000, 160.000000)">
                                <path
                                        d="M294,774.474 L284,765.649 L284,777 L304,777 L304,765.649 L294,774.474 Z M294.001,771.812 L284,762.981 L284,762 L304,762 L304,762.981 L294.001,771.812 Z"
                                        id="email-[#ffffff1572]"></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </a>
        </nav>
    </header>);
}

export default Header;