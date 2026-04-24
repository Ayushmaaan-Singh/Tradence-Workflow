import { useWorkflowStore } from './useWorkflowStore';
import type { NodeData } from '../types/workflow.types';

export const useNodeProperty = (nodeId: string) => {
  const updateNodeData = useWorkflowStore((s) => s.updateNodeData);

  const handleChange = (key: keyof NodeData, value: any) => {
    updateNodeData(nodeId, { [key]: value });
  };

  const handleConfigChange = (key: string, value: any) => {
    // We get the current config from the store to merge properly
    const nodes = useWorkflowStore.getState().nodes;
    const node = nodes.find((n) => n.id === nodeId);
    if (node) {
      updateNodeData(nodeId, {
        config: { ...node.data.config, [key]: value },
      });
    }
  };

  return { handleChange, handleConfigChange };
};
