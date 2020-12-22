import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
// @ts-ignore
import Shake from 'shake.js';
import './BellPage.scss';

interface Bell {
    displayName: string;
    fileName: string;
    startTime: number;
    sharp?: boolean;
}

export const BellPage: FunctionComponent = () => {
    const [lockedBellIndex, setLockedBellIndex] = useState<number>();

    const lockedBellIndexRef = useRef(lockedBellIndex);

    const updateBellStateAndRef = (value?: number) => {
        setLockedBellIndex(value);
        lockedBellIndexRef.current = value;
    };

    const initiateShakeEvent = () => {
        const shakeEvent = new Shake({ threshold: 10, timeout: 300 });
        shakeEvent.start();
        // @ts-ignore
        window.addEventListener('shake', () => ringBell(undefined, true), false);

        return (() => {
            // @ts-ignore
            window.removeEventListener('shake',  () => ringBell(undefined, true), false);
            shakeEvent.stop();
        });
    };

    useEffect(initiateShakeEvent, []);

    const bellSounds: HTMLAudioElement[] = bellsCatalog.map((bell: Bell) => {
        return new Audio(`${process.env.PUBLIC_URL}/sounds/${bell.fileName}`);
    });

    const ringBell = (index?: number, shakeMode?: boolean) => {
        const bellIndex = shakeMode ? lockedBellIndexRef.current : index;

        if (bellIndex !== undefined) {
            const clonedBell: any = bellSounds[bellIndex].cloneNode(); // actually type HTMLAudioElement
            clonedBell.currentTime = bellsCatalog[bellIndex].startTime;
            clonedBell.play();
        }
    };

    const lockBell = (index: number) => {
        if (lockedBellIndex === index) {
            updateBellStateAndRef(undefined);
        } else {
            updateBellStateAndRef(index);
        }
    };

    return (
        <div className='BellPage'>
            {bellsCatalog.map((bell: Bell, index: number) => {
                return (
                    <div
                        className='BellPage-bell'
                    >
                        <div
                            className={'BellPage-bell-note' + (bell.sharp ? ' sharp' : '')}
                            onClick={() => ringBell(index)}
                        >
                            {bell.displayName}
                        </div>
                        <div
                            className={'BellPage-bell-lock' + (lockedBellIndex === index ? ' locked' : '')}
                            onClick={() => lockBell(index)}
                        >
                            🔒
                            </div>
                    </div>
                );
            })}
        </div>
    );
};

const bellsCatalog: Bell[] = [
    {
        displayName: 'C',
        fileName: 'low-c.wav',
        startTime: 0.1
    },
    {
        displayName: 'C♯/D♭',
        fileName: 'c-sharp-d-flat.wav',
        startTime: 0.35,
        sharp: true
    },
    {
        displayName: 'D',
        fileName: 'd.wav',
        startTime: 0.25
    },
    {
        displayName: 'D♯/E♭',
        fileName: 'd-sharp-e-flat.wav',
        startTime: 0.3,
        sharp: true
    },
    {
        displayName: 'E',
        fileName: 'e.wav',
        startTime: 0.3
    },
    {
        displayName: 'F',
        fileName: 'f.wav',
        startTime: 0.35
    },
    {
        displayName: 'G',
        fileName: 'g.wav',
        startTime: 0.4
    },
    {
        displayName: 'G♯/A♭',
        fileName: 'g-sharp-a-flat.wav',
        startTime: 0.3,
        sharp: true
    },
    {
        displayName: 'A',
        fileName: 'a.wav',
        startTime: 0.3
    },
    {
        displayName: 'A♯/B♭',
        fileName: 'a-sharp-b-flat.wav',
        startTime: 0.3,
        sharp: true
    },
    {
        displayName: 'B',
        fileName: 'b.wav',
        startTime: 0.25
    },
    {
        displayName: 'C',
        fileName: 'high-c.wav',
        startTime: 0.25
    }
];