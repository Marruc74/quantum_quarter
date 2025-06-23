import { Menubar } from "primereact/menubar";
import {
  useAppDispatch,
  useAppSelector,
  type AppDispatch,
  type RootState,
} from "../../Redux/Store";
import { setTheme } from "../../Redux/BaseSlice";
import type { FullState } from "../../Redux/Types/Store";

const Header = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const items = [
    {
      label: "Generators",
      icon: "pi pi-fw pi-info-circle",
      items: [
        {
          label: "Tavern",
          icon: "pi pi-fw pi-map",
          url: "/Generators/Tavern",
        },
      ],
    },
  ];
  const themes = [
    { id: "grimdark", name: "Grimdark Steel" },
    { id: "galactic", name: "Galactic Neon" },
    { id: "mystic", name: "Mystic Scroll" },
    { id: "pocket", name: "Pocket Adventure" },
    { id: "noir", name: "Cinema Noir" },
  ];

  const { theme } = useAppSelector(
    (state: RootState) => (state as FullState).base
  );

  // useEffect(() => {
  //   document.body.className = ""; // Remove previous
  //   document.body.classList.add(`theme-${theme}`);
  // }, [theme]);

  const onChangeTheme = (newTheme: string) => {
    dispatch(setTheme(newTheme));
  };

  const start = (
    <div className="flex">
      {/* <a href="/">
        <img
          alt="logo"
          src="/Images/Lönsboda.jpg"
          height="40"
          className="mr-2"
        ></img>
      </a> */}
      <a href="/" className="no-underline" style={{ color: "var(--text)" }}>
        <span id="text" className="text-3xl pl-2 pr-5">
          Quantum Quarters
        </span>
      </a>
    </div>
  );

  const end = (
    <div
      style={{
        display: "flex",
      }}
    >
      <div>
        <select value={theme} onChange={(e) => onChangeTheme(e.target.value)}>
          {themes.map((t) => (
            <option key={t.id} value={t.id}>
              {t.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );

  return (
    <div
      className="fixed-header"
      style={{
        backgroundColor: "var(--accent)",
        color: "var(--text)",
      }}
    >
      <Menubar
        model={items}
        start={start}
        end={end}
        style={{
          backgroundColor: "var(--accent)",
          color: "var(--text)",
          border: "none",
        }}
      />
    </div>
  );
};

export default Header;
