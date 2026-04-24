import React from 'react';
import type { NodeProps } from '@xyflow/react';
import { BaseNode } from './BaseNode';
import { ClipboardList } from 'lucide-react';
import type { AppNode } from '../../types/workflow.types';

export const TaskNode: React.FC<NodeProps<AppNode>> = ({ data, selected }) => {
  return (
    <BaseNode
      label={data.label || 'Task'}
      selected={selected}
      status={data.status}
      icon={<ClipboardList className="w-4 h-4 text-indigo-600" />}
      className="border-indigo-200/60"
      headerColor="bg-indigo-50/80 border-indigo-100"
    >
      <div className="text-xs text-slate-500">
        {data.description || 'Manual task to be completed'}
      </div>
      {data.config.assignee && (
        <div className="mt-2 text-xs font-medium text-indigo-600 bg-indigo-50 inline-block px-2 py-1 rounded">
          {data.config.assignee}
        </div>
      )}
    </BaseNode>
  );
};
