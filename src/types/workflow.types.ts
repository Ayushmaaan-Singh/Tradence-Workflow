import type { Node } from '@xyflow/react';

export type NodeType = 'start' | 'task' | 'approval' | 'automated' | 'end';

export interface NodeConfig {
  [key: string]: any;
}

export interface NodeData extends Record<string, unknown> {
  label: string;
  description?: string;
  config: NodeConfig;
  status?: 'idle' | 'running' | 'success' | 'error'; // For simulation
}

export interface AutomationTask {
  id: string;
  label: string;
  params: string[];
}

export type AppNode = Node<NodeData, NodeType>;
