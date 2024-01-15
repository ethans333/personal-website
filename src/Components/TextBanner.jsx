export default function TextBanner () {
    return (
        <>
                    <pre>
            <code>
            {`
                __      __   _                    ___            _                     
                \ \    / /__| |__ ___ _ __  ___  | __|_ __  _ __| |___ _  _ ___ _ _ ___
                 \ \/\/ / -_) / _/ _ \ '  \/ -_) | _|| '  \| '_ \ / _ \ || / -_) '_(_-<
                  \_/\_/\___|_\__\___/_|_|_\___| |___|_|_|_| .__/_\___/\_, \___|_| /__/
                                                            |_|         |__/            
            `}
            </code>

        </pre>

        <svg>
            <text x="0" y="15" fill="red">{`__      __   _                    ___            _                     `}</text>
        </svg>
        </>


        
    )
} 