import React from 'react';
import { useNodeProperty } from '../../hooks/useNodeProperty';
import { useMockApi } from '../../hooks/useMockApi';
import type { NodeData } from '../../types/workflow.types';

interface FormProps {
  nodeId: string;
  nodeData: NodeData;
}

export const AutomatedStepForm: React.FC<FormProps> = ({ nodeId, nodeData }) => {
  const { handleChange, handleConfigChange } = useNodeProperty(nodeId);
  const { automations, loading } = useMockApi();
  
  const isTitleInvalid = !nodeData.label || nodeData.label.trim() === '';

  // Step B: Find the selected automation object
  const selectedAction = automations.find(a => a.id === nodeData.config.actionId);

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
              : 'border-slate-300 focus:ring-blue-500 focus:border-blue-500'
          }`}
          value={nodeData.label || ''}
          onChange={(e) => handleChange('label', e.target.value)}
          placeholder="Automated Action Title"
        />
        {isTitleInvalid && <p className="text-xs text-red-500 mt-1">Title is required</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Select Automation</label>
        <select
          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
          value={nodeData.config.actionId || ''}
          onChange={(e) => handleConfigChange('actionId', e.target.value)}
          disabled={loading}
        >
          <option value="">{loading ? 'Loading automations...' : 'Select Action...'}</option>
          {automations.map((action) => (
            <option key={action.id} value={action.id}>
              {action.label}
            </option>
          ))}
        </select>
      </div>
      
      {/* Step C: Dynamically render inputs based on parameters */}
      {selectedAction && (
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 shadow-sm mt-4">
          <p className="text-sm font-semibold text-blue-800 mb-3 border-b border-blue-200 pb-2">
            Action Parameters
          </p>
          <div className="space-y-3">
            {selectedAction.params.length === 0 && (
              <p className="text-xs text-blue-600 italic">No parameters required.</p>
            )}
            {selectedAction.params.map(param => (
              <div key={param}>
                <label className="block text-xs font-medium text-slate-700 mb-1 capitalize">
                  {param.replace('_', ' ')}
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  placeholder={`Enter ${param.replace('_', ' ')}...`}
                  value={nodeData.config[param] || ''}
                  onChange={(e) => handleConfigChange(param, e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
