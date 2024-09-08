## The Text

    We can use Text3dHelper from drei to create 3d texts.
    We need to use TextGeometry

    To use Text3D we need to provide a typeface font to it.

    By default a meshBasicMaterial is applied to Text3d but we can change it by providing another material.

    Centering:

    We can use the techniques we used in three.js for centering the by centering the geometry.
    But we can use the 'Center' helper from drei.

    All the parameters that can be used to create the TextGeometry can be set as attributes.

    matcap texture:

    We are going to use a specific drei helper 'useMatCapTexture' that will load matcaps automatically from the remote repository.
    https://github.com/emmelleppi/matcaps

    useMatCapTexture returns an array and the first element is usefull to us.

    Donuts :

    Creating donuts
    <mesh>
        <torusGeometry args={[1, 0.6, 16, 32]} />
        <meshMatcapMaterial matcap={matcapTexture} />
    </mesh>

    Multiple Donuts

    We can loop and place them randomly.

      {[...Array(100)].map((value, index) => (
        <mesh
          key={index}
          position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
          ]}
          scale={0.2 + Math.random() * 0.2}
          rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
        >
          <torusGeometry args={[1, 0.6, 16, 32]} />
          <meshMatcapMaterial matcap={matcapTexture} />
        </mesh>
      ))}

    Geometries :

    Due to mapping we have multiple geometries, since we have similar geometries we don't need to create multiple geometry. To optimize the application we have to create a geometry only single time.

    To fix this we have multiple ways

    1.  Using r3f tricks

        Create one <torusGeometry> outside of the mesh
        Store the geometry using react's useState.
        Put the geometry state back on the <mesh> of the donuts

        <torusGeometry ref={setTorusGeometry} args={[1, 0.6, 16, 32]} />

        passing a function to ref attribute is similar to setting the value of torusGeometry state equal to the
        <torusGeometry args={[1, 0.6, 16, 32]} />  or calling

        setTorusGeometry(<torusGeometry args={[1, 0.6, 16, 32]} />) =  <torusGeometry ref={setTorusGeometry} args={[1, 0.6, 16, 32]} />

    2. Using Three.js (primitive)
