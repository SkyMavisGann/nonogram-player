import { useRef } from "react";
import type { TouchEvent, RefObject } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import type { WheelEvent as ReactWheelEvent } from "react";

export function usePinchZoom(
  currentCellSize: number,
  setCellSize: (size: number) => void,
  scrollRef: RefObject<HTMLDivElement | null>,
) {
  //a variable that wont get wiped
  const pinchData = useRef({
    mode: "none",
    initalX: 0,
    initalY: 0,

    initalDistance: 0,
    initalCellSize: 0,
  });

  /**
   * Starts the pinch mechanic, sets inital distance and cell size based on math
   * @param event
   */
  const startPinch = (event: TouchEvent<HTMLDivElement>) => {
    if (event.touches.length === 1) {
      pinchData.current.initalX = event.touches[0].clientX;
      pinchData.current.initalY = event.touches[0].clientY;
      pinchData.current.mode = "pan";
    } else if (event.touches.length >= 2) {
      pinchData.current.mode = "zoom";
      const distanceX = event.touches[1].clientX - event.touches[0].clientX;
      const distanceY = event.touches[1].clientY - event.touches[0].clientY;
      pinchData.current.initalDistance = Math.sqrt(
        distanceX * distanceX + distanceY * distanceY,
      );

      pinchData.current.initalCellSize = currentCellSize;
    }
  };

  const movePinch = (event: TouchEvent<HTMLDivElement>) => {
    if (event.touches.length === 1 && pinchData.current.mode === "pan") {
      const distanceX = event.touches[0].clientX - pinchData.current.initalX;
      const distanceY = event.touches[0].clientY - pinchData.current.initalY;

      if (scrollRef.current) {
        scrollRef.current.scrollLeft -= distanceX;
        scrollRef.current.scrollTop -= distanceY;
      }

      pinchData.current.initalX = event.touches[0].clientX;
      pinchData.current.initalY = event.touches[0].clientY;
    } else if (event.touches.length >= 2 && pinchData.current.mode === "zoom") {
      const distanceX = event.touches[1].clientX - event.touches[0].clientX;
      const distanceY = event.touches[1].clientY - event.touches[0].clientY;
      const currentDistanceBetweenFingers = Math.sqrt(
        distanceX * distanceX + distanceY * distanceY,
      );

      const scaleChange =
        currentDistanceBetweenFingers / pinchData.current.initalDistance;
      const newScale = pinchData.current.initalCellSize * scaleChange;
      setCellSize(newScale);
    }
  };

  const endPinch = () => {
    pinchData.current.mode = "none";
  };

  const startMouseDrag = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (event.button === 0) {
      pinchData.current.initalX = event.clientX;
      pinchData.current.initalY = event.clientY;
      pinchData.current.mode = "pan";
    }
  };

  const moveMouseDrag = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (event.button === 0 && pinchData.current.mode === "pan") {
      const distanceX = event.clientX - pinchData.current.initalX;
      const distanceY = event.clientY - pinchData.current.initalY;

      if (scrollRef.current) {
        scrollRef.current.scrollLeft -= distanceX;
        scrollRef.current.scrollTop -= distanceY;
      }

      pinchData.current.initalX = event.clientX;
      pinchData.current.initalY = event.clientY;
    }
  };

  const moveWheel = (event: ReactWheelEvent<HTMLDivElement>) => {
    pinchData.current.initalCellSize = currentCellSize;
    let scrollpercent = 1;
    const scrollspeed = 0.05;
    if (event.deltaY > 0) {
      scrollpercent += scrollspeed;
    } else {
      scrollpercent -= scrollspeed;
    }

    const newScale = pinchData.current.initalCellSize * scrollpercent;
    setCellSize(newScale);
  };

  return {
    startPinch,
    movePinch,
    endPinch,
    startMouseDrag,
    moveMouseDrag,
    moveWheel,
  };
}
