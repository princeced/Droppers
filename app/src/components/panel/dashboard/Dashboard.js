import { React, useState, useEffect } from 'react';
import { Card, Page, Layout, DataTable, IndexTable, Text } from '@shopify/polaris';
import axios from 'axios';

const Dashboard = () => {

    const [logined, handlelogined] = useState({
        contenttype: "multiple",
    });
    const [fulldetails, handlefulldetails] = useState();


    useEffect(() => {
        axios.post('http://localhost:5001/userdetails', logined).then((response, error) => {
            if (response.data !== '') {
                handlefulldetails(response.data);
                console.log(response.data)
            }
            else {
                console.log(error);
            }
        }).catch((error) => {
            console.log(error)
        })
    }, []);
   

    return (
        <>
            <Page compactTitle fullWidth title="Dashboard" subtitle="Perfect for any pet">
                <Layout>
                    <Layout.Section>
                        <Card sectioned>
                            <table>
                                <colgroup>
                                <col style={{width:'250px'}}></col>
                                <col style={{width:'200px'}}></col>
                                <col style={{width:'200px'}}></col>
                                <col style={{width:'200px'}}></col>
                                </colgroup>
                                <thead>
                                    <th>Usernames</th>
                                    <th>Firstname</th>
                                    <th>Lastname</th>
                                    <th>Gender</th>
                                </thead>
                                <tbody>
                                    {
                                        fulldetails?.map((details, index) => {
                                            return <tr>
                                                <td style={{padding:"5px",textAlign:"center"}}>{details.username}</td>
                                                <td style={{padding:"5px",textAlign:"center"}}>{details.firstname}</td>
                                                <td style={{padding:"5px",textAlign:"center"}}>{details.lastname}</td>
                                                <td style={{padding:"5px",textAlign:"center"}}>{details.gender}</td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                            {/* <DataTable
                                columnContentTypes={[
                                    'text',
                                    'numeric',
                                    'numeric',
                                    'numeric',
                                    'numeric',
                                ]}
                                headings={[
                                    'Product',
                                    'Price',
                                    'SKU Number',
                                    'Net quantity',
                                    'Net sales',
                                ]}
                                rows={fulldetails}
                                stickyHeader
                            /> */}
                            {/* <Button onClick={userdata} plain fullWidth>Details</Button> */}
                        </Card>
                    </Layout.Section>
                </Layout>
            </Page>

        </>
    )
}

export default Dashboard
