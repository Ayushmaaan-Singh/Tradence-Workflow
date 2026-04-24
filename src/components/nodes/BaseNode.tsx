import React from 'react';
import { Handle, Position } from '@xyflow/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BaseNodeProps {
  label: string;
  selected?: boolean;
  status?: 'idle' | 'running' | 'success' | 'error';
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  hasInput?: boolean;
  hasOutput?: boolean;
  headerColor?: string;
}

export const BaseNode: React.FC<BaseNodeProps> = ({
  label,
  selected,
  status = 'idle',
  icon,
  children,
  className,
  hasInput = true,
  hasOutput = true,
  headerColor = 'bg-slate-50 border-slate-100',
}) => {
  const statusColors = {
    idle: 'border-slate-200',
    running: 'border-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.5)]',
    success: 'border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.5)]',
    error: 'border-red-400 shadow-[0_0_15px_rgba(239,68,68,0.5)]',
  };

  return (
    <div
      className={cn(
        'min-w-[220px] bg-white/95 backdrop-blur-md rounded-xl shadow-lg border transition-all duration-300 group',
        statusColors[status],
        selected ? 'ring-2 ring-indigo-500 shadow-xl border-indigo-500 scale-[1.02]' : 'hover:shadow-xl hover:-translate-y-0.5 hover:border-slate-300',
        className
      )}
    >
      {hasInput && (
        <Handle
          type="target"
          position={Position.Top}
          className="w-3.5 h-3.5 bg-slate-100 border-2 border-slate-400 rounded-full -mt-1.5 transition-colors group-hover:border-indigo-400 group-hover:bg-indigo-50"
        />
      )}

      <div className={cn("p-3.5 border-b flex items-center gap-2.5 rounded-t-xl", headerColor)}>
        {icon && <div className="p-1.5 bg-white rounded-lg shadow-sm">{icon}</div>}
        <div className="font-display font-semibold text-sm text-slate-800 tracking-tight">{label}</div>
      </div>

      <div className="p-4 text-sm text-slate-600 bg-white/50 rounded-b-xl">
        {children}
      </div>

      {hasOutput && (
        <Handle
          type="source"
          position={Position.Bottom}
          className="w-3.5 h-3.5 bg-slate-100 border-2 border-slate-400 rounded-full -mb-1.5 transition-colors group-hover:border-indigo-400 group-hover:bg-indigo-50"
        />
      )}
    </div>
  );
};
