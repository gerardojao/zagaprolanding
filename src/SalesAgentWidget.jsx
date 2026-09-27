import React from "react";
import { X } from "lucide-react";
import "./sales-agent-widget.css";

export default function SalesAgentWidget({ onClose, onContact }) {
  React.useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [onClose]);

  React.useEffect(() => {
    const handleMessage = (event) => {
      if (
        event.origin === window.location.origin &&
        event.data?.type === "zagapro:open-advisor-contact"
      ) {
        onContact();
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [onContact]);

  return (
    <div className="sales-widget-layer" role="dialog" aria-modal="true" aria-label="Chat con Zagui, asesora virtual de ZagaPro">
      <button className="sales-widget-backdrop" type="button" onClick={onClose} aria-label="Cerrar chat con Zaga" />
      <section className="sales-widget-panel">
        <header className="sales-widget-header">
          <span className="sales-widget-avatar" aria-hidden="true">
            <img src="/logozagapro.png" alt="" />
          </span>
          <div>
            <strong>Zagui</strong>
            <span>Asesora virtual de ZagaPro · En línea</span>
          </div>
          <button className="sales-widget-close" type="button" onClick={onClose} aria-label="Cerrar chat">
            <X size={20} />
          </button>
        </header>
        <iframe
          className="sales-widget-frame"
          src="/agente-comercial?embed=1"
          title="Chat comercial de ZagaPro"
        />
      </section>
    </div>
  );
}
