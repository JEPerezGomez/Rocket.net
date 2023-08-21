import { Polygon } from "react-leaflet";

const multiPolygon = [
    [
      [10.149409867648046, -69.31693077380928],
      [10.162045025328949, -69.31450310115423],
      [10.164255414917447, -69.30597574043952],
      [10.162403284069601, -69.29878345649429],
      [10.156697849675172, -69.2959917052062],
      [10.15221705532007, -69.29417102250999],
      [10.149409851722963, -69.31134719008824],
    ],
    [
        [10.190207094994289, -69.30730422139028],
        [10.19689729450552, -69.3056959413563],
        [10.202601794233818, -69.29908042420377],
        [10.196598368858908, -69.29061384090134],
        [10.189400627663423, -69.29698672743774],
        [10.189759110137505, -69.30499795080952],
    ],
    [
        [10.066328841747826, -69.356659260275],
        [10.079833452254148, -69.33420055145172],
        [10.084254307274165, -69.31428868775386],
        [10.079350230535713, -69.28891090647195],
        [10.060942632645304, -69.29280196649825],
        [10.05652574209877, -69.32412746128796],
        [10.047803481989137, -69.35204735276271],
    ],
  ]

const Cobertura = () => {
    return(
        <Polygon color="blue" positions={multiPolygon}/>
    )
};

export default Cobertura;