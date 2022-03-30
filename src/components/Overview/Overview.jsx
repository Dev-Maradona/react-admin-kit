import React from 'react';
import {AiOutlineCheckCircle, AiOutlineBug, AiOutlineCarryOut, AiOutlineBulb, AiOutlineCodepenCircle} from 'react-icons/ai';
import './Overview.scss';

function Overview() {
    return (
        <div className='Overview'>
            <div className="cardTitle">
                <div>
                    <h3 className="my-2">Overview</h3>
                    <div className='flex items-center'>
                        <AiOutlineCheckCircle className='text-green mr-2' />
                        <p className='Paragraph'><span>24%</span> this month</p>
                    </div>
                </div>
            </div>
            <div className="cardBody">
                <div className='Timeline'>
                    <div className="iconProvider bg-green">
                        <AiOutlineCarryOut className='Icon' />
                    </div>
                    <div className="Description">
                        <h4 className='Header'>$2400, Design changes</h4>
                        <span>22 DEC 7:20 PM</span>
                    </div>
                </div>
                <div className='Timeline'>
                    <div className="iconProvider bg-red">
                        <AiOutlineBug className='Icon' />
                    </div>
                    <div className="Description">
                        <h4 className='Header'>$2400, Design changes</h4>
                        <span>22 DEC 7:20 PM</span>
                    </div>
                </div>
                <div className='Timeline'>
                    <div className="iconProvider bg-blue">
                        <AiOutlineBulb className='Icon' />
                    </div>
                    <div className="Description">
                        <h4 className='Header'>$2400, Design changes</h4>
                        <span>22 DEC 7:20 PM</span>
                    </div>
                </div>
                <div className='Timeline'>
                    <div className="iconProvider bg-black">
                        <AiOutlineCodepenCircle className='Icon' />
                    </div>
                    <div className="Description">
                        <h4 className='Header'>$2400, Design changes</h4>
                        <span>22 DEC 7:20 PM</span>
                    </div>
                </div>
                <div className='Timeline'>
                    <div className="iconProvider bg-blue">
                        <AiOutlineBulb className='Icon' />
                    </div>
                    <div className="Description">
                        <h4 className='Header'>$2400, Design changes</h4>
                        <span>22 DEC 7:20 PM</span>
                    </div>
                </div>
                <div className='Timeline'>
                    <div className="iconProvider bg-red">
                        <AiOutlineBug className='Icon' />
                    </div>
                    <div className="Description">
                        <h4 className='Header'>$2400, Design changes</h4>
                        <span>22 DEC 7:20 PM</span>
                    </div>
                </div>
                <div className='Timeline'>
                    <div className="iconProvider bg-green">
                        <AiOutlineCarryOut className='Icon' />
                    </div>
                    <div className="Description">
                        <h4 className='Header'>$2400, Design changes</h4>
                        <span>22 DEC 7:20 PM</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview