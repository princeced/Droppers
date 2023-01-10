import React from 'react'
import { Navigation } from '@shopify/polaris';
import { useLocation } from "react-router-dom";
import { HomeMajor, ProductsMajor,ProfileMajor } from '@shopify/polaris-icons';

const Sidebar = () => {
    const location = useLocation();
    return (
        <>
            <Navigation location={location.pathname}>
                <Navigation.Section
                    items={[
                        {
                            url: 'dashboard',
                            label: 'Dashboard',
                            icon: HomeMajor,
                        },
                        {
                            url: 'product',
                            label: 'Product',
                            icon: ProductsMajor,
                        },
                        {
                            url: 'accounts',
                            label: 'Account',
                            icon: ProfileMajor,
                        }
                        
                    ]}
                />

            </Navigation>
        </>
    )
}

export default Sidebar
