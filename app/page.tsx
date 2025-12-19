"use client";

import { useEffect, useState } from "react";

type LogRow = {
  id: string;
  content: string;
  created_at: string;
};

export default function HomePage() {
  const [content, setContent] = useState("");
  const [logs, setLogs] = useState<LogRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string>("");

  async function loadLogs() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/logs");
      if (!res.ok) throw new Error("Failed to load logs");
      const data = (await res.json()) as LogRow[];
      setLogs(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }

  async function addLog(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");

    try {
      const res = await fetch("/api/logs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || "Failed to save log");
      }

      setContent("");
      await loadLogs();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknown error");
    } finally {
      setSaving(false);
    }
  }

  async function logout() {
    await fetch("/api/logout", { method: "POST" });
    window.location.href = "/login";
  }

  useEffect(() => {
    loadLogs();
  }, []);

  return (
    <main style={{ padding: 24, maxWidth: 800, margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1 style={{ margin: 0 }}>Logs</h1>
        <button onClick={logout}>Logout</button>
      </div>

      <form onSubmit={addLog} style={{ marginTop: 16 }}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write a log..."
          rows={4}
          style={{ width: "100%", padding: 12 }}
        />
        <button
          type="submit"
          disabled={saving || content.trim().length === 0}
          style={{ marginTop: 8 }}
        >
          {saving ? "Saving..." : "Save log"}
        </button>
      </form>

      {error && (
        <p style={{ marginTop: 12, color: "crimson" }}>
          {error}
        </p>
      )}

      <hr style={{ margin: "16px 0" }} />

      {loading ? (
        <p>Loading...</p>
      ) : logs.length === 0 ? (
        <p>No logs yet.</p>
      ) : (
        <ul style={{ paddingLeft: 18 }}>
          {logs.map((log) => (
            <li key={log.id} style={{ marginBottom: 10 }}>
              <div style={{ fontSize: 12, opacity: 0.7 }}>
                {new Date(log.created_at).toLocaleString()}
              </div>
              <div style={{ whiteSpace: "pre-wrap" }}>{log.content}</div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
