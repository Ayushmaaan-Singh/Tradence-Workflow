import React from 'react';
import { useNodeProperty } from '../../hooks/useNodeProperty';
import type { NodeData } from '../../types/workflow.types';

interface FormProps {
  nodeId: string;
  nodeData: NodeData;
}

export const ApprovalNodeForm: React.FC<FormProps> = ({ nodeId, nodeData }) => {
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
              : 'border-slate-300 focus:ring-amber-500 focus:border-amber-500'
          }`}
          value={nodeData.label || ''}
          onChange={(e) => handleChange('label', e.target.value)}
          placeholder="Approval Title"
        />
        {isTitleInvalid && <p className="text-xs text-red-500 mt-1">Title is required</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Approval Context</label>
        <textarea
          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm"
          rows={2}
          value={nodeData.description || ''}
          onChange={(e) => handleChange('description', e.target.value)}
          placeholder="Provide context for approver..."
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Required Approver Role</label>
        <select
          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm"
          value={nodeData.config.approverRole || ''}
          onChange={(e) => handleConfigChange('approverRole', e.target.value)}
        >
          <option value="">Select Role...</option>
          <option value="Direct Manager">Direct Manager</option>
          <option value="Department Head">Department Head</option>
          <option value="HR Partner">HR Partner</option>
          <option value="Finance Director">Finance Director</option>
        </select>
      </div>
    </div>
  );
};
