export default function HomePage() {
  return (
    <main style={{ padding: 40 }}>
      <h1>You are logged in</h1>

      <form action="/api/logout" method="post">
        <button type="submit" style={{ marginTop: 20 }}>
          Logout
        </button>
      </form>
    </main>
  );
}
