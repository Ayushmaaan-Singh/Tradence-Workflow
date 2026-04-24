import React from 'react';
import type { NodeProps } from '@xyflow/react';
import { BaseNode } from './BaseNode';
import { Zap } from 'lucide-react';
import type { AppNode } from '../../types/workflow.types';

export const AutomatedNode: React.FC<NodeProps<AppNode>> = ({ data, selected }) => {
  return (
    <BaseNode
      label={data.label || 'Automated Action'}
      selected={selected}
      status={data.status}
      icon={<Zap className="w-4 h-4 text-blue-600" />}
      className="border-blue-200/60"
      headerColor="bg-blue-50/80 border-blue-100"
    >
      <div className="text-xs text-slate-500">
        {data.description || 'System automation'}
      </div>
      {data.config.actionId && (
        <div className="mt-2 text-xs font-medium text-blue-700 bg-blue-50 inline-block px-2 py-1 rounded">
          Action: {data.config.actionId}
        </div>
      )}
    </BaseNode>
  );
};
