import React from 'react'

const Experience = (props) => {
    const experience = props.experience ?? []

    return (
        <>
        <div id="experience" class="flex items-start justify-between flex-col sm:flex-row dark:text-light">
        <h2 class="w-[15rem] mt-12">EXPERIENCE</h2>
        <div class="w-full mt-12">
            {experience.length && experience.map((xp) => (
                <div class="mb-12">
                <div class="flex justify-between items-center flex-wrap">
                    <span class="font-semibold text-xl">{xp.name}</span>

                    <span class="text-sm dark:text-gray my-2">{xp.start} - {xp.end}</span>
                </div>
                <div class="text-sm mt-0 mb-2 text-blue">{xp.location}</div>

                <ul class="mt-4">
                    {xp.description.map((xp) => (
                    <li class="dark:text-gray leading-relaxed">{xp}</li>
                    ))}
                </ul>
                </div>
            ))}
        </div>
        </div>

        {/* <div class="container text-center mt-4">
            <button
                id="readmore-button"
                class="readmore-button"
                aria-label="See more"
                />
        </div> */}
        </>
    )
}

export default Experience