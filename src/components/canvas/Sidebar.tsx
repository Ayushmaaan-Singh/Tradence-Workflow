import React from 'react';
import { PlayCircle, ClipboardList, CheckSquare, Zap, Flag } from 'lucide-react';
import type { NodeType } from '../../types/workflow.types';

const NODE_TYPES: { type: NodeType; label: string; icon: React.ReactNode; color: string, bg: string }[] = [
  { type: 'start', label: 'Start Workflow', icon: <PlayCircle className="w-5 h-5" />, color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-100' },
  { type: 'task', label: 'Manual Task', icon: <ClipboardList className="w-5 h-5" />, color: 'text-indigo-600', bg: 'bg-indigo-50 border-indigo-100' },
  { type: 'approval', label: 'Approval', icon: <CheckSquare className="w-5 h-5" />, color: 'text-amber-600', bg: 'bg-amber-50 border-amber-100' },
  { type: 'automated', label: 'Automated Action', icon: <Zap className="w-5 h-5" />, color: 'text-blue-600', bg: 'bg-blue-50 border-blue-100' },
  { type: 'end', label: 'End Workflow', icon: <Flag className="w-5 h-5" />, color: 'text-slate-600', bg: 'bg-slate-50 border-slate-200' },
];

export const Sidebar: React.FC = () => {
  const onDragStart = (event: React.DragEvent, nodeType: string, label: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.setData('application/reactflow/label', label);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className="w-72 bg-white/70 backdrop-blur-xl border-r border-slate-200/60 h-full p-6 flex-shrink-0 shadow-glass z-10 flex flex-col">
      <div className="mb-8">
        <h2 className="text-2xl font-display font-bold text-slate-800 tracking-tight flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          FlowForge
        </h2>
        <p className="text-sm text-slate-500 mt-2 font-medium">Design elegant HR workflows.</p>
      </div>

      <div className="space-y-3 flex-1 overflow-y-auto pr-1">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Components</h3>
        {NODE_TYPES.map((node) => (
          <div
            key={node.type}
            className={`flex items-center gap-3 p-3.5 rounded-xl cursor-grab transition-all duration-300 border hover:shadow-glass-hover hover:-translate-y-0.5 group bg-white/80 backdrop-blur-sm ${node.bg}`}
            onDragStart={(event) => onDragStart(event, node.type, node.label)}
            draggable
          >
            <div className={`p-2 rounded-lg bg-white shadow-sm transition-transform duration-300 group-hover:scale-110 ${node.color}`}>
              {node.icon}
            </div>
            <span className="text-sm font-semibold text-slate-700">{node.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
