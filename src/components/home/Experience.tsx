import { useState, useRef } from 'react'
import Tag from "@components/general/Tag";


const Experience = (props) => {
    const experience = props?.experience ?? []
    // const [more, setMore] = useState(false)
    // const expRef = useRef();

    // const handleOpen = () => {
    //     setMore((less) => !less)
    //     // @ts-ignore
    //     expRef?.current?.classList.toggle('h-96', more)
    // }

    return (
        <>
            <div id="experience" className={"flex-col sm:flex-row dark:text-light mt-12"}>
                <div className={"flex items-center justify-between text-xs"}>
                    <h2>EXPERIENCE</h2>
                        <a
                            href="/cv/Sergio%20Vera%20English%20CV.pdf"
                            id="cv-link"
                            className="not-a text-button flex"
                            download={true}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                <polyline points="10 9 9 9 8 9"></polyline>
                            </svg>
                            <hr
                                className="text-button-separator"
                            />
                            &nbsp;Download CV
                        </a>
                </div>
                <div className=" w-full mt-12">
                    {experience?.length && experience.map((xp, i) => (
                        <div key={`experience-holder-${i}`} className={"text-sm mb-10 md:px-2"}>
                            <div className="flex justify-between items-center flex-wrap">
                                <span className="font-semibold text-xl">{xp.name}</span>

                                <span className="dark:text-gray my-2">{xp.start} - {xp.end}</span>
                            </div>
                            <div className="mt-0 mb-2 text-[--cyan]">{xp.location}</div>

                            <div className="prose leading-relaxed">
                                <ul>
                                    {xp.description.map((xp, i) => (
                                        <li key={`experience-key-${i}`} className="dark:text-gray">{xp}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* <button
                onClick={() => handleOpen()}
                id="readmore-button"
                className="readmore-button"
                aria-label="See more"
            >
                {more
                    ? <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                    : <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                }
            </button> */}
        </>
    )
}

export default Experience