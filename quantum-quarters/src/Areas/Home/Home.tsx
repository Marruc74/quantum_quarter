const Home = () => {
  return (
    <main style={{ padding: "2rem", backgroundColor: "var(--primary)" }}>
      <p style={{ color: "var(--text)" }}>
        Insert coin to enter multiversal randomness.
      </p>
      <div
        style={{
          backgroundColor: "var(--accent)",
          color: "var(--text)",
          border: "none",
          padding: "1rem",
          marginTop: "1rem",
        }}
      >
        Tada!
      </div>
    </main>
  );
};

export default Home;
