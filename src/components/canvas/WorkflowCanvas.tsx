import React, { useCallback, useRef } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useReactFlow,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { useWorkflowStore } from '../../hooks/useWorkflowStore';
import { StartNode, TaskNode, ApprovalNode, AutomatedNode, EndNode } from '../nodes';

const nodeTypes = {
  start: StartNode,
  task: TaskNode,
  approval: ApprovalNode,
  automated: AutomatedNode,
  end: EndNode,
};

export const WorkflowCanvas: React.FC = () => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect, addNode } = useWorkflowStore();
  const { screenToFlowPosition } = useReactFlow();

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();

      const type = event.dataTransfer.getData('application/reactflow');
      const label = event.dataTransfer.getData('application/reactflow/label');

      if (typeof type === 'undefined' || !type) {
        return;
      }

      // Project the screen coordinates to the React Flow instance's coordinates
      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode = {
        id: `${type}-${Date.now()}`,
        type,
        position,
        data: { label, config: {}, status: 'idle' },
      };

      addNode(newNode as any);
    },
    [screenToFlowPosition, addNode]
  );

  return (
    <div className="flex-grow h-full" ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        onDrop={onDrop}
        onDragOver={onDragOver}
        fitView
      >
        <Background gap={20} size={1.5} color="#94a3b8" />
        <Controls className="bg-white/80 backdrop-blur-sm border-slate-200/50 rounded-xl overflow-hidden shadow-glass" />
        <MiniMap 
          zoomable 
          pannable 
          className="bg-white/80 backdrop-blur-sm border-slate-200/50 rounded-xl overflow-hidden shadow-glass"
          nodeColor={(n) => {
          if (n.type === 'start') return '#10b981';
          if (n.type === 'task') return '#6366f1';
          if (n.type === 'approval') return '#f59e0b';
          if (n.type === 'automated') return '#3b82f6';
          return '#94a3b8';
        }} />
      </ReactFlow>
    </div>
  );
};
