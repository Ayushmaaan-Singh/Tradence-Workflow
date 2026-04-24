import React from 'react';
import { useWorkflowStore } from '../../hooks/useWorkflowStore';
import { StartNodeForm } from './StartNodeForm';
import { TaskNodeForm } from './TaskNodeForm';
import { ApprovalNodeForm } from './ApprovalNodeForm';
import { AutomatedStepForm } from './AutomatedStepForm';
import { EndNodeForm } from './EndNodeForm';
import type { NodeType } from '../../types/workflow.types';

const FORM_COMPONENTS: Record<NodeType, React.FC<any>> = {
  start: StartNodeForm,
  task: TaskNodeForm,
  approval: ApprovalNodeForm,
  automated: AutomatedStepForm,
  end: EndNodeForm,
};

export const NodePropertiesPanel: React.FC = () => {
  const nodes = useWorkflowStore((state) => state.nodes);
  const activeNode = nodes.find((node) => node.selected);

  const Form = activeNode ? FORM_COMPONENTS[activeNode.type as NodeType] : null;

  if (!activeNode || !Form) {
    return (
      <div className="p-6 text-center text-slate-500 w-80 border-l bg-slate-50 h-full flex items-center justify-center">
        <p>Select a node to edit its properties</p>
      </div>
    );
  }

  return (
    <div className="p-6 border-l border-slate-200 bg-slate-50 h-full w-80 flex-shrink-0 shadow-[-4px_0_15px_-3px_rgba(0,0,0,0.05)] overflow-y-auto">
      <div className="mb-6 pb-4 border-b border-slate-200">
        <h3 className="font-bold text-lg text-slate-800">Edit {activeNode.type} Node</h3>
      </div>
      <Form nodeData={activeNode.data} nodeId={activeNode.id} />
    </div>
  );
};
