"use client";
import { useEffect, useRef } from "react";

export default function ShapelerEyes({ pupil="Normal", type, baby=false, male=true }: { pupil?: "Normal" | "Blink" | "Crazy" | "Dizzy" | "Excited" | "Small", type: "Bloopler" | "Googler" | "Sprickler" | "Stronkler", baby?:boolean, male?:boolean }) {

    const offsets = {
        "Bloopler": { eyes: { x:40, y:48 }, pupils: { x:80, y:48 } },
        "Googler": { eyes: { x:40, y:40 }, pupils: { x:80, y:40 } },
        "Sprickler": { eyes: { x:20, y:40 }, pupils: { x:60, y:40 } },
        "Stronkler": { eyes: { x:60, y:48 }, pupils: { x:100, y:48 } },
    }

    const babyOffSets = { 
        "Bloopler": { eyes: { x:28, y:24 }, pupils: { x:48, y:24 } },
        "Googler": { eyes: { x:36, y:16 }, pupils: { x:56, y:16 } },
        "Sprickler": { eyes: { x:4, y:24 }, pupils: { x:24, y:24 } },
        "Stronkler": { eyes: { x:24, y:32 }, pupils: { x:44, y:32 } },
    }
    
    const selectedOffsets = baby ? babyOffSets[type] : offsets[type];

    return(
        <div className="flex flex-row justify-center items-center space-between w-full h-full absolute">
            <div className="flex flex-row justify-center items-center space-between w-full h-full absolute">
                <img className="relative right-7 bottom-6" style={{bottom: selectedOffsets.eyes.y, right: selectedOffsets.eyes.x}} src={baby ? `/Parts/Shapelet/Eyes/Shapelet-Eye-${male ? "Male" : "Female" }.png` : `/Parts/Shapeler/Eyes/Eye-${male ? "Male" : "Female" }.png` } />
                <img className="relative left-7 bottom-6 -scale-x-100" style={{bottom: selectedOffsets.eyes.y, left: selectedOffsets.eyes.x}} src={baby ? `/Parts/Shapelet/Eyes/Shapelet-Eye-${male ? "Male" : "Female" }.png` : `/Parts/Shapeler/Eyes/Eye-${male ? "Male" : "Female" }.png` } />
            </div>
            <img className="relative right-12 bottom-6" style={{bottom: selectedOffsets.pupils.y, right: selectedOffsets.pupils.x}} src={baby ? `/Parts/Shapelet/Eyes/Pupils/Shapelet-Pupil-${pupil}.png` : `/Parts/Shapeler/Eyes/Pupils/Pupil-${pupil}.png` } />
            <img className="relative left-12 bottom-6 -scale-x-100" style={{bottom: selectedOffsets.pupils.y, left: selectedOffsets.pupils.x}} src={baby ? `/Parts/Shapelet/Eyes/Pupils/Shapelet-Pupil-${pupil}.png` : `/Parts/Shapeler/Eyes/Pupils/Pupil-${pupil}.png` } />
        </div>
    )
}