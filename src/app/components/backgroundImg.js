import Image from "next/image";
// import orangeBackground from "/Icons/orangeBackground.svg";

const imgStyle = {
  position: "absolute",
  top: "-25vh",
  right: "-8vw",
  zIndex: -1,
  width: "55vw",
  height: "150vh",
};

export default function BackgroundImg() {
  return (
    <Image
      className="orangeBackground"
      src="./Icons/OrangeBackground.svg"
      width={55}
      height={150}
      style={imgStyle}
      alt="orangeBackground"
    ></Image>
  );
}
