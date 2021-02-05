import Button from '@material-ui/core/Button';
import React, { useEffect, useState } from 'react';

let deferredPrompt: any;

export const ButtonInstallPWA = () => {
    const [installable, setInstallable] = useState(false);

    useEffect(() => {
        window.addEventListener('beforeinstallprompt', (e: Event) => {
            // Prevent the mini-infobar from appearing on mobile
            e.preventDefault();
            // Stash the event so it can be triggered later.
            deferredPrompt = e;
            // Update UI notify the user they can install the PWA
            setInstallable(true);
        });
    }, []);


    const handleInstallClick = () => {
        // Hide the app provided install promotion
        setInstallable(false);
        // Show the install prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult: any) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }
        });
    };


    return (
        <div>
            { installable && <Button onClick={ handleInstallClick }>Установить</Button> }
        </div>
    );
};

