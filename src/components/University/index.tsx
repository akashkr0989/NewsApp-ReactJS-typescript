import React, { useEffect, useState } from 'react'
// import { DOG_API } from '../../API-Keys/api-keys';
import { UNIVERSITIES_LIST_API_CALL } from '../../axios/ApiCall';
import { API_END_POINTS } from '../../API-Keys/api-endpoints';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Skeleton, Typography } from '@mui/material';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { ValidationOnUniversityForm } from './helper';
import { intialValues } from './type';
import TextError from '../CommonComponents/TextError';
import { Link } from 'react-router-dom';



const validationSchema = Yup.object({ ...ValidationOnUniversityForm });



export default function University() {

    // const headers = {
    //     'x-api-key':  DOG_API.api_key
    // }

    let skeleton = new Array(20).fill(0)

    const defaultParams = {
        country: 'India'
    }


    const [myData, setMyData] = useState([[]]);
    const [isError, setIsError] = useState("");
    const [loader, setLoader] = useState(false);
    const [dataCount, setDataCount] = useState(0)


    // using Async Await
    const getMyPostData = async (values?: any) => {
        try {

            const response = await UNIVERSITIES_LIST_API_CALL.get(API_END_POINTS.UNIVERSITY_LIST, {
                params: values || defaultParams
            });
            setMyData(response.data);
            setLoader(true);
            setDataCount(response.data.length)
            console.log(response.data)
            console.log(myData)

        } catch (error: any) {
            setIsError(error?.message);
        }
    };

    // NOTE:  calling the function
    useEffect(() => {
        getMyPostData();
    }, []);


    const onSubmit = (values: any) => {

        console.log('Form Data', values)
        setLoader(false)

        getMyPostData(values)


    }




    return (
        <>

            <br /><br />
            <h2 style={{ display: 'flex', paddingBottom: '10px', paddingLeft: '16%' }}>Enter country to view universities present: </h2>
            <div className="container">
                <Formik
                    initialValues={intialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}>

                    <Form>

                        {/* <div> */}
                        <div className="form-floating mb-2" style={{ width: '30%', display: 'flex', paddingBottom: '20px' }}>
                            <Field
                                type="text"
                                className="form-control"
                                required
                                id='country'
                                name='country'
                                placeholder="country"
                            />
                            {/* <ErrorMessage name='country' component={TextError} /> */}
                            <label htmlFor="country">Country</label>

                            <div className='button-save' style={{ padding: '10px' }}>
                                <button className="btn btn-dark" type='submit'>Submit</button>
                            </div>
                        </div>
                        {/* </div> */}

                    </Form>
                </Formik>
            </div>

            {dataCount === 0 ? (
            <></>
            ) :(<div>
                <h1>Total Universities count : {dataCount} </h1>
            </div>)}




            <div style={{ flexGrow: 1 }}>

                <Grid container spacing={3}>
                    {!loader ? (
                        skeleton.map((element: any) => {
                            return <>
                                <div style={{ paddingTop: '3%', paddingLeft: '5%', display: 'block' }} >
                                    <Skeleton variant="rectangular" width={275} height={200} >
                                    </Skeleton>
                                    <Skeleton />
                                    <Skeleton />
                                </div>
                            </>
                        })

                    ) : (

                        myData.length === 0 ?
                            <NoDataPresent />
                            :
                            (
                                myData.map((element: any, index) => (

                                    <Grid item xs={12} sm={6} md={5} lg={3} key={index}>
                                        <Card sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between',
                                            margin: '10px',
                                            maxWidth: 340,
                                        }}>
                                            <CardMedia
                                                sx={{ height: 40, }}

                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h6" component="h2">
                                                    Country: {element.country}
                                                </Typography>
                                                <Typography gutterBottom variant="h6" component="h2">
                                                    {element.name}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    {/* State: {element.state-province} */}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    Web Page: <Link to={element.web_pages[0]} target="_blank">{element.web_pages[0]}</Link>
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    {/* Population: {element.population} million */}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    {/* Region: {element.region} */}
                                                </Typography>
                                                {/* <button onClick={handleRandomClick}>Random Country</button> */}
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))
                            )


                    )
                    }
                </Grid>
            </div>
        </>
    )
}

export const NoDataPresent: React.FC = () => {
    return (
        <div className="no-data-container" style={{ padding: '5% 40% 0%' }}>
            <h1>No Data Present</h1>
            <p>There is currently no data available.</p>
        </div>
    );
};
