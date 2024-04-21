import { useState, useRef } from 'react'

const Experience = (props) => {
    const experience = props?.experience ?? []
    const [more, setMore] = useState(false)
    const expRef = useRef();

    const handleOpen = () => {
        setMore((less) => !less)
        // @ts-ignore
        expRef?.current?.classList.toggle('close', more)
    }

    return (
        <>
            <div id="experience" ref={expRef} className={"close overflow-hidden flex items-start justify-between flex-col sm:flex-row dark:text-light"}>
                <h2 className="w-[15rem] mt-12">EXPERIENCE</h2>
                <div className=" w-full mt-12">
                    {experience?.length && experience.map((xp, i) => (
                        <div key={`experience-holder-${i}`} className={i === experience.length - 1 ? "mb-2" : "mb-12"}>
                            <div className="flex justify-between items-center flex-wrap">
                                <span className="font-semibold text-xl">{xp.name}</span>

                                <span className="text-sm dark:text-gray my-2">{xp.start} - {xp.end}</span>
                            </div>
                            <div className="text-sm mt-0 mb-2 text-blue">{xp.location}</div>

                            <ul className="mt-4">
                                {xp.description.map((xp, i) => (
                                    <li key={`experience-key-${i}`} className="dark:text-gray leading-relaxed">{xp}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={() => handleOpen()}
                id="readmore-button"
                className="readmore-button opacity-50 hover:opacity-100 hover:pt-1 dark:opacity-15 dark:hover:opacity-40"
                aria-label="See more"
            >
                {more
                    ? <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                    : <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                }
            </button>
        </>
    )
}

export default Experience