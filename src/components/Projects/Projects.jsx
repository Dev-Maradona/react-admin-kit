import { IconButton } from '@mui/material';
import {DataGrid} from '@mui/x-data-grid';
import {AiOutlineMore, AiOutlineCheckCircle} from 'react-icons/ai';
import React from 'react';
import './Projects.scss';
import { rows, columns } from './data/data';

function Projects() {

    return (
        <div className='Projects'>
            <div className="cardTitle flex justify-between">
                <div>
                    <h3 className="my-2">Projects</h3>
                    <div className='flex items-center'>
                        <AiOutlineCheckCircle className='text-green mr-2' />
                        <p className='Paragraph'><span>30 done</span> this month</p>
                    </div>
                </div>
                <div>
                    <IconButton>
                        <AiOutlineMore />
                    </IconButton>
                </div>
            </div>
            <div className="cardBody" style={{height: '380px', margin: '20px 0'}}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection 
                />
            </div>
        </div>
    )
}

export default Projects