import { useRef } from 'react';
import type { TouchEvent } from 'react';

export function UsePinchZoom(currentCellSize: number, SetCellSize: (size: number) => void) {

    //a variable that wont get wiped
    const pinchData = useRef({
        initalDistance: 0,
        initalCellSize: 0,
    });
    
    /**
     * Starts the pinch mechanic, sets inital distance and cell size based on math
     * @param event 
     */
    const startPinch = (event: TouchEvent<HTMLDivElement>) => {
        if (event.touches.length >= 2) {
            const distanceX = event.touches[1].clientX - event.touches[0].clientX;
            const distanceY = event.touches[1].clientY - event.touches[0].clientY;
            pinchData.current.initalDistance = Math.sqrt(
                distanceX * distanceX + distanceY * distanceY
            );

            pinchData.current.initalCellSize = currentCellSize;
        }
    }

    const movePinch = (event: TouchEvent<HTMLDivElement>) => {
        if (event.touches.length >= 2) {
            const distanceX = event.touches[1].clientX - event.touches[0].clientX;
            const distanceY = event.touches[1].clientY - event.touches[0].clientY;
            const currentDistanceBetweenFingers = Math.sqrt(
                distanceX * distanceX + distanceY * distanceY
            );

            const scaleChange =
            currentDistanceBetweenFingers / pinchData.current.initalDistance;
            const newScale = pinchData.current.initalCellSize * scaleChange;
            SetCellSize(newScale);
        }
    }

    return { startPinch, movePinch};
}

