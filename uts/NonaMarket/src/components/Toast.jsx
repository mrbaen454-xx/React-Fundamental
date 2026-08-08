import { CheckCircle, AlertCircle } from 'lucide-react';
import { useEffect } from 'react';

const Toast = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(onClose, 2500);
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] animate-in slide-in-from-bottom-5 fade-in duration-300">
      <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-deep/95 backdrop-blur-md border border-white/20 shadow-2xl shadow-black/50 text-sand-warm font-medium text-sm">
        {type === 'success' ? (
          <CheckCircle className="w-5 h-5 text-emerald-400" />
        ) : (
          <AlertCircle className="w-5 h-5 text-orange-400" />
        )}
        {message}
      </div>
    </div>
  );
};

export default Toast;
