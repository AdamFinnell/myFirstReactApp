# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


===========================================================================================================================

  return (
    <aside style={{ backgroundColor: color, width: "200px", padding: "1rem" }}>
      <h3>Choose Sidebar Color</h3>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {colors.map((c, index) => (
          <li
            key={index}
            onClick={() => setColor(c)}
            style={{
              backgroundColor: c,
              padding: "0.5rem",
              margin: "0.3rem 0",
              cursor: "pointer",
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.2)"
            }}
          >
            {c}
          </li>
        ))}
      </ul>
    </aside>
  );


=============================================================================================================================