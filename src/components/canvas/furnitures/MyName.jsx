import Letters from "./Letters";

const MyName = ({ base }) => {
  const name = "PH.Manh";
  const add = [0, 2, 4, 5, 7.7, 9.4, 11.2];

  return (
    <>
      {[...name].map((item, index) => (
        <Letters
          key={index}
          position={[base[0] + add[index], 0, base[1]]}
          text={item}
          fontSize={2.5}
          bevel={0.1}
          rotation={[0, 0, 0]}
          thickness={0.25}
          color="#20ff80"
        />
      ))}
      <Letters
        position={[-7, 0, 8.5]}
        text="Lit"
        fontSize={1}
        rotation={[0, Math.PI / 3, 0]}
        thickness={0}
        bevel={0.03}
        color="#ff0050"
      />
      <Letters
        position={[-6.8, 0, 6.4]}
        text="It"
        fontSize={1}
        rotation={[0, Math.PI / 3, 0]}
        thickness={0}
        bevel={0.03}
        color="#00f2ea"
      />
      <Letters
        position={[-7, 0, 5]}
        text="Make"
        fontSize={1}
        rotation={[0, Math.PI / 3, 0]}
        thickness={0}
        bevel={0.03}
        color="#F4DF4E"
      />
    </>
  );
};

export default MyName;
