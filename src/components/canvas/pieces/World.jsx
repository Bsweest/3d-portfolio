import { useGLTF } from "@react-three/drei";
import { RigidBody, MeshCollider } from "@react-three/rapier";

export default function World() {
  const { nodes, materials } = useGLTF("/models/portfolio-world.glb");
  return (
    <RigidBody type="kinematicPosition" rotation={[0, Math.PI, 0]}>
      <group dispose={null}>
        <group
          position={[8.76, 1.7, 7.55]}
          rotation={[-1.58, -0.01, -2.3]}
          scale={0.21}
        >
          <group position={[-2.08, -1.49, 0.43]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_7002.geometry}
              material={materials.wire}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_7002_1.geometry}
              material={materials.Black}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_7002_2.geometry}
              material={materials.Black}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_7002_3.geometry}
              material={materials.White}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_7002_4.geometry}
              material={materials.Grey}
            />
          </group>
        </group>
        <group position={[-10, 0, -14]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube013.geometry}
            material={materials.Wooden}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube013_1.geometry}
            material={materials.White}
          />
        </group>
        <group position={[10, 0, -14]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube005_1.geometry}
            material={materials.Wooden}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube005_2.geometry}
            material={materials.White}
          />
        </group>
        <group position={[40.87, 1, -20.26]} rotation={[-Math.PI / 2, 0, 0.25]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube021_1_1.geometry}
            material={materials.Grey_Light}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube021_1_2.geometry}
            material={materials.Grey_Dark}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube021_1_3.geometry}
            material={materials.Glow}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lantern.geometry}
          material={materials.Black_Light}
          position={[-41.45, 5.32, -25.75]}
          rotation={[-Math.PI / 2, 0, 0.71]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube023_0001.geometry}
            material={materials.Glow}
            position={[-1.7, -1.72, 4.11]}
          />
        </mesh>
        <group position={[21.03, 1.5, -22.94]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube028_0_1.geometry}
            material={materials.Grey_Dark}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube028_0_2.geometry}
            material={materials.Yellow}
          />
        </group>
        <group position={[-8.49, 1, -21.8]} rotation={[-Math.PI / 2, 0, 0.46]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007_2001_1.geometry}
            material={materials.Glow}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007_2001_2.geometry}
            material={materials.Grey_Light}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007_2001_3.geometry}
            material={materials.Tan_Grey}
          />
        </group>
        <group position={[-8.2, 1, -23.9]} rotation={[-Math.PI / 2, 0, 0.46]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007_2002_1.geometry}
            material={materials.Glow}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007_2002_2.geometry}
            material={materials.Grey_Light}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007_2002_3.geometry}
            material={materials.Tan_Grey}
          />
        </group>
        <group
          position={[-10.23, 1, -23.21]}
          rotation={[-Math.PI / 2, 0, 0.46]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007_2003_1.geometry}
            material={materials.Glow}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007_2003_2.geometry}
            material={materials.Grey_Light}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007_2003_3.geometry}
            material={materials.Tan_Grey}
          />
        </group>
        <group position={[-8.84, 3, -22.81]} rotation={[-Math.PI / 2, 0, 0.46]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007_2004_1.geometry}
            material={materials.Glow}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007_2004_2.geometry}
            material={materials.Grey_Light}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007_2004_3.geometry}
            material={materials.Tan_Grey}
          />
        </group>
        <group position={[65.44, 1, -30.45]} rotation={[-Math.PI / 2, 0, 0.46]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007_2005_1.geometry}
            material={materials.Glow}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007_2005_2.geometry}
            material={materials.Grey_Light}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007_2005_3.geometry}
            material={materials.Tan_Grey}
          />
        </group>
        <group position={[65.9, 1, -32.7]} rotation={[-1.18, -0.5, 0.08]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007_2006_1.geometry}
            material={materials.Glow}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007_2006_2.geometry}
            material={materials.Grey_Light}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007_2006_3.geometry}
            material={materials.Tan_Grey}
          />
        </group>
        <group position={[63.81, 1, -31.7]} rotation={[-Math.PI / 2, 0, 0.46]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007_2007_1.geometry}
            material={materials.Glow}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007_2007_2.geometry}
            material={materials.Grey_Light}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007_2007_3.geometry}
            material={materials.Tan_Grey}
          />
        </group>
        <group
          position={[-41.53, 1.5, -28.81]}
          rotation={[-Math.PI / 2, 0, -2.57]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube012_1_1.geometry}
            material={materials.Grey_Dark}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube012_1_2.geometry}
            material={materials.Grey_Light}
          />
        </group>
        <group position={[58.43, 1, 6.1]} rotation={[-Math.PI / 2, 0, 0.51]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube021_1001_1.geometry}
            material={materials.Grey_Light}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube021_1001_2.geometry}
            material={materials.Grey_Dark}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube021_1001_3.geometry}
            material={materials.Glow}
          />
        </group>
        <group position={[0, 0, -25]} rotation={[0, 1.57, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube011.geometry}
            material={materials.Wooden}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube011_1.geometry}
            material={materials.White}
          />
        </group>
        <group position={[-7, 0.25, -45]} scale={[1.5, 0.25, 1.5]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_1.geometry}
            material={materials.Grey}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_2.geometry}
            material={materials.White}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials.White}
          position={[-14, 0.5, -75]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials.White}
          position={[-18.5, 0.5, -75]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials.White}
          position={[-23, 0.5, -75]}
        />
        <group position={[-14.33, 1, -75.05]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_1.geometry}
            material={materials.White}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_1_1.geometry}
            material={materials.Blue}
          />
        </group>
        <group position={[-18.5, 0.1, -75]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mailbox_1.geometry}
            material={materials.White}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mailbox_1_1.geometry}
            material={materials.Red}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mailbox_1_2.geometry}
            material={materials.White}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials.White}
          position={[-27.5, 0.5, -75]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LinkedIn.geometry}
          material={materials.linkBlue}
          position={[-27.5, 2, -75]}
        />
        <MeshCollider type={false}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text.geometry}
            material={materials.White}
            position={[-26.8, 1.5, -75.265]}
            rotation={[Math.PI / 2, 0, Math.PI]}
          />
        </MeshCollider>
        <group position={[-7, 0.25, -60]} scale={[1.5, 0.25, 1.5]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube010.geometry}
            material={materials.Grey}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube010_1.geometry}
            material={materials.White}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Github.geometry}
          material={materials.Purple}
          position={[-23, 2, -75]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[0.02, 0.07, 0.02]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rock.geometry}
          material={materials.Stone}
          position={[-9.38, 0, -74.95]}
          rotation={[-Math.PI / 2, 0, -0.69]}
          scale={0.93}
        />
        <MeshCollider type={false}>
          <group position={[18.85, 5.16, -53]} rotation={[-1.57, 1.57, 3.14]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube003_hoop_0.geometry}
              material={materials.hoop}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube003_hoop_0_1.geometry}
              material={materials.Black}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube003_hoop_0_2.geometry}
              material={materials.White}
            />
          </group>
        </MeshCollider>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lantern001.geometry}
          material={materials.Black_Light}
          position={[-29.03, 5.32, -69.78]}
          rotation={[-Math.PI / 2, 0, -3.1]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube023_0002_1.geometry}
            material={materials.Glow}
            position={[-1.7, -1.72, 4.11]}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Flag.geometry}
          material={materials.White}
          position={[-8.5, 2, -72.5]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FlagRed.geometry}
            material={materials.Red}
            position={[0, 0.9, 1.3]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          />
          <MeshCollider type={false}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.FlagStar.geometry}
              material={materials.Yellow}
              position={[0, 0.9, 1.3]}
              rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
          </MeshCollider>
        </mesh>
        <MeshCollider type={false}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus.geometry}
            material={materials.White}
            position={[22, 0, -15]}
            scale={[8, 2.4, 10]}
          />
        </MeshCollider>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Fence.geometry}
          material={materials.RedWood}
          position={[47.33, 1.39, -12.28]}
          rotation={[-Math.PI, 1.57, -Math.PI]}
        />
        <MeshCollider type={false}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Goal.geometry}
            material={materials["Material.002"]}
            position={[58, 3.03, -0.02]}
          />
        </MeshCollider>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Fence01.geometry}
          material={materials.RedWood}
          position={[47.72, 1.39, -18.99]}
          rotation={[-Math.PI, 1.57, -Math.PI]}
        />
        <MeshCollider type={false}>
          <group position={[-2, 0.01, -14]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Pixel.geometry}
              material={materials.grass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Pixel_1.geometry}
              material={materials.dirt}
            />
          </group>
          <group position={[0, 0.01, -47]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane001.geometry}
              material={materials.end_stone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane001_1.geometry}
              material={materials.cobble}
            />
          </group>
        </MeshCollider>
        <group position={[7.74, 1, -75.97]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Malva_Out_0.geometry}
            material={materials.cup}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Malva_Out_0_1.geometry}
            material={materials.Rabit}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Malva_Out_0_2.geometry}
            material={materials.pettan}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Malva_Out_0_3.geometry}
            material={materials.Table}
          />
        </group>
        <group position={[7, 0, -45]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box001_Box001_mtl_0.geometry}
            material={materials.sword1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box001_Box001_mtl_0_1.geometry}
            material={materials.sword2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box001_Box001_mtl_0_2.geometry}
            material={materials.sword3}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box001_Box001_mtl_0_3.geometry}
            material={materials["minecraft-player"]}
          />
        </group>
        <MeshCollider type={false}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Laplus.geometry}
            material={materials.LaplusHair}
            position={[-7, 0.5, -45]}
            rotation={[-Math.PI / 2, 0, -2.53]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube001_Material_0.geometry}
              material={materials.LaplusMat}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_Material_0.geometry}
              material={materials.LaplusMat}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane_Material_0.geometry}
              material={materials.LaplusMat}
            />
          </mesh>
        </MeshCollider>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.JOJO.geometry}
          material={materials.jojo}
          position={[-6.93, 2.9, -59.99]}
          rotation={[-Math.PI / 2, 0, -2.36]}
        />
        <MeshCollider type={false}>
          <group
            position={[-7.29, 1.31, -74.99]}
            rotation={[-Math.PI, 1.07, -Math.PI]}
            scale={0.93}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sword_gold_0.geometry}
              material={materials["Turtle Body"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sword_gold_0_1.geometry}
              material={materials.Shell}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sword_gold_0_2.geometry}
              material={materials.Black}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sword_gold_0_3.geometry}
              material={materials.Brown}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sword_gold_0_4.geometry}
              material={materials.White}
            />
          </group>
        </MeshCollider>
        <group
          position={[18.34, 0.75, -55.33]}
          rotation={[Math.PI, -Math.PI / 4, Math.PI]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_1001.geometry}
            material={materials.Outline}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_1001_1.geometry}
            material={materials["Bumbox.001"]}
          />
        </group>
      </group>
    </RigidBody>
  );
}

{
  /* <MeshCollider type={false}>

</MeshCollider> */
}
