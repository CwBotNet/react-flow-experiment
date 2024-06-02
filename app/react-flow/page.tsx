import React from 'react'
import FlowComponent from '../components/FlowComponent'
import Flow from '../components/Flow'

const ReactFlowPage = () => {
    return (
        <>
            <div className='flex justify-center mt-6'>

                <div className='text-4xl text-pink-300'>ReactFlow</div>

            </div>
            {/* <Flow /> */}

            <FlowComponent />
        </>
    )
}


export default ReactFlowPage