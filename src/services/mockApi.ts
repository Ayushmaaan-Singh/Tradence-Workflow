import type { AutomationTask } from '../types/workflow.types';

const sleep = (ms: number) => new Promise(res => setTimeout(res, ms));

export const fetchAutomations = async (): Promise<AutomationTask[]> => {
  await sleep(500);
  return [
    { id: 'send_email', label: 'Send Email', params: ['to', 'subject'] },
    { id: 'generate_pdf', label: 'Generate PDF', params: ['template_id'] },
    { id: 'update_record', label: 'Update Employee Record', params: ['employee_id', 'status'] },
    { id: 'notify_slack', label: 'Notify Slack Channel', params: ['channel', 'message'] }
  ];
};
