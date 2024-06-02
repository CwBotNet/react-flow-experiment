"use client"

import React from 'react'
import ReactFlow, { Background, Controls, MiniMap } from 'reactflow'

type Props = {}

interface Node {
    id: string,
    type?: string,
    data: { label: string },
    position: { x: number, y: number }
}


const initialNodes: Node[] = [
    {
        id: '1',
        type: 'input', // input node
        data: { label: 'Input Node' },
        position: { x: 250, y: 5 },
    },
    // default node
    {
        id: '2',
        data: { label: 'Default Node' },
        position: { x: 100, y: 100 },
    },
    {
        id: '3',
        data: { label: 'Another Node' },
        position: { x: 400, y: 100 },
    },
];

interface Edge {
    id: string,
    source: string,
    target: string,
    animated: boolean
}


const initialEdges: Edge[] = [
    { id: 'e1-2', source: '1', target: '2', animated: true },
    { id: 'e2-3', source: '2', target: '3', animated: true },
];



const FlowComponent = () => {
    return (
        <div className='h-[100vh]'>
            <ReactFlow
                nodes={initialNodes}
                edges={initialEdges}
            >
                <MiniMap />
                <Controls />
                <Background />
            </ReactFlow>
        </div>
    )
}

export default FlowComponent