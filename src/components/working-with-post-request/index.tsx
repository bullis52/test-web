import React, {useEffect, useState} from 'react';
import './style.scss';
import {getToken, getUsers, postUser} from "../../services/axios";
import UserDetails from "../user-details";
import {Field, Form, Formik, FormikHelpers} from "formik";
interface Values {
    yourName: string;
    email: string;
    phone: string;
    position: string;
    file: any;
}
function WorkingWithPost() {
    const [token,setToken] = useState<string>('')
    useEffect(()=>{
        getToken().then(value => setToken(value.data.token))
    },[])

    const initialValues = {
        yourName: '',
        email: '',
        phone: '',
        position: '',
        file:''
    }
    return (
        <div className="with-post">
            <div className="with-post__title">
                Working with POST request
            </div>
            <Formik
                enableReinitialize={true}
                initialValues={initialValues}
                onSubmit={(
                    values: Values,
                ) => {
                    postUser(values,token)
                }}
            >
                <Form className='form'>
                    <div className='form__yourName-wrap'>
                        <Field
                            id="yourName"
                            name="yourName"
                            placeholder="Your name"
                            className='form__input'
                        />
                    </div>
                    <div className='form__email-wrap'>
                        <Field
                            id="email"
                            name="email"
                            placeholder="Email"
                            type="email"
                            className='form__input'
                        />
                    </div>
                    <div className='form__phone-wrap'>
                        <Field
                            id="phone"
                            name="phone"
                            placeholder="Phone"
                            type="tel"
                            className='form__input-last'
                        />
                        <label className='form__label-phone' htmlFor="phone">+38 (XXX) XXX - XX - XX</label>
                    </div>
                    <div role="group" aria-labelledby="checkbox-group" className='form__select-position'>
                        <div className='form__checkBox-wrap'>
                            <label>
                                Select your position
                            </label>
                        </div>
                        <div className='form__checkBox-wrap'>
                            <Field
                                type="radio"
                                name="position"
                                value="frontend"
                                className='form__checkbox'
                            />
                            <p className={'form__checkBox-label'}>Frontend developer</p>
                        </div>
                        <div className='form__checkBox-wrap'>
                            <Field
                                type="radio"
                                name="position"
                                value="backend"
                                className='form__checkbox'
                            />
                            <p className={'form__checkBox-label'}>Backend developer</p>
                        </div>
                        <div className='form__checkBox-wrap'>
                            <Field
                                type="radio"
                                name="position"
                                value="designer"
                                className='form__checkbox'
                            />
                            <p className={'form__checkBox-label'}>Designer</p>
                        </div>
                        <div className='form__checkBox-wrap'>
                            <Field
                                type="radio"
                                name="position"
                                value="QA"
                                className='form__checkbox'
                            />
                            <p className={'form__checkBox-label'}>QA</p>
                        </div>
                    </div>
                    <div className='form__input-file-wrap'>
                        <label htmlFor="file" className='inputfile-title'>Upload</label>
                        <Field type="file" name="file" id="file" className="inputfile"/>
                    </div>
                    <button type="submit" className='form__submit'>Sign up</button>
                </Form>
            </Formik>
        </div>
    );
}

export default WorkingWithPost;
