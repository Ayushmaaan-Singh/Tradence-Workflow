import React from 'react';
import { useNodeProperty } from '../../hooks/useNodeProperty';
import type { NodeData } from '../../types/workflow.types';

interface FormProps {
  nodeId: string;
  nodeData: NodeData;
}

export const TaskNodeForm: React.FC<FormProps> = ({ nodeId, nodeData }) => {
  const { handleChange, handleConfigChange } = useNodeProperty(nodeId);
  const isTitleInvalid = !nodeData.label || nodeData.label.trim() === '';

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Title <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 text-sm ${
            isTitleInvalid 
              ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
              : 'border-slate-300 focus:ring-indigo-500 focus:border-indigo-500'
          }`}
          value={nodeData.label || ''}
          onChange={(e) => handleChange('label', e.target.value)}
          placeholder="Task Title"
        />
        {isTitleInvalid && <p className="text-xs text-red-500 mt-1">Title is required</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Task Details</label>
        <textarea
          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
          rows={2}
          value={nodeData.description || ''}
          onChange={(e) => handleChange('description', e.target.value)}
          placeholder="What needs to be done?"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Assignee</label>
        <input
          type="text"
          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
          value={nodeData.config.assignee || ''}
          onChange={(e) => handleConfigChange('assignee', e.target.value)}
          placeholder="e.g. HR Manager, john.doe@email.com"
        />
      </div>
    </div>
  );
};
