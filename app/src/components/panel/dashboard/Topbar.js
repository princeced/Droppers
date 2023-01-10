import React, {useState,useCallback} from 'react'
import { TopBar } from '@shopify/polaris'


const Topbar = () => {
    const [userMenuActive, setUserMenuActive] = useState(false)
    const userMenuActions = [
        {
            items: [{ content: 'Community forums' }],
        },
    ];
    const toggleUserMenuActive = useCallback(() => setUserMenuActive(userMenuActive => !userMenuActive), []);


    const userMenuMarkup = (
        <TopBar.UserMenu
            actions={userMenuActions}
            name="Pop"
            detail={"Satore"}
            initials="P"
            open={userMenuActive}
            onToggle={toggleUserMenuActive}
        />
    );

    return (
        <>

            <TopBar
                showNavigationToggle
                userMenu={userMenuMarkup}
                searchResultsVisible={1}
                // onNavigationToggle={true}
            />
        </>
    );
}


export default Topbar
