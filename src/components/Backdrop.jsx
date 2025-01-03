import { useEffect } from 'react';

function Backdrop({ children, isVisible }) {
    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup function to restore scrolling when component unmounts
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isVisible]);

    if (!isVisible) return null;
    
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20">
            {children}
        </div>
    );
}

export default Backdrop; 