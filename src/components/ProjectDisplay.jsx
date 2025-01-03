import Backdrop from './Backdrop';
import { useState } from 'react';

function ProjectDisplay({ onClose, project, galleries }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [deviceView, setDeviceView] = useState('laptop');
    
    const projectImages = galleries[project];

    const handlePrev = () => {
        const images = projectImages[deviceView];
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        const images = projectImages[deviceView];
        setCurrentIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const switchDevice = (view) => {
        setDeviceView(view);
        setCurrentIndex(0); // Reset to first image when switching views
    };

    const hasMobileImages = projectImages.mobile.length > 0;

    return (
        <Backdrop isVisible={true}>
            <div className='flex justify-between p-3'>
                <button 
                    type="button" 
                    onClick={onClose}
                    className='bg-black bg-opacity-50 p-2 text-neutral rounded-md'
                >
                    Close
                </button>
                <div className=''>
                    {hasMobileImages && (
                        <button 
                            type="button" 
                            onClick={() => switchDevice('mobile')}
                            className={`size-12 bg-black bg-opacity-50 p-2 rounded-md mr-2 ${deviceView === 'mobile' ? 'ring-2 ring-neutral' : ''}`}
                        >
                            <img src="mobile-icon.png" alt="" className='size-fit'/>
                        </button>
                    )}
                    <button 
                        type="button" 
                        onClick={() => switchDevice('laptop')}
                        className={`size-12 bg-black bg-opacity-50 p-2 rounded-md ${deviceView === 'laptop' ? 'ring-2 ring-neutral' : ''}`}
                    >
                        <img src="laptop-icon.png" alt="" className='size-fit'/>
                    </button>
                </div>
            </div>
            <div className={`relative m-2 ${deviceView === 'mobile' ? 'm-auto size-3/5 laptop:size-1/5' : ''}  ${deviceView === 'laptop' ? 'm-auto laptop:size-9/12' : ''}`}>
                <button 
                    onClick={handlePrev}
                    className={`absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-neutral z-10 ${deviceView === 'mobile' ? 'laptop:top-full laptop:-translate-y-0': ""} `}
                >
                    &#8249;
                </button>
                <div className='border-solid border-neutral border-2 rounded-md overflow-hidden'>
                    <div 
                        className="flex transition-transform duration-500" 
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {projectImages[deviceView].map((image, index) => (
                            <img 
                                key={index}
                                src={image} 
                                alt={`Project screenshot ${index + 1}`} 
                                className={`w-full flex-shrink-0 rounded-md ${deviceView === 'mobile' ? 'mx-auto' : ''}`}
                            />
                        ))}
                    </div>
                </div>
                <button 
                    onClick={handleNext}
                    className={`absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-neutral z-10 ${deviceView === 'mobile' ? 'laptop:top-full laptop:-translate-y-0': ""} `}
                >
                    &#8250;
                </button>
            </div>
        </Backdrop>
    );
}

export default ProjectDisplay;