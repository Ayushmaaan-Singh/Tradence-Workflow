import React from 'react';
import type { NodeProps } from '@xyflow/react';
import { BaseNode } from './BaseNode';
import { PlayCircle } from 'lucide-react';
import type { AppNode } from '../../types/workflow.types';

export const StartNode: React.FC<NodeProps<AppNode>> = ({ data, selected }) => {
  return (
    <BaseNode
      label={data.label || 'Start'}
      selected={selected}
      status={data.status}
      icon={<PlayCircle className="w-4 h-4 text-emerald-600" />}
      hasInput={false}
      className="border-emerald-200/60"
      headerColor="bg-emerald-50/80 border-emerald-100"
    >
      <div className="text-xs text-slate-500">
        {data.description || 'Triggers the workflow'}
      </div>
    </BaseNode>
  );
};
