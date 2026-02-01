import React from 'react'

const Lower = () => {
    return (
        <>
            <div className='skills__content'>
                <h3 className='skills__title'>
                    <i className='uil uil-desktop-alt'></i> Languages </h3>

                <div className='skills__box'>
                    <div className='skills__group'>
                        <div className='skills__data'>
                               <i className='bx bx-badge-check'></i>
                            <div>
                                <h3 className='skills__name'>JavaScript</h3>
                                <span className='skills__level'>Intermediate</span>
                            </div>

                        </div>
                        <div className='skills__data'>
                                                     <i className='bx bx-badge-check'></i>
                            <div>
                                <h3 className='skills__name'>C/C++</h3>
                                <span className='skills__level'>Intermediate</span>
                            </div>
                        </div>

                        <div className='skills__data'>
                            <i className='bx bx-badge-check'></i>
                            <div>
                                <h3 className='skills__name'>Java</h3>
                                <span className='skills__level'>Basic</span>
                            </div>
                        </div>


                        <div className='skills__data'>
                            <i className='bx bx-badge-check'></i>
                            <div>
                                <h3 className='skills__name'>Python</h3>
                                <span className='skills__level'>Basic</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='skills__content'>
                <h3 className='skills__title'>
                    <i className='uil uil-apps skills__title-icon'></i> Miscellaneous
                </h3>

                <div className='skills__box'>
                    <div className='skills__group'>
                        <div className='skills__data'>
                            <i className='bx bx-badge-check'></i>
                            <div>
                                <h3 className='skills__name'>Git/GitHub</h3>
                                <span className='skills__level'>Intermediate</span>
                            </div>
                        </div>
                        <div className='skills__data'>
                            <i className='bx bx-badge-check'></i>
                            <div>
                                <h3 className='skills__name'>Web Performance Optimization</h3>
                                <span className='skills__level'>Intermediate</span>
                            </div>
                        </div>

                        <div className='skills__data'>
                            <i className='bx bx-badge-check'></i>
                            <div>
                                <h3 className='skills__name'>Docker</h3>
                                <span className='skills__level'>Beginner</span>
                            </div>
                        </div>

                        <div className='skills__data'>
                            <i className='bx bx-badge-check'></i>
                            <div>
                                <h3 className='skills__name'>Figma</h3>
                                <span className='skills__level'>Intermediate</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Lower;