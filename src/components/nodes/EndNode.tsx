import React from 'react';
import type { NodeProps } from '@xyflow/react';
import { BaseNode } from './BaseNode';
import { Flag } from 'lucide-react';
import type { AppNode } from '../../types/workflow.types';

export const EndNode: React.FC<NodeProps<AppNode>> = ({ data, selected }) => {
  return (
    <BaseNode
      label={data.label || 'End Workflow'}
      selected={selected}
      status={data.status}
      icon={<Flag className="w-4 h-4 text-slate-600" />}
      hasOutput={false}
      className="border-slate-300/60 bg-white"
      headerColor="bg-slate-100/80 border-slate-200"
    >
      <div className="text-xs text-slate-500">
        {data.description || 'Completes the workflow'}
      </div>
    </BaseNode>
  );
};
