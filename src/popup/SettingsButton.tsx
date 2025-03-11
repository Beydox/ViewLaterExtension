import React from 'react'
import { IconButton } from '@mui/material'
import { Settings } from '@mui/icons-material'  


const SettingsButton = () => {

    const handleSettingsClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        chrome.tabs.create({ url: '/options.html' });
    }

    return (
        <IconButton color="primary" aria-label="add to shopping cart" onClick={handleSettingsClick}>
            <Settings />
        </IconButton>
    )
}

export default SettingsButton