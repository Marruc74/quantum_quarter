import { Menubar } from "primereact/menubar";

const Header = () => {
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

  const start = (
    <div
      style={{
        display: "flex",
      }}
    >
      {/* <a href="/">
        <img
          alt="logo"
          src="/Images/Lönsboda.jpg"
          height="40"
          className="mr-2"
        ></img>
      </a> */}
      <a
        href="/"
        style={{
          textDecoration: "none",
        }}
      >
        <span
          id="text"
          style={{
            fontSize: "30px",
            paddingLeft: "10px",
            paddingRight: "20px",
          }}
        >
          Quantum Quarters
        </span>
      </a>
    </div>
  );

  return (
    <div
      className="fixed-header"
      style={{
        backgroundColor: "#c5d4f7",
      }}
    >
      <Menubar
        model={items}
        start={start}
        // end={end}
        style={{
          backgroundColor: "#c5d4f7",
        }}
      />
    </div>
  );
};

export default Header;
