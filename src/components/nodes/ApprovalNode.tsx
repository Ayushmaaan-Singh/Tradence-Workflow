import React from 'react';
import type { NodeProps } from '@xyflow/react';
import { BaseNode } from './BaseNode';
import { CheckSquare } from 'lucide-react';
import type { AppNode } from '../../types/workflow.types';

export const ApprovalNode: React.FC<NodeProps<AppNode>> = ({ data, selected }) => {
  return (
    <BaseNode
      label={data.label || 'Approval'}
      selected={selected}
      status={data.status}
      icon={<CheckSquare className="w-4 h-4 text-amber-600" />}
      className="border-amber-200/60"
      headerColor="bg-amber-50/80 border-amber-100"
    >
      <div className="text-xs text-slate-500">
        {data.description || 'Requires manager approval'}
      </div>
      {data.config.approverRole && (
        <div className="mt-2 text-xs font-medium text-amber-700 bg-amber-50 inline-block px-2 py-1 rounded">
          Role: {data.config.approverRole}
        </div>
      )}
    </BaseNode>
  );
};
