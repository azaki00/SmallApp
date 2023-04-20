import React, { useState } from 'react'
import './controller.css'
import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css'

const Controller = () => {
    const [values, setValues] = useState({
        switch1: false,
        switch2: false,
        switch3: false,
    })

    const notify_1 = () => {
        toast.success('Category 1 Triggered!', {
            position: toast.POSITION.TOP_CENTER
        });
    }
    const notify_2 = () => {
        toast.success('Category 2 Triggered!', {
            position: toast.POSITION.TOP_CENTER
        });
    }
    const notify_3 = () => {
        toast.success('Category 3 Triggered!', {
            position: toast.POSITION.TOP_CENTER
        });
    }
    const notify_4 = () => {
        toast.success('Category 4 Triggered!', {
            position: toast.POSITION.TOP_CENTER
        });
    }
    const notify_5 = () => {
        toast.success('Category 5 Triggered!', {
            position: toast.POSITION.TOP_CENTER
        });
    }
    const notifyToggle_1 = () => {
        setValues({
            switch1: !values.switch1,
            switch2: values.switch2,
            switch3: values.switch3
        })
        if(values.switch1){
            toast.info('Switch 1 OFF', {
                position: toast.POSITION.TOP_RIGHT
            });
        }else{
            toast.info('Switch 1 ON', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }
    const notifyToggle_2 = () => {
        setValues({
            switch1: values.switch1,
            switch2: !values.switch2,
            switch3: values.switch3
        })
        if(values.switch2){
            toast.info('Switch 2 OFF', {
                position: toast.POSITION.TOP_RIGHT
            });
        }else{
            toast.info('Switch 2 ON', {
                position: toast.POSITION.TOP_RIGHT
            });
        }

    }
    const notifyToggle_3 = () => {
        setValues({
            switch1: values.switch1,
            switch2: values.switch2,
            switch3: !values.switch3
        })
        if(values.switch3){
            toast.info('Switch 3 OFF', {
                position: toast.POSITION.TOP_RIGHT
            });
        }else{
            toast.info('Switch 3 ON', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }

    return (
        <>
            <div className='container-x'>
                <div className="text-light text-center details-block1 ">
                    <h1>Control Board</h1>
                </div>

                <div className='details-block2 row'>
                    {/* <div className='col text-center'><span>IP : 192.4.27.255</span></div>
                    <div className='col text-center'><span>User: aslrgib</span></div> */}
                </div>
                <div className='row d-flex justify-content-center'>
                    <div className='header-cont col'>

                        <div className="button-panel my-5 row">
                            <div className='row p-2 d-flex justify-content-center'><span className="text-light">CAT-1</span>
                                <div className='col '>
                                    <button className="btn btn-block color-1 p-4" onClick={() => notify_1()}> button x</button>
                                </div>
                                <div className='col'>
                                    <button className="btn btn-block color-1 p-4" onClick={() => notify_1()}> button x</button>
                                </div>
                                <div className='col'>
                                    <button className="btn btn-block color-1 p-4" onClick={() => notify_1()}> button x</button>
                                </div>
                                <div className='col'>
                                    <button className="btn btn-block color-1 p-4" onClick={() => notify_1()}> button x</button>
                                </div>
                            </div>
                            <div className='row p-2 d-flex justify-content-center'><span className="text-light">CAT-2</span>
                                <div className='col'>
                                    <button className="btn btn-block color-2 p-4" onClick={() => notify_2()}> button x</button>
                                </div>
                                <div className='col'>
                                    <button className="btn btn-block color-2 p-4" onClick={() => notify_2()}> button x</button>
                                </div>
                            </div>
                            <div className='row p-2 d-flex justify-content-center'><span className="text-light">CAT-3</span>
                                <div className='col'>
                                    <button className="btn btn-block color-3 p-4" onClick={() => notify_3()}> button x</button>
                                </div>
                                <div className='col'>
                                    <button className="btn btn-block color-3 p-4" onClick={() => notify_3()}> button x</button>
                                </div>
                                <div className='col'>
                                    <button className="btn btn-block color-3 p-4" onClick={() => notify_3()}> button x</button>
                                </div>
                                <div className='col'>
                                    <button className="btn btn-block color-3 p-4" onClick={() => notify_3()}> button x</button>
                                </div>
                                <div className='col'>
                                    <button className="btn btn-block color-3 p-4" onClick={() => notify_3()}> button x</button>
                                </div>
                                <div className='col'>
                                    <button className="btn btn-block color-3 p-4" onClick={() => notify_3()}> button x</button>
                                </div>
                            </div>
                            <div className='row p-2 d-flex justify-content-center'><span className="text-light">CAT-4</span>
                                <div className='col'>
                                    <button className="btn btn-block color-4 p-4" onClick={() => notify_4()}> button x</button>
                                </div>
                                <div className='col'>
                                    <button className="btn btn-block color-4 p-4" onClick={() => notify_4()}> button x</button>
                                </div>
                                <div className='col'>
                                    <button className="btn btn-block color-4 p-4" onClick={() => notify_4()}> button x</button>
                                </div>
                                <div className='col'>
                                    <button className="btn btn-block color-4 p-4" onClick={() => notify_4()}> button x</button>
                                </div>
                                <div className='col'>
                                    <button className="btn btn-block color-4 p-4" onClick={() => notify_4()}> button x</button>
                                </div>
                            </div>
                            <div className='row p-2 d-flex justify-content-center'><span className="text-light">CAT-5</span>
                                <div className='col'>
                                    <button className="btn btn-block color-5 p-4" onClick={() => notify_5()}> button x</button>
                                </div>
                                <div className='col'>
                                    <button className="btn btn-block color-5 p-4" onClick={() => notify_5()}> button x</button>
                                </div>
                                <div className='col'>
                                    <button className="btn btn-block color-5 p-4" onClick={() => notify_5()}> button x</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className="text-center text-light bg-dark pb-5">Toggle Buttons</h2>
                    </div>
                    <div className='container-y p-5'>
                        <div className='row text-light'>
                            <div className={values.switch1 ? "col bg-success p-2 rounded" : "col bg-danger p-2 rounded " }>
                                <div className="form-check form-switch">
                                    <input className="form-check-input" onChange={() => notifyToggle_1()} type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
                                    <label className="form-check-label" for="flexSwitchCheckDefault"> Switch #1 </label>
                                </div>
                            </div>
                            <div className={values.switch2 ? "col bg-success p-2 rounded" : "col bg-danger p-2 rounded " }>
                                <div className="form-check form-switch">
                                    <input className="form-check-input" onChange={() => notifyToggle_2()} type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
                                    <label className="form-check-label" for="flexSwitchCheckDefault"> Switch #2 </label>
                                </div>
                            </div>
                            <div className={values.switch3 ? "col bg-success p-2 rounded" : "col bg-danger p-2 rounded " }>
                                <div className="form-check form-switch">
                                    <input className="form-check-input" onChange={() => notifyToggle_3()} type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
                                    <label className="form-check-label" for="flexSwitchCheckDefault"> Switch #3 </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </>
    )
}

export default Controller